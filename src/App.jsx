import { useEffect, useState } from 'react'
import {
  ArrowUpRight,
  CalendarPlus,
  Code2,
  Laptop,
  MapPin,
  Rocket,
  ShieldCheck,
  Sparkles,
  Terminal,
  Users2,
  Workflow,
} from 'lucide-react'

const RSVP_URL = 'https://forms.gle/TODO-February-Mastermind'
const MAPS_URL = 'https://maps.google.com/?q=Vila+Gale+Lisbon'
const WHATSAPP_URL = 'https://chat.whatsapp.com/TODO'
const TELEGRAM_URL = 'https://t.me/TODO'
const CALENDAR_FILE = '/february-mastermind.ics'

const learnItems = [
  {
    title: 'What agents can do for you',
    description: 'Real use-cases for daily operations, coding, and decision support.',
    icon: Sparkles,
  },
  {
    title: 'How to spin up new OpenClaw agents in 5 minutes',
    description: 'A repeatable setup flow you can copy immediately after the session.',
    icon: Rocket,
  },
  {
    title: 'How to run agents securely on your computer or on a server',
    description: 'Permission boundaries, execution safety, and practical guardrails.',
    icon: ShieldCheck,
  },
  {
    title: 'How to build and deploy websites and apps from your phone',
    description: 'Mobile-first workflows for shipping quickly when away from your desk.',
    icon: Code2,
  },
  {
    title: 'What’s the current state of private AI',
    description: 'Tradeoffs between local models, hosted inference, and hybrid setups.',
    icon: Terminal,
  },
  {
    title: 'How to work with multiple agents at the same time',
    description: 'Parallel orchestration patterns to get more done with less context-switching.',
    icon: Workflow,
  },
]

const agendaItems = [
  { time: '19:00', title: 'Intro + mental model' },
  { time: '19:20', title: 'Demo: spin up agents' },
  { time: '19:45', title: 'Security + private AI' },
  { time: '20:10', title: 'Multi-agent workflows' },
  { time: '20:30', title: 'Q&A' },
]

const faqItems = [
  {
    question: 'Do I need to be a developer?',
    answer:
      'No. The talk is practical and beginner-friendly, but developers and technical operators will also get advanced workflows.',
  },
  {
    question: 'Should I bring a laptop?',
    answer: 'Yes. Bring a laptop if you want to follow along during demos and templates.',
  },
  {
    question: 'Is it beginner friendly?',
    answer: 'Yes. Concepts start from first principles and then scale up to intermediate patterns.',
  },
  {
    question: 'Will there be recordings?',
    answer: 'Not guaranteed. Assume this is in-person only and plan to attend live.',
  },
  {
    question: 'Refund/cancellation?',
    answer: 'TODO: add the exact refund and cancellation policy before publishing paid tickets.',
  },
]

