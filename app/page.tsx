'use client';

import { useEffect, useMemo, useState } from 'react';
import { defaultPeople, type Person } from '../data/people';

const PEOPLE_STORAGE_KEY = 'farewell-people';
const DEACTIVATION_DATE = new Date('2026-09-11T00:00:00');

function getInitials(name: string) {
  return name
    .split(' ')
    .map((part) => part[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();
}

function getCountdownParts(targetDate: Date) {
  const diff = targetDate.getTime() - Date.now();

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, expired: true };
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return { days, hours, minutes, seconds, expired: false };
}

export default function HomePage() {
  const [people, setPeople] = useState<Person[]>(defaultPeople);
  const [selectedPersonId, setSelectedPersonId] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [countdown, setCountdown] = useState(() => getCountdownParts(DEACTIVATION_DATE));
  const [draft, setDraft] = useState<Person>({
    id: '',
    name: '',
    message: '',
    insideJoke: '',
    enabled: true,
  });

  useEffect(() => {
    document.documentElement.dataset.theme = 'dark';

    const storedPeople = window.localStorage.getItem(PEOPLE_STORAGE_KEY);
    if (storedPeople) {
      try {
        const parsed = JSON.parse(storedPeople) as Person[];
        if (Array.isArray(parsed) && parsed.length > 0) {
          setPeople(parsed);
        }
      } catch {
        // Ignore malformed stored content and fall back to defaults.
      }
    }

    const params = new URLSearchParams(window.location.search);
    const adminMode = params.get('admin') === 'true';
    setIsAdminMode(adminMode);

    const nameParam = params.get('name');
    const match = (storedPeople ? JSON.parse(storedPeople) : defaultPeople).find(
      (person: Person) => person.id === nameParam && person.enabled !== false,
    );
    if (match) {
      setSelectedPersonId(match.id);
      setIsModalOpen(true);
    }

  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = 'dark';
  }, []);

  useEffect(() => {
    if (!isModalOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeCard();
      }
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isModalOpen]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCountdown(getCountdownParts(DEACTIVATION_DATE));
    }, 1000);

    return () => window.clearInterval(timer);
  }, []);

  const visiblePeople = useMemo(
    () => people.filter((person) => person.enabled !== false),
    [people],
  );

  const selectedPerson = useMemo(
    () => visiblePeople.find((person) => person.id === selectedPersonId) ?? null,
    [selectedPersonId, visiblePeople],
  );

  useEffect(() => {
    if (!selectedPerson && isModalOpen) {
      setIsModalOpen(false);
    }
  }, [selectedPerson, isModalOpen]);

  const persistPeople = (nextPeople: Person[]) => {
    setPeople(nextPeople);
    window.localStorage.setItem(PEOPLE_STORAGE_KEY, JSON.stringify(nextPeople));
  };

  const openPerson = (personId: string) => {
    const params = new URLSearchParams(window.location.search);
    params.set('name', personId);
    const url = `${window.location.pathname}?${params.toString()}`;
    window.history.replaceState({}, '', url);
    setSelectedPersonId(personId);
    setIsModalOpen(true);
  };

  const closeCard = () => {
    const params = new URLSearchParams(window.location.search);
    params.delete('name');
    const url = `${window.location.pathname}${params.toString() ? `?${params.toString()}` : ''}`;
    window.history.replaceState({}, '', url);
    setIsModalOpen(false);
    setSelectedPersonId(null);
  };

  const currentIndex = selectedPerson ? visiblePeople.findIndex((person) => person.id === selectedPerson.id) : -1;

  const navigatePerson = (direction: 'prev' | 'next') => {
    if (!selectedPerson) return;
    const nextIndex = direction === 'prev' ? currentIndex - 1 : currentIndex + 1;
    const safeIndex = (nextIndex + visiblePeople.length) % visiblePeople.length;
    const nextPerson = visiblePeople[safeIndex];
    if (nextPerson) {
      openPerson(nextPerson.id);
    }
  };

  const handleDraftChange = (field: keyof Person, value: string | boolean) => {
    setDraft((current) => ({ ...current, [field]: value }));
  };

  const saveDraft = () => {
    if (!draft.id.trim() || !draft.name.trim() || !draft.message.trim()) {
      return;
    }

    const trimmedDraft = {
      ...draft,
      id: draft.id.trim(),
      name: draft.name.trim(),
      message: draft.message.trim(),
      insideJoke: draft.insideJoke?.trim() ?? '',
      enabled: draft.enabled ?? true,
    };

    const duplicateExists = people.some((person) => person.id === trimmedDraft.id && person.name !== trimmedDraft.name);
    if (duplicateExists) {
      return;
    }

    const nextPeople = people.some((person) => person.id === trimmedDraft.id)
      ? people.map((person) => (person.id === trimmedDraft.id ? trimmedDraft : person))
      : [...people, trimmedDraft];

    persistPeople(nextPeople);
    setDraft({ id: '', name: '', message: '', insideJoke: '', enabled: true });
  };

  const deletePerson = (id: string) => {
    const nextPeople = people.filter((person) => person.id !== id);
    persistPeople(nextPeople);
    if (selectedPersonId === id) {
      closeCard();
    }
  };

  return (
    <main className="page-shell">
      <section className="hero">
        <div className="countdown-pill" aria-live="polite">
          <span className="countdown-label">PhonePe's vamsi.a user expires in</span>
          <span className="countdown-value">
            {countdown.expired ? '00d 00h 00m 00s' : `${countdown.days}d ${countdown.hours}h ${countdown.minutes}m ${countdown.seconds}s`}
          </span>
        </div>

        <div className="eyebrow">A small note</div>
        <h1>
          To the people
          <span>who made the journey</span>
          memorable.
        </h1>
        <p className="lead">
          A small collection of words for the people I had the privilege of working with.
        </p>
        <div className="signature">— Vamsi</div>
        <button
          className="journey-button"
          type="button"
          onClick={() => document.getElementById('people')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Begin the journey
        </button>
      </section>

      <section id="people" className="people-section" aria-labelledby="people-heading">
        <div className="section-header">
          <p className="kicker">The people</p>
          <h2 id="people-heading">A few names, a lot of gratitude.</h2>
        </div>

        <div className="person-grid">
          {visiblePeople.map((person) => (
            <button
              key={person.id}
              type="button"
              className={`person-card ${selectedPersonId === person.id ? 'is-selected' : ''}`}
              onClick={() => openPerson(person.id)}
              aria-label={`Open note for ${person.name}`}
            >
              <span className="card-mark" aria-hidden="true">
                {getInitials(person.name)}
              </span>
              <span className="person-name">{person.name}</span>
              <span className="person-label">Open note</span>
            </button>
          ))}
        </div>
      </section>

      <section className="closing">
        <p>
          As I wrap up my time at PhonePe, I wanted to send a final note to thank all of you.
          <br />
          To anyone I might have missed mentioning individually—please forgive me for all the silly mistakes or endless questions over the years! It has been an absolute privilege working alongside such a talented, sharp, and patient group of people.
          <br />
          PhonePe will always hold a very special place in my heart, and I'm taking tons of great memories and lessons with me.
          <br />
          I’d love to stay connected:
          <br />
            LinkedIn:{' '}
            <a href="https://www.linkedin.com/in/vamsi-a/" target="_blank" rel="noreferrer">
              https://www.linkedin.com/in/vamsi-a/
            </a>
          <br />
            Phone / WhatsApp: +91 8073672615
          <br />
            Personal Email:{' '}
            <a href="mailto:vamsi.anamalamudi@gmail.com">vamsi.anamalamudi@gmail.com</a>
          <br />
          <br />
          <br />
        </p>
        <p className="closing-kicker">And if I haven’t said it enough…</p>
        <h3>Thank you.</h3>
        <p>
          For the conversations.
          <br />
          For the chaos.
          <br />
          For the laughs.
          <br />
          For the late nights.
          <br />
          For making work feel a little less like work.
        </p>
        <p className="final-line">I’ll miss you.</p>
        <div className="closing-signature">— Vamsi</div>
      </section>

      {isAdminMode && (
        <section className="admin-panel" aria-label="Manage people">
          <div className="section-header">
            <p className="kicker">Admin</p>
            <h2>People and notes</h2>
          </div>

          <div className="admin-grid">
            <div className="admin-form">
              <label>
                <span>Person ID</span>
                <input value={draft.id} onChange={(event) => handleDraftChange('id', event.target.value)} />
              </label>
              <label>
                <span>Name</span>
                <input value={draft.name} onChange={(event) => handleDraftChange('name', event.target.value)} />
              </label>
              <label>
                <span>Message</span>
                <textarea value={draft.message} onChange={(event) => handleDraftChange('message', event.target.value)} rows={6} />
              </label>
              <label>
                <span>Inside joke</span>
                <textarea value={draft.insideJoke ?? ''} onChange={(event) => handleDraftChange('insideJoke', event.target.value)} rows={3} />
              </label>
              <label className="checkbox-row">
                <input
                  type="checkbox"
                  checked={draft.enabled ?? true}
                  onChange={(event) => handleDraftChange('enabled', event.target.checked)}
                />
                <span>Enabled</span>
              </label>
              <button type="button" className="save-button" onClick={saveDraft}>
                Save person
              </button>
            </div>

            <div className="admin-list">
              {people.map((person) => (
                <div className="admin-item" key={person.id}>
                  <div>
                    <strong>{person.name}</strong>
                    <p>{person.id}</p>
                  </div>
                  <div className="admin-actions">
                    <button type="button" onClick={() => setDraft({ ...person, insideJoke: person.insideJoke ?? '' })}>Edit</button>
                    <button type="button" onClick={() => deletePerson(person.id)}>Delete</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {isModalOpen && selectedPerson && (
        <div className="modal-backdrop" onClick={closeCard} role="presentation">
          <div
            className="note-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="note-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button className="close-button" type="button" onClick={closeCard} aria-label="Close note">
              ×
            </button>

            <div className="modal-header">
              <p className="modal-kicker">A note for</p>
              <h3 id="note-title">{selectedPerson.name}</h3>
            </div>

            <div className="modal-body">
              <p className="greeting">Hey {selectedPerson.name},</p>
              <div className="message-text">
                {selectedPerson.message.split('\n').map((line, index) => (
                  <p key={`${selectedPerson.id}-${index}`}>{line}</p>
                ))}
              </div>

              {selectedPerson.insideJoke && (
                <div className="inside-joke">
                  <span>One of my favorite moments:</span>
                  <p>{selectedPerson.insideJoke}</p>
                </div>
              )}

              <p className="farewell-line">Thank you for being part of this journey.</p>
              <p className="farewell-line">I’ll genuinely miss having you around.</p>
              <p className="signature-line">— Vamsi</p>
            </div>

            <div className="nav-row">
              <button type="button" onClick={() => navigatePerson('prev')} className="nav-button" aria-label="Previous person">
                ← Previous
              </button>
              <button type="button" onClick={closeCard} className="nav-button nav-center">
                Back to everyone
              </button>
              <button type="button" onClick={() => navigatePerson('next')} className="nav-button" aria-label="Next person">
                Next →
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
