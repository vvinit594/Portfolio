"use client";

import { cn } from "@/lib/utils";

export function GlassField({
  label,
  id,
  type = "text",
  placeholder,
  value,
  onChange,
  required,
}: {
  label: string;
  id: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
}) {
  return (
    <div className="contact-field">
      <label htmlFor={id} className="contact-label font-satoshi">
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        className="contact-input font-satoshi w-full"
      />
    </div>
  );
}

export function GlassTextarea({
  label,
  id,
  placeholder,
  value,
  onChange,
  rows = 4,
}: {
  label: string;
  id: string;
  placeholder?: string;
  value: string;
  onChange: (v: string) => void;
  rows?: number;
}) {
  return (
    <div className="contact-field">
      <label htmlFor={id} className="contact-label font-satoshi">
        {label}
      </label>
      <textarea
        id={id}
        rows={rows}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="contact-input contact-textarea font-satoshi w-full resize-y"
      />
    </div>
  );
}

export function OptionGroup({
  label,
  options,
  value,
  onChange,
  columns = 2,
}: {
  label: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
  columns?: 1 | 2 | 3;
}) {
  return (
    <div className="contact-field">
      <p className="contact-label font-satoshi">{label}</p>
      <div
        className={cn(
          "mt-3 grid gap-2",
          columns === 1 && "grid-cols-1",
          columns === 2 && "grid-cols-1 sm:grid-cols-2",
          columns === 3 && "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        )}
      >
        {options.map((opt) => (
          <button
            key={opt}
            type="button"
            onClick={() => onChange(opt)}
            className={cn(
              "contact-option font-satoshi text-left text-sm",
              value === opt && "contact-option-active"
            )}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}

export function MultiSelectChips({
  label,
  options,
  selected,
  onToggle,
}: {
  label: string;
  options: string[];
  selected: string[];
  onToggle: (opt: string) => void;
}) {
  return (
    <div className="contact-field">
      <p className="contact-label font-satoshi">{label}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {options.map((opt) => {
          const isOn = selected.includes(opt);
          return (
            <button
              key={opt}
              type="button"
              onClick={() => onToggle(opt)}
              className={cn(
                "contact-option font-satoshi px-4 py-2 text-sm",
                isOn && "contact-option-active"
              )}
            >
              {opt}
            </button>
          );
        })}
      </div>
    </div>
  );
}
