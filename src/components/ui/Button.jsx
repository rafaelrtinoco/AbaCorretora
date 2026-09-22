import { cn } from "../../lib/cn";

const BASE =
  "inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-200 " +
  "disabled:opacity-50 disabled:pointer-events-none";

const VARIANTS = {
  primary: "bg-brand-500 text-white shadow-card hover:bg-brand-600 hover:shadow-card-hover hover:-translate-y-0.5 active:bg-brand-700 active:translate-y-0",
  navy: "bg-navy-900 text-white shadow-card hover:bg-navy-800 hover:shadow-card-hover hover:-translate-y-0.5",
  outline: "bg-white text-navy-900 ring-1 ring-inset ring-slate-300 hover:bg-slate-50",
  "outline-inverted": "bg-transparent text-white ring-1 ring-inset ring-white/40 hover:bg-white/10",
  ghost: "bg-transparent text-brand-600 hover:bg-brand-50",
};

const SIZES = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

/**
 * Replaces ButtonMain / ProductButton / ProductLink / CTAButton /
 * ServiceButton / AcceptButton — every one of those was the same visual
 * treatment with a different tag (button, a, react-router Link).
 * Polymorphic via `as`: <Button as="a" href="..."> or <Button as={Link} to="...">.
 */
export function Button(props) {
  const { as: Tag = "button", variant = "primary", size = "md", className, children, ...rest } = props;

  return (
    <Tag className={cn(BASE, VARIANTS[variant], SIZES[size], className)} {...rest}>
      {children}
    </Tag>
  );
}
