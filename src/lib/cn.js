// Small className joiner — filters falsy values. No conflict-resolution
// (like tailwind-merge) is needed here because our variant maps never
// emit overlapping utilities for the same property.
export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}
