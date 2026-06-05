"use client";

import type { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

type ContactFormStatusProps = {
  state: "idle" | "loading" | "success" | "error";
  successTitle: string;
  successMessage: string;
  errorMessage?: string;
  onBack: () => void;
};

export function ContactFormStatus({
  state,
  successTitle,
  successMessage,
  errorMessage,
  onBack,
}: ContactFormStatusProps) {
  if (state === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="contact-form-panel contact-success-panel text-center"
      >
        <div className="contact-success-icon mx-auto mb-5 flex size-14 items-center justify-center rounded-full">
          <CheckCircle2 className="size-7 text-violet-200" />
        </div>
        <p className="font-satoshi text-2xl text-white">{successTitle}</p>
        <p className="font-satoshi mt-3 text-white/60">{successMessage}</p>
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
    <AnimatePresence>
      {state === "error" && errorMessage && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          className="contact-error-toast mb-6 flex items-start gap-3 rounded-xl p-4"
          role="alert"
        >
          <AlertCircle className="mt-0.5 size-5 shrink-0 text-red-300" />
          <p className="font-satoshi text-sm text-white/85">{errorMessage}</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function SubmitButton({
  loading,
  disabled,
  children,
}: {
  loading: boolean;
  disabled?: boolean;
  children: ReactNode;
}) {
  return (
    <button
      type="submit"
      disabled={disabled || loading}
      className="hero-cta-button font-satoshi inline-flex items-center justify-center gap-2 rounded-full px-8 py-3 text-sm font-normal text-white disabled:cursor-not-allowed disabled:opacity-60"
    >
      {loading ? (
        <>
          <Loader2 className="size-4 animate-spin" />
          Submitting...
        </>
      ) : (
        children
      )}
    </button>
  );
}
