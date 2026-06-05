"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  GlassField,
  GlassTextarea,
  OptionGroup,
  MultiSelectChips,
} from "./ContactFormPrimitives";
import { ContactFormStatus, SubmitButton } from "./ContactFormStatus";

const ROLE_OPTIONS = [
  "Frontend Developer",
  "Full Stack Developer",
  "Backend Developer",
  "React Native Developer",
  "UI/UX Designer",
  "AI Engineer",
  "Digital Marketer",
  "Sales Executive",
  "Operations",
  "Other",
];

const EXPERIENCE_OPTIONS = [
  "Fresher",
  "0–1 Years",
  "1–2 Years",
  "2–5 Years",
  "5+ Years",
];

const SKILL_OPTIONS = [
  "React",
  "Next.js",
  "Node.js",
  "FastAPI",
  "React Native",
  "UI/UX",
  "AI",
  "Marketing",
  "Sales",
  "Operations",
];

const AVAILABILITY_OPTIONS = [
  "Full-Time",
  "Part-Time",
  "Freelance",
  "Internship",
];

const stepVariants = {
  enter: { opacity: 0, x: 20 },
  center: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -20 },
};

export function TeamApplicationForm({ onBack }: { onBack: () => void }) {
  const [step, setStep] = useState(0);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [portfolio, setPortfolio] = useState("");
  const [role, setRole] = useState("");
  const [experience, setExperience] = useState("");
  const [about, setAbout] = useState("");
  const [whyJoin, setWhyJoin] = useState("");
  const [skills, setSkills] = useState<string[]>([]);
  const [availability, setAvailability] = useState("");
  const [resume, setResume] = useState<File | null>(null);

  const totalSteps = 4;

  const toggleSkill = (skill: string) => {
    setSkills((prev) =>
      prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "loading" || status === "success") return;

    setStatus("loading");
    setErrorMessage("");

    const whyJoinCombined = [
      about.trim() ? `About:\n${about.trim()}` : "",
      whyJoin.trim() ? `Why Join:\n${whyJoin.trim()}` : "",
      skills.length > 0 ? `Skills: ${skills.join(", ")}` : "",
    ]
      .filter(Boolean)
      .join("\n\n");

    const formData = new FormData();
    formData.append("fullName", fullName);
    formData.append("email", email);
    if (phone) formData.append("phone", phone);
    formData.append("role", role);
    formData.append("experience", experience);
    if (portfolio) formData.append("portfolioUrl", portfolio);
    if (linkedin) formData.append("linkedinUrl", linkedin);
    formData.append("whyJoin", whyJoinCombined);
    formData.append("availability", availability);
    if (resume) formData.append("resume", resume);

    try {
      const response = await fetch("/api/contact/team", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        setStatus("error");
        setErrorMessage(result.message ?? "Something went wrong.");
        return;
      }

      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again.");
    }
  };

  if (status === "success") {
    return (
      <ContactFormStatus
        state="success"
        successTitle="Application received."
        successMessage="We'll review it shortly."
        onBack={onBack}
      />
    );
  }

  return (
    <div className="contact-form-panel">
      <button
        type="button"
        onClick={onBack}
        className="font-satoshi mb-8 flex items-center gap-2 text-sm text-white/50 transition-colors hover:text-white/80"
      >
        <ArrowLeft className="size-4" />
        Back
      </button>

      <div className="mb-10">
        <h3 className="font-satoshi text-2xl font-medium text-white md:text-3xl">
          Join The Team
        </h3>
        <p className="font-satoshi mt-3 text-base text-white/60">
          We&apos;re always looking for talented people who love building great products.
        </p>
        <div className="contact-step-progress mt-6">
          {Array.from({ length: totalSteps }).map((_, i) => (
            <span
              key={i}
              className={`contact-step-dot ${i <= step ? "contact-step-dot-active" : ""}`}
            />
          ))}
        </div>
      </div>

      <ContactFormStatus
        state={status}
        successTitle=""
        successMessage=""
        errorMessage={errorMessage}
        onBack={onBack}
      />

      <form onSubmit={step === totalSteps - 1 ? handleSubmit : (e) => e.preventDefault()}>
        <AnimatePresence mode="wait">
          {step === 0 && (
            <motion.div
              key="t0"
              variants={stepVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-6"
            >
              <GlassField label="Full Name" id="t-name" value={fullName} onChange={setFullName} required />
              <GlassField label="Email Address" id="t-email" type="email" value={email} onChange={setEmail} required />
              <GlassField label="Phone Number" id="t-phone" type="tel" value={phone} onChange={setPhone} />
              <GlassField label="LinkedIn Profile" id="t-linkedin" value={linkedin} onChange={setLinkedin} placeholder="https://linkedin.com/in/..." />
              <GlassField label="Portfolio / GitHub / Website" id="t-portfolio" value={portfolio} onChange={setPortfolio} />
            </motion.div>
          )}

          {step === 1 && (
            <motion.div
              key="t1"
              variants={stepVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-6"
            >
              <OptionGroup label="Interested Role" options={ROLE_OPTIONS} value={role} onChange={setRole} columns={2} />
              <OptionGroup label="Experience Level" options={EXPERIENCE_OPTIONS} value={experience} onChange={setExperience} columns={2} />
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="t2"
              variants={stepVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-6"
            >
              <GlassTextarea label="Tell us about yourself" id="t-about" value={about} onChange={setAbout} rows={4} />
              <GlassTextarea label="Why do you want to join us?" id="t-why" value={whyJoin} onChange={setWhyJoin} rows={4} />
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="t3"
              variants={stepVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-6"
            >
              <MultiSelectChips label="Strongest Skills" options={SKILL_OPTIONS} selected={skills} onToggle={toggleSkill} />
              <div className="contact-field">
                <label htmlFor="t-resume" className="contact-label font-satoshi">
                  Resume Upload
                </label>
                <p className="font-satoshi mb-3 text-xs text-white/45">PDF or DOCX</p>
                <input
                  id="t-resume"
                  type="file"
                  accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                  className="contact-file-input font-satoshi w-full"
                  onChange={(e) => setResume(e.target.files?.[0] ?? null)}
                />
              </div>
              <OptionGroup label="Availability" options={AVAILABILITY_OPTIONS} value={availability} onChange={setAvailability} columns={2} />
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4">
          {step > 0 ? (
            <button
              type="button"
              onClick={() => setStep((s) => s - 1)}
              disabled={status === "loading"}
              className="font-satoshi flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white disabled:opacity-50"
            >
              <ArrowLeft className="size-4" />
              Previous
            </button>
          ) : (
            <span />
          )}

          {step < totalSteps - 1 ? (
            <Button
              type="button"
              onClick={() => setStep((s) => s + 1)}
              disabled={status === "loading"}
              className="hero-cta-button font-satoshi rounded-full px-8 py-3 text-sm font-normal text-white"
            >
              Continue
              <ArrowRight className="size-4" />
            </Button>
          ) : (
            <SubmitButton loading={status === "loading"}>
              Join The Team
            </SubmitButton>
          )}
        </div>
      </form>
    </div>
  );
}
