import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Music,
  Clock,
  GraduationCap,
  BookOpen,
  Award,
  ChevronDown,
  Star,
  Heart,
  Zap,
  Globe,
} from "lucide-react";
import { useState } from "react";
import SectionHeading from "../components/site/SectionHeading";
import { SITE, FAQS } from "../lib/site";

import herobg from "../assets/herobg.jpg";
import heroPng from "../assets/hero.png";
import violin from "../assets/violin-detail.jpg";
import violin3d from "../assets/Violin-3d.png";
import cello from "../assets/cello.jpg";
import peoplePlaying from "../assets/peopleplayinginstrument-nobg.png";
import musicalNotePng from "../assets/musicalnote.png";
import celloImg from "../assets/cello.jpg";
import lessonImg from "../assets/student-lesson.jpg";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
};

const values = [
  {
    icon: Heart,
    title: "Discipline",
    text: "We cultivate consistent, focused practice that defines lifelong artistry.",
  },
  {
    icon: Star,
    title: "Excellence",
    text: "We pursue uncompromising technical and musical standards.",
  },
  {
    icon: Zap,
    title: "Mentorship",
    text: "Every student is shaped by personal guidance from accomplished tutors.",
  },
  {
    icon: Globe,
    title: "Global Vision",
    text: "We prepare musicians to compete and contribute on the world stage.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const weeklySchedule = [
  {
    title: "Saturday Classes",
    time: "9:00 a.m. – 12:00 p.m.",
    detail: "On-campus ensemble practice, technique labs, and rehearsal sessions.",
  },
  {
    title: "Thursday Training Sessions",
    time: "6:00 p.m. – 7:30 p.m.",
    detail: "Focused chamber coaching, performance polishing, and mentorship.",
  },
  {
    title: "Sunday Online Content",
    time: "Online",
    detail:
      "Livestream and recorded performances — hymns, spiritual songs, quartets, quintets, and social media showcases.",
  },
];

const specialEvents = [
  "Workshops",
  "Holiday music camps",
  "Professional training sessions",
  "Masterclasses",
];

const performanceVenues = [
  "University Convocation Ceremonies",
  "Choir Concerts",
  "Carol Services",
  "Sunday Worship Services",
  "Other major institutional events",
];

const contactDirectory = [
  {
    role: "Director",
    name: "Isaac Ubong Iniobong",
    details: ["09050839519", "uiisaac@jabu.edu.ng"],
  },
  { role: "Coordinator", details: ["08065834962"] },
  { role: "Assistant Coordinator", details: ["07065661493"] },
  { role: "General Secretary", details: ["07075168294"] },
  { role: "Media Officer", details: ["07047919688"] },
];

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const HeroViolinDecor = () => (
  <svg
    viewBox="0 0 112 220"
    className="hero-violin-svg absolute hidden xl:block left-6 top-24 h-64 w-auto text-[var(--color-gold)] opacity-20"
    aria-hidden="true"
  >
    <path
      d="M34 18C46 8 74 6 82 22c8 16-6 40-16 54-11 15-22 18-28 22-6 4-12 18-6 28 6 10 18 8 24 6 6-2 22-18 28-22 6-4 14-4 18 0 4 4 8 16 4 28-4 12-18 24-32 26-12 2-30 0-36-8-6-8-6-26 2-38 8-12 24-16 28-28 4-12-2-26-14-36-12-10-28-16-32-34-4-18 8-28 18-36z"
      fill="currentColor"
      opacity="0.16"
    />
    <path
      d="M48 104c1 16-2 38-6 54"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <path
      d="M58 96c1 16-1 36-5 54"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <path
      d="M46 36c4 12 14 18 22 18"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <circle cx="74" cy="44" r="4" fill="currentColor" opacity="0.4" />
  </svg>
);

export default function Home() {
  const [faqOpen, setFaqOpen] = useState(0);

  return (
    <>
      {/* ========== HERO - starts from absolute top, no padding ========== */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-0 -mt-16">
        {/* Background image - spans full viewport from very top */}
        <img
          src={herobg}
          alt="String orchestra in rehearsal"
          className="absolute inset-0 h-full w-full object-cover"
          width={1920}
          height={1280}
        />
        <div
          className="absolute inset-0"
          style={{ background: "var(--gradient-hero)" }}
        />
        <div
          aria-hidden
          className="absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_at_bottom_right,rgba(246,190,57,0.6),transparent_55%)]"
        />

        {/* Floating music notes */}
        <span className="music-note-float">♪</span>
        <span className="music-note-float">♫</span>
        <span className="music-note-float">♩</span>
        <span className="music-note-float">♬</span>
        <HeroViolinDecor />
        <span className="ping-note" style={{ top: "14%", right: "14%" }}>
          ♪
        </span>
        <span
          className="ping-note"
          style={{ top: "24%", left: "20%", fontSize: "1.9rem", animationDelay: "0.4s" }}
        >
          ♫
        </span>

        {/* Hero decorative image */}
        <motion.img
          src={heroPng}
          alt=""
          aria-hidden
          className="absolute right-0 bottom-0 h-[85%] w-auto object-contain opacity-20 md:opacity-40 pointer-events-none hidden md:block"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 0.4, x: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        />

        <div className="container-prose relative z-10 py-20 mt-20 grid lg:grid-cols-12 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="lg:col-span-8 text-ivory"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--color-gold)]/40 bg-ivory/5 backdrop-blur-sm text-[var(--color-gold)] text-xs uppercase tracking-[0.25em]"
            >
              <Sparkles className="h-3.5 w-3.5" />A Premier Conservatory of
              Strings
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-display text-5xl md:text-7xl lg:text-[5.25rem] leading-[1.02] mt-6 text-balance"
            >
              Raising{" "}
              <em className="text-[var(--color-gold)] not-italic font-medium gold-glow-intense">
                Globally
              </em>
              <br />
              Competitive{" "}
              <span className="italic font-light">String Musicians</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-7 max-w-xl text-lg text-ivory/80 leading-relaxed"
            >
              Professional training in Violin, Viola and Cello through
              world-class instruction, mentorship and performance excellence.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-9 flex flex-wrap gap-4"
            >
              <a
                href={SITE.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="btn-hero btn-hero-hover"
              >
                Enroll Now <ArrowRight className="h-4 w-4" />
              </a>
              <Link
                to="/contact"
                className="btn-outline-light hover:bg-white/10"
              >
                Book Assessment
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="mt-14 grid grid-cols-3 gap-8 max-w-lg"
            >
              {[
                { v: "3", l: "Instruments" },
                { v: "7+", l: "Courses" },
                { v: "100%", l: "Mentor-led" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="font-display text-3xl md:text-4xl text-[var(--color-gold)]">
                    {s.v}
                  </div>
                  <div className="text-xs uppercase tracking-[0.2em] text-ivory/60 mt-1">
                    {s.l}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-ivory/50 text-xs uppercase tracking-[0.3em] animate-float-slow">
          scroll
        </div>
      </section>

      {/* ========== INSTRUMENTS ========== */}
      <motion.section
        {...fadeUp}
        transition={{ duration: 0.6 }}
        className="py-24 section-dark"
      >
        <div className="container-prose">
          <SectionHeading
            eyebrow="Our Instruments"
            title="Three Voices. One Tradition."
            subtitle="Each student is matched with the instrument that resonates with their potential."
          />
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-16 grid md:grid-cols-3 gap-6"
          >
            {[
              {
                name: "Violin",
                img: violin,
                text: "The voice of clarity and brilliance — the foundation of orchestral mastery.",
              },
              {
                name: "Viola",
                img: lessonImg,
                text: "Rich, warm and central — the soul of the string ensemble.",
              },
              {
                name: "Cello",
                img: cello,
                fallback: celloImg,
                text: "Depth and resonance — the singing baritone of the strings.",
              },
            ].map((i) => (
              <motion.div
                key={i.name}
                variants={itemVariants}
                className="group relative overflow-hidden rounded-2xl border border-[var(--color-border)] shadow-[var(--shadow-elegant)] hover:shadow-[var(--shadow-gold-intense)] transition-all duration-500"
                style={{ background: "var(--color-card)" }}
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={i.img}
                    alt={i.name}
                    loading="lazy"
                    width={1280}
                    height={960}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-[#0a1628]/20 to-transparent" />
                <div
                  className="absolute bottom-0 left-0 right-0 p-7"
                  style={{ color: "#faf8f5" }}
                >
                  <div className="eyebrow" style={{ color: "var(--color-gold)" }}>
                    String Family
                  </div>
                  <h3 className="font-display text-3xl mt-2">{i.name}</h3>
                  <p className="mt-2 text-sm text-ivory/75">{i.text}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        {/* Subtle 3D violin decorative element */}
        <motion.img
          src={violin3d}
          alt=""
          aria-hidden
          className="absolute left-0 top-1/2 -translate-y-1/2 h-64 w-auto opacity-[0.03] pointer-events-none hidden lg:block"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.03 }}
          viewport={{ once: true }}
        />
      </motion.section>

      {/* ========== ACADEMIC STRUCTURE ========== */}
      <motion.section
        {...fadeUp}
        transition={{ duration: 0.6 }}
        className="py-24 section-darker relative overflow-hidden"
      >
        {/* Decorative background note image */}
        <motion.img
          src={musicalNotePng}
          alt=""
          aria-hidden
          className="absolute right-10 top-10 h-48 w-auto opacity-[0.04] pointer-events-none"
          initial={{ opacity: 0, rotate: -20 }}
          whileInView={{ opacity: 0.04, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />
        <div className="container-prose relative">
          <SectionHeading
            eyebrow="Academic Structure"
            title="Three Grades to Mastery"
            subtitle="A progressive curriculum designed to guide students from beginner to advanced stages."
          />
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-14 grid md:grid-cols-3 gap-5"
          >
            {SITE.grades.map((grade, i) => (
              <motion.div
                key={grade.level}
                variants={itemVariants}
                className="grade-card"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[var(--color-gold)] to-[var(--color-gold-bright)] text-[#402d00] text-sm font-bold">
                    {i + 1}
                  </span>
                  <div>
                    <div className="eyebrow text-[0.6rem]">{grade.level}</div>
                    <h3 className="font-display text-lg text-[var(--color-primary-heading)]">
                      {grade.title}
                    </h3>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-[var(--color-muted-foreground)] mb-3">
                  <Clock className="h-3.5 w-3.5 text-[var(--color-gold)]" />
                  <span>{grade.duration}</span>
                </div>
                {grade.description && (
                  <p className="text-sm text-[var(--color-muted-foreground)] mb-3 italic">
                    {grade.description}
                  </p>
                )}
                <ul className="space-y-1.5">
                  {grade.topics.map((t) => (
                    <li
                      key={t}
                      className="text-sm text-[var(--color-muted-foreground)] flex items-start gap-2"
                    >
                      <span className="text-[var(--color-gold)] mt-0.5">♪</span>
                      {t}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* ========== REGISTRATION & FEES ========== */}
      <motion.section
        {...fadeUp}
        transition={{ duration: 0.6 }}
        className="py-24 section-dark"
      >
        <div className="container-prose">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                eyebrow="Registration & Fees"
                title="Invest in Your Musical Future"
                center={false}
              />
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="mt-8 space-y-4"
              >
                {[
                  {
                    icon: BookOpen,
                    label: "Registration Fee",
                    sub: "One-time payment",
                    value: SITE.fees.registration,
                  },
                  {
                    icon: Music,
                    label: "Physical Programme",
                    sub: "Per semester",
                    value: SITE.fees.physicalSemester,
                  },
                  {
                    icon: GraduationCap,
                    label: "Online Programme",
                    sub: `Duration: ${SITE.fees.onlineDuration}`,
                    value: SITE.fees.onlineTuition,
                  },
                ].map((item, i) => (
                  <motion.div
                    key={item.label}
                    variants={itemVariants}
                    className="flex items-center justify-between p-5 rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] hover:border-[var(--color-gold)]/30 transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full flex items-center justify-center bg-[var(--color-gold)]/10">
                        <item.icon className="h-5 w-5 text-[var(--color-gold)]" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-[var(--color-primary-heading)]">
                          {item.label}
                        </div>
                        <div className="text-xs text-[var(--color-muted-foreground)]">
                          {item.sub}
                        </div>
                      </div>
                    </div>
                    <span className="font-display text-xl text-[var(--color-gold)]">
                      {item.value}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
              <p className="mt-4 text-xs text-[var(--color-muted-foreground)]">
                * Online programme fee is separate from the registration fee.
                Contact us for payment details and enrollment procedures.
              </p>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div
                className="aspect-[4/3] rounded-2xl p-8 md:p-12 flex flex-col justify-center relative overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, #0a1628 0%, #141820 100%)",
                  boxShadow: "var(--shadow-elegant)",
                }}
              >
                {/* Decorative elements */}
                <div
                  aria-hidden
                  className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[var(--color-gold)]/10 blur-2xl"
                />
                <div
                  aria-hidden
                  className="absolute -left-8 -bottom-8 h-24 w-24 rounded-full bg-[var(--color-gold)]/5 blur-xl"
                />
                <motion.img
                  src={musicalNotePng}
                  alt=""
                  aria-hidden
                  className="absolute bottom-4 right-4 h-20 w-auto opacity-[0.06]"
                />
                <div className="relative">
                  <div className="eyebrow">The Conservatory Vision</div>
                  <p className="mt-4 text-lg md:text-xl font-display text-[var(--color-ivory)] leading-relaxed">
                    {SITE.vision}
                  </p>
                  <div className="divider-ornament mt-6">♩</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* ========== ACTIVITIES ========== */}
      <motion.section
        {...fadeUp}
        transition={{ duration: 0.6 }}
        className="py-24 section-darker relative overflow-hidden"
      >
        {/* People playing decoration */}
        <motion.img
          src={peoplePlaying}
          alt=""
          aria-hidden
          className="absolute right-0 bottom-0 h-[80%] w-auto opacity-[0.08] pointer-events-none home-people-playing"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.08 }}
          viewport={{ once: true }}
        />
        <div className="container-prose relative">
          <SectionHeading
            eyebrow="Academy Life"
            title="Activities & Events"
            subtitle="A vibrant calendar of classes, training, and performances year-round."
          />
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-14 grid gap-8 lg:grid-cols-[1.4fr_1fr]"
          >
            <div className="space-y-6">
              <motion.div
                variants={itemVariants}
                className="rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-card)] p-8 shadow-[var(--shadow-elegant)]"
              >
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <div className="eyebrow">Weekly Schedule</div>
                    <h3 className="mt-4 text-3xl font-display text-[var(--color-primary-heading)]">
                      Saturday, Thursday, Sunday rhythms
                    </h3>
                  </div>
                  <div className="text-[4rem] font-bold opacity-10 leading-none">
                    ♪
                  </div>
                </div>
                <div className="mt-8 space-y-4">
                  {weeklySchedule.map((item) => (
                    <div
                      key={item.title}
                      className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-background)] p-5"
                    >
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <div className="text-base font-semibold text-[var(--color-primary-heading)]">
                            {item.title}
                          </div>
                          <div className="text-sm text-[var(--color-gold)] mt-1">
                            {item.time}
                          </div>
                        </div>
                        <div className="text-[1.8rem] opacity-20">♫</div>
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted-foreground)]">
                        {item.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>

              <div className="grid gap-4 sm:grid-cols-2">
                <motion.div
                  variants={itemVariants}
                  className="rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-card)] p-6 shadow-[var(--shadow-elegant)]"
                >
                  <div className="eyebrow">Special Events</div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {specialEvents.map((event) => (
                      <span
                        key={event}
                        className="inline-flex items-center rounded-full border border-[var(--color-border)] bg-[var(--color-background)] px-3 py-2 text-xs text-[var(--color-muted-foreground)] transition-all hover:border-[var(--color-gold)]/40 hover:text-[var(--color-gold)]"
                      >
                        {event}
                      </span>
                    ))}
                  </div>
                </motion.div>
                <motion.div
                  variants={itemVariants}
                  className="rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-card)] p-6 shadow-[var(--shadow-elegant)]"
                >
                  <div className="eyebrow">Performance Venues</div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {performanceVenues.map((venue) => (
                      <span
                        key={venue}
                        className="inline-flex items-center rounded-full border border-[var(--color-border)] bg-[var(--color-background)] px-3 py-2 text-xs text-[var(--color-muted-foreground)] transition-all hover:border-[var(--color-gold)]/40 hover:text-[var(--color-gold)]"
                      >
                        {venue}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>

            <motion.div
              variants={itemVariants}
              className="rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-card)] p-10 shadow-[var(--shadow-elegant)]"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="eyebrow">Seasonal Highlights</div>
                  <h3 className="mt-4 text-3xl font-display text-[var(--color-primary-heading)]">
                    Live streams, hymn specials, and festivals
                  </h3>
                </div>
                <div className="text-[4rem] font-bold opacity-10 leading-none">
                  ♫
                </div>
              </div>
              <p className="mt-8 text-sm leading-relaxed text-[var(--color-muted-foreground)]">
                Every weekend blends training and performance. From online hymn showcases to quartet features and campus concert events, our academy stays active with creative programming for both in-person and digital audiences.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* ========== OPERATIONS ========== */}
      <motion.section
        {...fadeUp}
        transition={{ duration: 0.6 }}
        className="py-24 section-dark"
      >
        <div className="container-prose">
          <SectionHeading
            eyebrow="Operations"
            title="Locations & Contact"
            subtitle="Physical and virtual classes available."
            center={false}
          />
          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            <motion.div
              variants={itemVariants}
              className="rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-card)] p-8 shadow-[var(--shadow-elegant)]"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="eyebrow">Physical Location</div>
                  <h3 className="mt-4 text-3xl font-display text-[var(--color-primary-heading)]">
                    UBY's Violin Academy
                  </h3>
                </div>
                <div className="text-[3rem] opacity-10 leading-none">♪</div>
              </div>
              <div className="mt-6 space-y-4 text-sm text-[var(--color-muted-foreground)]">
                <div>
                  <div className="font-semibold text-[var(--color-primary-heading)]">
                    Joseph Ayo Babalola University
                  </div>
                  <div>Ikeji-Arakeji, Osun State</div>
                  <div>Nigeria</div>
                </div>
                <div className="rounded-[1.75rem] bg-[var(--color-background)] p-5">
                  <div className="text-sm uppercase tracking-[0.25em] text-[var(--color-gold)]">
                    Weekly Schedule
                  </div>
                  <div className="mt-4 space-y-3 text-[var(--color-primary-heading)]">
                    <div>
                      <div className="font-semibold">Saturday Classes</div>
                      <div className="text-xs text-[var(--color-muted-foreground)]">9:00 a.m. – 12:00 p.m.</div>
                    </div>
                    <div>
                      <div className="font-semibold">Thursday Training Sessions</div>
                      <div className="text-xs text-[var(--color-muted-foreground)]">6:00 p.m. – 7:30 p.m.</div>
                    </div>
                    <div>
                      <div className="font-semibold">Sunday Online Content</div>
                      <div className="text-xs text-[var(--color-muted-foreground)]">Online livestream and recorded performances.</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-card)] p-8 shadow-[var(--shadow-elegant)]"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="eyebrow">Contact Directory</div>
                  <h3 className="mt-4 text-3xl font-display text-[var(--color-primary-heading)]">
                    Reach the team
                  </h3>
                </div>
                <div className="text-[3rem] opacity-10 leading-none">♪</div>
              </div>
              <div className="mt-8 space-y-5 text-sm">
                {contactDirectory.map((person) => (
                  <div
                    key={person.role}
                    className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-background)] p-5"
                  >
                    <div className="font-semibold text-[var(--color-primary-heading)]">
                      {person.role}
                    </div>
                    {person.name && <div className="mt-1 text-[var(--color-muted-foreground)]">{person.name}</div>}
                    <div className="mt-3 space-y-1 text-[var(--color-muted-foreground)]">
                      {person.details.map((detail) => (
                        <div key={detail}>{detail}</div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* ========== VALUES ========== */}
      <motion.section
        {...fadeUp}
        transition={{ duration: 0.6 }}
        className="py-24 text-ivory relative overflow-hidden"
        style={{ background: "var(--color-navy-deep)" }}
      >
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(45deg,transparent_48%,var(--color-gold)_49%,var(--color-gold)_51%,transparent_52%)] bg-[length:40px_40px]"
        />
        <div className="container-prose relative">
          <div className="text-center max-w-2xl mx-auto">
            <div className="eyebrow" style={{ color: "var(--color-gold)" }}>
              Our Pillars
            </div>
            <h2 className="font-display text-3xl md:text-5xl mt-3">
              The Conservatory Standard
            </h2>
            <div className="divider-ornament mt-6">♪</div>
          </div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {values.map((v, i) => {
                const Icon = v.icon;
                // eslint-disable-next-line no-unused-vars
              return (
                <motion.div
                  key={v.title}
                  variants={itemVariants}
                  className="border border-ivory/10 bg-ivory/[0.03] rounded-lg p-7 hover:border-[var(--color-gold)]/40 transition-all hover:-translate-y-1"
                >
                  <div className="h-12 w-12 rounded-xl flex items-center justify-center bg-[var(--color-gold)]/10 mb-4">
                    <Icon className="h-6 w-6 text-[var(--color-gold)]" />
                  </div>
                  <div className="font-display text-2xl text-[var(--color-gold)]">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="font-display text-xl mt-3">{v.title}</h3>
                  <p className="mt-2 text-sm text-ivory/70 leading-relaxed">
                    {v.text}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.section>

      {/* ========== FAQ ========== */}
      <motion.section
        {...fadeUp}
        transition={{ duration: 0.6 }}
        className="py-24 section-dark"
      >
        <div className="container-prose max-w-3xl">
          <div className="text-center">
            <div className="eyebrow">Got Questions?</div>
            <h2
              className="font-display text-3xl md:text-4xl mt-3"
              style={{ color: "var(--color-primary-heading)" }}
            >
              Frequently Asked Questions
            </h2>
            <p
              className="mt-3 text-sm"
              style={{ color: "var(--color-muted-foreground)" }}
            >
              Everything you need to know about UBY's String Academy
            </p>
          </div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-12 space-y-3"
          >
            {FAQS.map((f, i) => (
              <motion.div key={f.q} variants={itemVariants} className="faq-accordion">
                <button
                  onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                  className="faq-accordion-header"
                >
                  <span className="flex items-center gap-3">
                    <span className="text-[var(--color-gold)] text-sm">♪</span>
                    <span>{f.q}</span>
                  </span>
                  <ChevronDown
                    className={`faq-accordion-icon ${faqOpen === i ? "open" : ""}`}
                  />
                </button>
                <div
                  className={`faq-accordion-content ${faqOpen === i ? "open" : ""}`}
                >
                  <div className="faq-accordion-body">{f.a}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* ========== CTA ========== */}
      <motion.section
        {...fadeUp}
        transition={{ duration: 0.6 }}
        className="py-24 section-darker"
      >
        <div className="container-prose">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-2xl text-ivory p-12 md:p-20"
            style={{
              background: "linear-gradient(135deg, #0a1628 0%, #141820 100%)",
              boxShadow: "var(--shadow-elegant)",
            }}
          >
            <div
              aria-hidden
              className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[var(--color-gold)]/15 blur-3xl"
            />
            <div
              aria-hidden
              className="absolute -left-32 -bottom-32 h-96 w-96 rounded-full bg-[var(--color-burgundy)]/20 blur-3xl"
            />
            {/* Floating notes in CTA */}
            <span className="music-note-float !opacity-[0.08]">♫</span>
            <span className="music-note-float !opacity-[0.08]" style={{ top: "70%", left: "80%" }}>♪</span>
            <div className="relative max-w-2xl">
              <div className="eyebrow" style={{ color: "var(--color-gold)" }}>
                Begin Your Journey
              </div>
              <h2 className="font-display text-4xl md:text-5xl mt-4 text-balance">
                Your seat at the conservatory awaits.
              </h2>
              <p className="mt-5 text-ivory/75 text-lg">
                Book a free assessment and discover the instrument, programme
                and mentor that will shape your musical future.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link to="/contact" className="btn-hero btn-hero-hover">
                  Book Assessment <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/journey"
                  className="btn-outline-light hover:bg-white/10"
                >
                  View Our Journey
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
}