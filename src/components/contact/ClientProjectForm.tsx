"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  GlassField,
  GlassTextarea,
  OptionGroup,
} from "./ContactFormPrimitives";

const BUILD_OPTIONS = [
  "SaaS Platform",
  "AI Application",
  "Mobile App",
  "Web Application",
  "Landing Page",
  "E-Commerce Store",
  "Automation System",
  "Other",
];

const STAGE_OPTIONS = [
  "Just an Idea",
  "MVP Planning",
  "Currently Building",
  "Existing Product",
  "Looking for Improvements",
];

const BUDGET_OPTIONS = [
  "Under ₹25,000",
  "₹25,000 – ₹50,000",
  "₹50,000 – ₹1 Lakh",
  "₹1 Lakh – ₹3 Lakhs",
  "₹3 Lakhs+",
];

const TIMELINE_OPTIONS = ["ASAP", "Within 1 Month", "Within 3 Months", "Flexible"];

const SUPPORT_OPTIONS = ["Yes", "No", "Not Sure"];

const COMM_OPTIONS = ["WhatsApp", "Email", "Google Meet", "Zoom"];

const stepVariants = {
  enter: { opacity: 0, x: 20 },
  center: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -20 },
};

export function ClientProjectForm({ onBack }: { onBack: () => void }) {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const [fullName, setFullName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [buildType, setBuildType] = useState("");
  const [projectDetails, setProjectDetails] = useState("");
  const [stage, setStage] = useState("");
  const [budget, setBudget] = useState("");
  const [timeline, setTimeline] = useState("");
  const [support, setSupport] = useState("");
  const [communication, setCommunication] = useState("");

  const totalSteps = 4;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="contact-form-panel text-center"
      >
        <p className="font-satoshi text-2xl text-white">Thank you!</p>
        <p className="font-satoshi mt-3 text-white/60">
          We&apos;ll review your project details and get back to you soon.
        </p>
        <button
          type="button"
          onClick={onBack}
          className="font-satoshi mt-8 text-sm text-violet-300/90 transition-colors hover:text-violet-200"
        >
          ← Back to workspace
        </button>
      </motion.div>
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
          Start Your Project
        </h3>
        <p className="font-satoshi mt-3 text-base text-white/60">
          Tell us about your vision and we&apos;ll help bring it to life.
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

      <form onSubmit={step === totalSteps - 1 ? handleSubmit : (e) => e.preventDefault()}>
        <AnimatePresence mode="wait">
          {step === 0 && (
            <motion.div
              key="s0"
              variants={stepVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-6"
            >
              <GlassField label="Full Name" id="c-name" value={fullName} onChange={setFullName} required />
              <GlassField label="Company / Startup Name" id="c-company" value={company} onChange={setCompany} />
              <GlassField label="Email Address" id="c-email" type="email" value={email} onChange={setEmail} required />
              <GlassField label="WhatsApp / Contact Number" id="c-phone" type="tel" value={phone} onChange={setPhone} />
            </motion.div>
          )}

          {step === 1 && (
            <motion.div
              key="s1"
              variants={stepVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-6"
            >
              <OptionGroup
                label="What would you like us to build?"
                options={BUILD_OPTIONS}
                value={buildType}
                onChange={setBuildType}
                columns={2}
              />
              <GlassTextarea
                label="Tell us about your project"
                id="c-details"
                placeholder="Describe your idea, goals, and requirements."
                value={projectDetails}
                onChange={setProjectDetails}
                rows={5}
              />
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="s2"
              variants={stepVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-6"
            >
              <OptionGroup label="Current Project Stage" options={STAGE_OPTIONS} value={stage} onChange={setStage} columns={2} />
              <OptionGroup label="Estimated Budget" options={BUDGET_OPTIONS} value={budget} onChange={setBudget} columns={2} />
              <OptionGroup label="Timeline" options={TIMELINE_OPTIONS} value={timeline} onChange={setTimeline} columns={2} />
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="s3"
              variants={stepVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-6"
            >
              <OptionGroup label="Need Ongoing Support?" options={SUPPORT_OPTIONS} value={support} onChange={setSupport} columns={3} />
              <OptionGroup label="Preferred Communication" options={COMM_OPTIONS} value={communication} onChange={setCommunication} columns={2} />
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4">
          {step > 0 ? (
            <button
              type="button"
              onClick={() => setStep((s) => s - 1)}
              className="font-satoshi flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white"
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
              className="hero-cta-button font-satoshi rounded-full px-8 py-3 text-sm font-normal text-white"
            >
              Continue
              <ArrowRight className="size-4" />
            </Button>
          ) : (
            <Button
              type="submit"
              className="hero-cta-button font-satoshi rounded-full px-8 py-3 text-sm font-normal text-white"
            >
              Start My Project
            </Button>
          )}
        </div>
      </form>
    </div>
  );
}
