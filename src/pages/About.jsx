import PageHero from "../components/site/PageHero";
import SectionHeading from "../components/site/SectionHeading";
import {
  Eye,
  Target,
  Heart,
  Compass,
  Award,
  Users,
  GraduationCap,
  Globe2,
  Clock,
  BookOpen,
  FileText,
  MapPin,
  Phone,
  Mail,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";
import { SITE } from "../lib/site";

const lessonImg =
  "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80";

export default function About() {
  const [examOpen, setExamOpen] = useState(0);

  const pillars = [
    {
      icon: Eye,
      title: "Vision",
      text: "To become Africa's foremost string conservatory, raising musicians who shape global concert stages and classrooms.",
    },
    {
      icon: Target,
      title: "Mission",
      text: "To develop technically proficient, disciplined and globally competitive string musicians through quality education, mentorship and performance excellence.",
    },
    {
      icon: Heart,
      title: "Core Values",
      text: "Excellence • Discipline • Integrity • Mentorship • Artistry • Community",
    },
    {
      icon: Compass,
      title: "Our History",
      text: "Founded in February 2022 at Joseph Ayo Babalola University, Ikeji-Arakeji, Osun State, Nigeria. What began with a few pioneering members has grown into a recognised centre of musical excellence.",
    },
  ];

  const why = [
    {
      icon: Award,
      title: "Conservatory Standard",
      text: "Curriculum aligned with international examination boards.",
    },
    {
      icon: Users,
      title: "Mentor-Led",
      text: "Personal guidance from accomplished string practitioners.",
    },
    {
      icon: GraduationCap,
      title: "Pathway to Mastery",
      text: "From foundation to professional artist development.",
    },
    {
      icon: Globe2,
      title: "International Exposure",
      text: "Partnerships and certifications recognised worldwide.",
    },
  ];

  return (
    <>
      <PageHero
        eyebrow="About the Academy"
        title="A Home for Serious String Study"
        subtitle="UBY'S String Academy is a professional music institution committed to excellence, mentorship and artistic growth."
      />

      {/* Vision / Mission / History pillars */}
      <section className="py-24">
        <div className="container-prose grid md:grid-cols-2 gap-4">
          {pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="p-8 border border-[var(--color-border)] rounded-lg"
                style={{
                  background: "var(--color-card)",
                  animation: `fade-up 0.6s ease-out ${i * 0.1}s both`,
                }}
              >
                <div className="flex items-center gap-3">
                  <span
                    className="h-10 w-10 rounded-full flex items-center justify-center"
                    style={{
                      background: "var(--color-surface-container)",
                      color: "var(--color-gold)",
                    }}
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3
                    className="font-display text-2xl"
                    style={{ color: "var(--color-primary-heading)" }}
                  >
                    {p.title}
                  </h3>
                </div>
                <p
                  className="mt-4 leading-relaxed"
                  style={{ color: "var(--color-muted-foreground)" }}
                >
                  {p.text}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Full History Section - from DOC */}
      <section
        className="py-24"
        style={{ background: "var(--color-surface-container-low)" }}
      >
        <div className="container-prose">
          <SectionHeading
            eyebrow="Our Story"
            title="The History of UBY's Violin Academy"
            subtitle="From a chapel performance to a conservatory of excellence."
          />
          <div className="mt-14 grid lg:grid-cols-2 gap-12">
            <div>
              <p className="text-lg leading-relaxed text-[var(--color-muted-foreground)]">
                UBY's String Academy traces its origin to{" "}
                <strong className="text-[var(--color-primary-heading)]">
                  February 2022
                </strong>{" "}
                at{" "}
                <strong className="text-[var(--color-primary-heading)]">
                  Joseph Ayo Babalola University, Ikeji-Arakeji, Osun State,
                  Nigeria
                </strong>
                . The Academy began when its Director,{" "}
                <strong className="text-[var(--color-primary-heading)]">
                  Isaac, Ubong Iniobong
                </strong>
                , enrolled in his Master's degree programme at the university.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-[var(--color-muted-foreground)]">
                During this period, he regularly played the violin during Sunday
                chapel services. His performances attracted considerable interest
                within the university community. As a result, several students
                and staff members approached him to request violin lessons. He
                advised interested individuals to first acquire their own
                violins, and many of them did.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-[var(--color-muted-foreground)]">
                Today, UBY's Violin Academy stands out as a growing centre of
                excellence, producing competent musicians and fostering a culture
                of musical discipline and creativity.
              </p>
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="font-display text-xl text-[var(--color-gold)] mb-3 flex items-center gap-2">
                  <Users className="h-5 w-5" /> Pioneer Members
                </h3>
                <div className="flex flex-wrap gap-2">
                  {SITE.history.pioneerStudents.map((s) => (
                    <span
                      key={s}
                      className="inline-block px-4 py-2 rounded-full text-sm border border-[var(--color-border)] text-[var(--color-muted-foreground)] bg-[var(--color-card)]"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-display text-xl text-[var(--color-gold)] mb-3 flex items-center gap-2">
                  <GraduationCap className="h-5 w-5" /> Early University Members
                </h3>
                <div className="flex flex-wrap gap-2">
                  {SITE.history.earlyMembers.map((s) => (
                    <span
                      key={s}
                      className="inline-block px-4 py-2 rounded-full text-sm border border-[var(--color-border)] text-[var(--color-muted-foreground)] bg-[var(--color-card)]"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-display text-xl text-[var(--color-gold)] mb-3 flex items-center gap-2">
                  <Award className="h-5 w-5" /> Notable Supporters
                </h3>
                <div className="flex flex-wrap gap-2">
                  {SITE.history.notableSupporters.map((s) => (
                    <span
                      key={s}
                      className="inline-block px-4 py-2 rounded-full text-sm border border-[var(--color-border)] text-[var(--color-muted-foreground)] bg-[var(--color-card)]"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Structure - from DOC */}
      <section className="py-24">
        <div className="container-prose">
          <SectionHeading
            eyebrow="Academic Programme"
            title="Three Progressive Grade Levels"
            subtitle="A structured curriculum guiding students from beginner to advanced stages."
          />
          <div className="mt-14 grid md:grid-cols-3 gap-5">
            {SITE.grades.map((grade, i) => (
              <div
                key={grade.level}
                className="grade-card"
                style={{
                  animation: `fade-up 0.6s ease-out ${i * 0.1}s both`,
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-gold)]/10 text-[var(--color-gold)] text-sm font-bold">
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Examination Structure - from DOC */}
      <section
        className="py-24"
        style={{ background: "var(--color-surface-container-low)" }}
      >
        <div className="container-prose max-w-4xl">
          <SectionHeading
            eyebrow="Assessment"
            title="Examination Structure"
            subtitle="A rigorous three-stage evaluation system to certify student achievement."
          />
          <div className="mt-14 space-y-4">
            {SITE.examinations.map((exam, i) => (
              <div
                key={exam.stage}
                className="faq-accordion"
                style={{
                  animation: `fade-up 0.6s ease-out ${i * 0.1}s both`,
                }}
              >
                <button
                  onClick={() => setExamOpen(examOpen === i ? null : i)}
                  className="faq-accordion-header"
                >
                  <span className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-gold)]/10 text-[var(--color-gold)] text-xs font-bold">
                      {i + 1}
                    </span>
                    <div className="text-left">
                      <div className="text-xs text-[var(--color-gold)] uppercase tracking-[0.15em]">
                        {exam.stage}
                      </div>
                      <div className="text-sm font-medium text-[var(--color-primary-heading)]">
                        {exam.title}
                      </div>
                    </div>
                  </span>
                  <ChevronDown
                    className={`faq-accordion-icon ${examOpen === i ? "open" : ""}`}
                  />
                </button>
                <div
                  className={`faq-accordion-content ${examOpen === i ? "open" : ""}`}
                >
                  <div className="faq-accordion-body space-y-3">
                    <p>{exam.description}</p>
                    {exam.requirements && (
                      <ul className="space-y-1">
                        {exam.requirements.map((r) => (
                          <li key={r} className="flex items-start gap-2">
                            <span className="text-[var(--color-gold)] mt-0.5">
                              ♪
                            </span>
                            <span>{r}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    {exam.note && (
                      <p className="italic text-xs text-[var(--color-muted-foreground)]">
                        {exam.note}
                      </p>
                    )}
                    {exam.result && (
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-gold)]/10 border border-[var(--color-gold)]/20 text-sm text-[var(--color-gold)]">
                        <Award className="h-4 w-4" />
                        {exam.result}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration & Fees - from DOC */}
      <section className="py-24">
        <div className="container-prose">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src={lessonImg}
                alt="Student lesson"
                loading="lazy"
                width={1280}
                height={960}
                className="rounded-lg"
                style={{ boxShadow: "var(--shadow-elegant)" }}
              />
              <div
                className="absolute -bottom-6 -right-6 hidden md:block p-6 rounded-lg font-display text-xl max-w-[200px]"
                style={{
                  background: "var(--color-gold)",
                  color: "var(--color-on-secondary)",
                  boxShadow: "var(--shadow-gold)",
                }}
              >
                "Where discipline meets artistry."
              </div>
            </div>
            <div>
              <SectionHeading
                eyebrow="Registration & Fees"
                title="Invest in Your Musical Future"
                center={false}
              />
              <div className="mt-8 space-y-4">
                <div className="flex items-center justify-between p-5 rounded-xl border border-[var(--color-border)] bg-[var(--color-card)]">
                  <div className="flex items-center gap-3">
                    <FileText className="h-5 w-5 text-[var(--color-gold)]" />
                    <div>
                      <div className="text-sm font-medium text-[var(--color-primary-heading)]">
                        Registration Fee
                      </div>
                      <div className="text-xs text-[var(--color-muted-foreground)]">
                        One-time payment
                      </div>
                    </div>
                  </div>
                  <span className="font-display text-xl text-[var(--color-gold)]">
                    {SITE.fees.registration}
                  </span>
                </div>
                <div className="flex items-center justify-between p-5 rounded-xl border border-[var(--color-border)] bg-[var(--color-card)]">
                  <div className="flex items-center gap-3">
                    <BookOpen className="h-5 w-5 text-[var(--color-gold)]" />
                    <div>
                      <div className="text-sm font-medium text-[var(--color-primary-heading)]">
                        Physical Programme
                      </div>
                      <div className="text-xs text-[var(--color-muted-foreground)]">
                        Per semester
                      </div>
                    </div>
                  </div>
                  <span className="font-display text-xl text-[var(--color-gold)]">
                    {SITE.fees.physicalSemester}
                  </span>
                </div>
                <div className="flex items-center justify-between p-5 rounded-xl border border-[var(--color-border)] bg-[var(--color-card)]">
                  <div className="flex items-center gap-3">
                    <Globe2 className="h-5 w-5 text-[var(--color-gold)]" />
                    <div>
                      <div className="text-sm font-medium text-[var(--color-primary-heading)]">
                        Online Programme
                      </div>
                      <div className="text-xs text-[var(--color-muted-foreground)]">
                        Duration: {SITE.fees.onlineDuration}
                      </div>
                    </div>
                  </div>
                  <span className="font-display text-xl text-[var(--color-gold)]">
                    {SITE.fees.onlineTuition}
                  </span>
                </div>
              </div>
              <p className="mt-4 text-xs text-[var(--color-muted-foreground)]">
                * Online programme fee is separate from the registration fee.
                For payment details and enrollment procedures, contact the
                Director or Coordinator.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Operations & Contact - from DOC */}
      <section
        className="py-24"
        style={{ background: "var(--color-surface-container-low)" }}
      >
        <div className="container-prose">
          <SectionHeading
            eyebrow="Operations"
            title="Locations & Contact"
            subtitle="Physical and virtual classes available."
          />
          <div className="mt-14 grid lg:grid-cols-2 gap-8">
            <div className="p-8 rounded-xl border border-[var(--color-border)] bg-[var(--color-card)]">
              <h3 className="font-display text-xl text-[var(--color-primary-heading)] flex items-center gap-2">
                <MapPin className="h-5 w-5 text-[var(--color-gold)]" />
                Physical Location
              </h3>
              <div className="mt-4 space-y-2 text-sm text-[var(--color-muted-foreground)]">
                <p className="font-medium text-[var(--color-primary-heading)]">
                  {SITE.location.venue}
                </p>
                <p>{SITE.location.campus}</p>
                <p>
                  {SITE.location.town}, {SITE.location.state}
                </p>
                <p>{SITE.location.country}</p>
              </div>
              <div className="mt-6">
                <h4 className="text-xs uppercase tracking-[0.15em] text-[var(--color-gold)] mb-3">
                  Weekly Schedule
                </h4>
                <div className="space-y-2">
                  {SITE.activities.weekly.map((act) => (
                    <div
                      key={act.day}
                      className="flex justify-between text-sm"
                    >
                      <span className="text-[var(--color-primary-heading)]">
                        {act.day}
                      </span>
                      <span className="text-[var(--color-muted-foreground)]">
                        {act.time || "Online"}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-8 rounded-xl border border-[var(--color-border)] bg-[var(--color-card)]">
              <h3 className="font-display text-xl text-[var(--color-primary-heading)] flex items-center gap-2">
                <Phone className="h-5 w-5 text-[var(--color-gold)]" />
                Contact Directory
              </h3>
              <div className="mt-6 space-y-4">
                <div className="p-4 rounded-lg border border-[var(--color-border)]">
                  <div className="text-xs uppercase tracking-[0.15em] text-[var(--color-gold)]">
                    Director
                  </div>
                  <div className="mt-1 text-sm font-medium text-[var(--color-primary-heading)]">
                    {SITE.director.name}
                  </div>
                  <div className="mt-1 flex items-center gap-4 text-xs text-[var(--color-muted-foreground)]">
                    <span className="flex items-center gap-1">
                      <Phone className="h-3 w-3" /> {SITE.director.phone}
                    </span>
                    <span className="flex items-center gap-1">
                      <Mail className="h-3 w-3" /> {SITE.director.email}
                    </span>
                  </div>
                </div>
                <div className="p-4 rounded-lg border border-[var(--color-border)]">
                  <div className="text-xs uppercase tracking-[0.15em] text-[var(--color-gold)]">
                    Coordinator
                  </div>
                  <div className="mt-1 text-xs text-[var(--color-muted-foreground)]">
                    <Phone className="h-3 w-3 inline" />{" "}
                    {SITE.coordinator.phone}
                  </div>
                </div>
                <div className="p-4 rounded-lg border border-[var(--color-border)]">
                  <div className="text-xs uppercase tracking-[0.15em] text-[var(--color-gold)]">
                    Assistant Coordinator
                  </div>
                  <div className="mt-1 text-xs text-[var(--color-muted-foreground)]">
                    <Phone className="h-3 w-3 inline" />{" "}
                    {SITE.assistantCoordinator.phone}
                  </div>
                </div>
                <div className="p-4 rounded-lg border border-[var(--color-border)]">
                  <div className="text-xs uppercase tracking-[0.15em] text-[var(--color-gold)]">
                    General Secretary
                  </div>
                  <div className="mt-1 text-xs text-[var(--color-muted-foreground)]">
                    <Phone className="h-3 w-3 inline" />{" "}
                    {SITE.generalSecretary.phone}
                  </div>
                </div>
                <div className="p-4 rounded-lg border border-[var(--color-border)]">
                  <div className="text-xs uppercase tracking-[0.15em] text-[var(--color-gold)]">
                    Media Officer
                  </div>
                  <div className="mt-1 text-xs text-[var(--color-muted-foreground)]">
                    <Phone className="h-3 w-3 inline" />{" "}
                    {SITE.mediaOfficer.phone}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose UBY'S */}
      <section className="py-24">
        <div className="container-prose grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeading
              eyebrow="Why Choose UBY'S"
              title="Built for Musicians Who Mean It."
              center={false}
            />
            <div className="mt-8 grid sm:grid-cols-2 gap-5">
              {why.map((w) => {
                const Icon = w.icon;
                return (
                  <div key={w.title} className="flex gap-3">
                    <Icon
                      className="h-5 w-5 flex-shrink-0 mt-1"
                      style={{ color: "var(--color-gold)" }}
                    />
                    <div>
                      <h4
                        className="font-semibold"
                        style={{ color: "var(--color-primary-heading)" }}
                      >
                        {w.title}
                      </h4>
                      <p
                        className="text-sm mt-1"
                        style={{ color: "var(--color-muted-foreground)" }}
                      >
                        {w.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="relative">
            <img
              src={lessonImg}
              alt="Student lesson"
              loading="lazy"
              width={1280}
              height={960}
              className="rounded-lg"
              style={{ boxShadow: "var(--shadow-elegant)" }}
            />
            <div
              className="absolute -bottom-6 -left-6 hidden md:block p-6 rounded-lg font-display text-xl max-w-[200px]"
              style={{
                background: "var(--color-gold)",
                color: "var(--color-on-secondary)",
                boxShadow: "var(--shadow-gold)",
              }}
            >
              "Discipline. Excellence. Artistry."
            </div>
          </div>
        </div>
      </section>
    </>
  );
}