function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12)
    }

    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll('[data-reveal]'))
    if (!elements.length) {
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.18 }
    )

    for (const element of elements) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-slate-950 text-slate-100 antialiased">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-24 h-80 w-80 rounded-full bg-cyan-400/25 blur-[130px]" />
        <div className="absolute right-0 top-[28rem] h-72 w-72 rounded-full bg-emerald-300/15 blur-[130px]" />
        <div className="app-grid absolute inset-0 opacity-45" />
        <div className="noise-overlay absolute inset-0" />
      </div>

      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'border-b border-slate-700/70 bg-slate-950/85 shadow-[0_8px_32px_rgba(2,6,23,0.45)] backdrop-blur-xl'
            : 'border-b border-transparent bg-transparent'
        }`}
      >
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <a
            href="#top"
            className="text-sm font-semibold tracking-[0.2em] text-slate-100 transition-colors hover:text-cyan-300"
          >
            FEBRUARY MASTERMIND
          </a>
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="#venue"
              className="hidden rounded-full border border-slate-700 px-4 py-2 text-xs font-medium text-slate-300 transition-all hover:border-cyan-300 hover:text-cyan-100 sm:inline-flex"
            >
              Venue
            </a>
            <a
              href={RSVP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-cyan-300 px-4 py-2 text-xs font-semibold text-slate-950 transition-all hover:bg-cyan-200"
            >
              RSVP
              <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          </div>
        </div>
      </header>

      <main id="top" className="relative z-10 pb-28">
        <section className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 pb-14 pt-28 sm:px-6 sm:pt-32 lg:px-8 lg:pt-36">
          <div className="reveal inline-flex w-fit items-center gap-2 rounded-full border border-cyan-300/40 bg-slate-900/80 px-3 py-1 text-xs font-medium text-cyan-200" data-reveal>
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
            Tuesday, Feb 24 — 19:00 · Vila Galé (Lisbon)
          </div>
          <div className="grid items-end gap-8 lg:grid-cols-[minmax(0,1fr)_18rem]">
            <div className="space-y-5">
              <p className="reveal text-xs font-semibold tracking-[0.22em] text-cyan-200/90" data-reveal>
                LIVE IN-PERSON TALK
              </p>
              <h1 className="reveal text-4xl font-black leading-[0.9] tracking-tight text-white sm:text-5xl lg:text-6xl" data-reveal>
                FEBRUARY MASTERMIND
              </h1>
              <p className="reveal text-xl font-semibold text-slate-100 sm:text-2xl" data-reveal>
                State of the Art AI Agent Workflows
              </p>
              <p className="reveal text-base text-slate-300 sm:text-lg" data-reveal>
                With OpenClaw, Codex, Claude Code and more
              </p>
              <p className="reveal text-sm text-slate-400 sm:text-base" data-reveal>
                Taught by @norbertdragan
              </p>

              <div className="reveal flex flex-wrap gap-3" data-reveal>
                <a
                  href={RSVP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary"
                >
                  Reserve my spot
                  <ArrowUpRight size={16} aria-hidden="true" />
                </a>
                <a href={CALENDAR_FILE} download className="btn-secondary">
                  <CalendarPlus size={16} aria-hidden="true" />
                  Add to Calendar
                </a>
              </div>

              <div className="reveal flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-300" data-reveal>
                <span className="inline-flex items-center gap-2">
                  <Sparkles size={15} className="text-cyan-300" aria-hidden="true" />
                  Practical demos + templates you can reuse
                </span>
                <span className="inline-flex rounded-full border border-emerald-300/35 bg-emerald-400/10 px-2.5 py-1 text-xs font-medium text-emerald-200">
                  Limited seats
                </span>
              </div>

              <div className="reveal flex flex-wrap gap-x-4 gap-y-2 text-xs text-slate-400 sm:text-sm" data-reveal>
                <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="hover:text-cyan-200">
                  Join WhatsApp (TODO link)
                </a>
                <a href={TELEGRAM_URL} target="_blank" rel="noreferrer" className="hover:text-cyan-200">
                  Join Telegram (TODO link)
                </a>
              </div>
            </div>

            <aside className="reveal rounded-3xl border border-slate-800 bg-slate-900/70 p-5 shadow-[0_0_0_1px_rgba(20,184,166,0.08)] backdrop-blur" data-reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">Bring this</p>
              <p className="mt-3 inline-flex items-center gap-2 text-base font-medium text-slate-100">
                <Laptop size={18} className="text-cyan-300" aria-hidden="true" />
                Bring a laptop if you want to follow along.
              </p>
              <p className="mt-4 text-xs text-slate-400">
                TODO: replace placeholder RSVP URL before publishing.
              </p>
            </aside>
          </div>
        </section>

        <section id="learn" className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="reveal mb-8" data-reveal>
            <h2 className="text-2xl font-bold text-white sm:text-3xl">What you’ll learn</h2>
            <p className="mt-2 max-w-2xl text-sm text-slate-400 sm:text-base">
              Hands-on patterns you can apply the same week.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {learnItems.map((item) => {
              const Icon = item.icon
              return (
                <article
                  key={item.title}
                  className="reveal rounded-2xl border border-slate-800 bg-slate-900/65 p-5 shadow-[inset_0_1px_0_rgba(148,163,184,0.08)]"
                  data-reveal
                >
                  <div className="inline-flex rounded-xl border border-cyan-300/25 bg-cyan-300/10 p-2">
                    <Icon size={17} className="text-cyan-200" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-slate-100">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-400">{item.description}</p>
                </article>
              )
            })}
          </div>
        </section>

        <section id="agenda" className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="reveal mb-8" data-reveal>
            <h2 className="text-2xl font-bold text-white sm:text-3xl">Agenda</h2>
          </div>
          <ol className="space-y-3">
            {agendaItems.map((item) => (
              <li
                key={`${item.time}-${item.title}`}
                className="reveal flex items-start gap-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-4"
                data-reveal
              >
                <span className="inline-flex min-w-16 items-center justify-center rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 text-xs font-semibold text-cyan-200">
                  {item.time}
                </span>
                <div className="mt-0.5 border-l border-slate-700 pl-4 text-sm text-slate-200 sm:text-base">
                  {item.title}
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section id="speaker" className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="reveal rounded-3xl border border-slate-800 bg-slate-900/65 p-6 sm:p-8" data-reveal>
            <div className="grid items-center gap-7 md:grid-cols-[7rem_minmax(0,1fr)]">
              <img
                src="/norbert.jpg"
                alt="Norbert Dragan"
                className="h-28 w-28 rounded-2xl border border-slate-700 object-cover"
                loading="lazy"
              />
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">Speaker</p>
                <h2 className="mt-2 text-2xl font-bold text-white">Norbert Dragan</h2>
                <p className="mt-3 max-w-2xl text-sm text-slate-300 sm:text-base">
                  Engineer and builder of agent workflows focused on practical systems people can run and trust.
                </p>
                <div className="mt-4 flex flex-wrap gap-4 text-sm text-slate-400">
                  <a href="https://x.com/TODO" target="_blank" rel="noreferrer" className="hover:text-cyan-200">
                    X (TODO)
                  </a>
                  <a href="https://instagram.com/TODO" target="_blank" rel="noreferrer" className="hover:text-cyan-200">
                    Instagram (TODO)
                  </a>
                  <a href="https://github.com/TODO" target="_blank" rel="noreferrer" className="hover:text-cyan-200">
                    GitHub (TODO)
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="venue" className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="reveal rounded-3xl border border-slate-800 bg-slate-900/65 p-6 sm:p-8" data-reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">Venue</p>
            <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">Vila Galé, Lisbon</h2>
            <p className="mt-3 max-w-2xl text-sm text-slate-300 sm:text-base">
              Arrive 10-15 minutes early for check-in. Parking and metro access are available nearby.
            </p>
            <p className="mt-3 inline-flex items-center gap-2 rounded-xl border border-slate-700/80 bg-slate-950/65 px-3 py-2 text-sm text-slate-300">
              <MapPin size={16} className="text-cyan-200" aria-hidden="true" />
              TODO: exact street address line for Vila Galé.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a href={MAPS_URL} target="_blank" rel="noreferrer" className="btn-secondary">
                Open in Maps
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
              <a href={RSVP_URL} target="_blank" rel="noreferrer" className="btn-primary">
                Reserve my spot
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        <section id="faq" className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="reveal mb-8" data-reveal>
            <h2 className="text-2xl font-bold text-white sm:text-3xl">FAQ</h2>
          </div>
          <div className="space-y-3">
            {faqItems.map((item) => (
              <details key={item.question} className="reveal faq-item rounded-2xl border border-slate-800 bg-slate-900/65 p-4" data-reveal>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-slate-100 sm:text-base">
                  {item.question}
                  <span className="text-cyan-300">+</span>
                </summary>
                <p className="pt-3 text-sm text-slate-400">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="reveal rounded-3xl border border-cyan-300/30 bg-gradient-to-r from-cyan-500/20 via-slate-900 to-emerald-400/20 p-7 sm:p-10" data-reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">Final Call</p>
            <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">See you Tuesday.</h2>
            <p className="mt-3 max-w-2xl text-sm text-slate-200 sm:text-base">
              Practical workflows, not hype. Reserve your seat and bring your laptop.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={RSVP_URL} target="_blank" rel="noreferrer" className="btn-primary">
                Reserve my spot
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
              <a href={CALENDAR_FILE} download className="btn-secondary">
                <CalendarPlus size={16} aria-hidden="true" />
                Add to Calendar
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-slate-800/80 bg-slate-950/80 px-4 py-6 pb-24 text-xs text-slate-400 sm:px-6 sm:pb-6 lg:px-8">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p>OpenClaw, Codex, Claude Code are trademarks of their owners.</p>
          <a className="inline-flex items-center gap-2 hover:text-cyan-200" href="mailto:hello@TODO.com">
            <Users2 size={14} aria-hidden="true" />
            hello@TODO.com
          </a>
        </div>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-700/80 bg-slate-950/95 p-3 backdrop-blur md:hidden">
        <div className="mx-auto flex w-full max-w-6xl gap-2">
          <a
            href={RSVP_URL}
            target="_blank"
            rel="noreferrer"
            className="flex-1 rounded-full bg-cyan-300 px-4 py-3 text-center text-sm font-semibold text-slate-950"
          >
            Reserve spot
          </a>
          <a
            href={CALENDAR_FILE}
            download
            className="inline-flex items-center justify-center rounded-full border border-slate-600 px-4 py-3 text-sm font-medium text-slate-200"
            aria-label="Add to calendar"
          >
            <CalendarPlus size={18} aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default App
