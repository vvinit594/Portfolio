const HTML_TAG_REGEX = /<[^>]*>/g;

export function sanitizeString(value: string, maxLength = 5000): string {
  return value
    .replace(HTML_TAG_REGEX, "")
    .replace(/[\u0000-\u001F\u007F]/g, "")
    .trim()
    .slice(0, maxLength);
}

export function sanitizeOptionalString(
  value: string | undefined | null,
  maxLength = 5000
): string | undefined {
  if (!value) return undefined;
  const sanitized = sanitizeString(value, maxLength);
  return sanitized.length > 0 ? sanitized : undefined;
}
