import { cn } from "../../lib/cn";

/**
 * Replaces App.styles.js's SectionTitle + SectionSubtitle, used across all
 * 9 pages. Exported both as standalone pieces (for pages that need custom
 * spacing/markup between them) and as a single SectionHeading convenience
 * wrapper for the common title+subtitle pair.
 */
export function SectionTitle({ children, inverted = false, align = "center", className, ...rest }) {
  return (
    <h2
      className={cn(
        "text-3xl md:text-4xl font-bold tracking-tight",
        align === "left" ? "text-left" : "text-center",
        inverted ? "text-white" : "text-navy-900",
        className
      )}
      {...rest}
    >
      {children}
    </h2>
  );
}

export function SectionSubtitle({ children, inverted = false, align = "center", className, ...rest }) {
  return (
    <p
      className={cn(
        "mt-3 text-base md:text-lg leading-relaxed",
        align === "left" ? "text-left" : "text-center mx-auto max-w-2xl",
        inverted ? "text-white/80" : "text-slate-500",
        className
      )}
      {...rest}
    >
      {children}
    </p>
  );
}

export function SectionHeading({ title, subtitle, inverted = false, align = "center", className }) {
  return (
    <div className={cn(align === "left" ? "" : "mx-auto max-w-2xl", className)}>
      <SectionTitle inverted={inverted} align={align}>
        {title}
      </SectionTitle>
      {subtitle && (
        <SectionSubtitle inverted={inverted} align={align} className="max-w-none">
          {subtitle}
        </SectionSubtitle>
      )}
    </div>
  );
}
