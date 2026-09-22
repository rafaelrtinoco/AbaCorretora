import { cn } from "../../lib/cn";

/**
 * Base surface shared by ProductCard / ValueCard / StepItem / ExtraCard /
 * BlogCard / ServiceCard / HealthPlanCard. Replaces the flat
 * `background: lightGray; border: 1px solid #e5e7eb` treatment with a
 * white surface, soft shadow and a lift on hover.
 */
export function Card(props) {
  const { as: Tag = "div", hover = true, className, children, ...rest } = props;
  return (
    <Tag
      className={cn(
        "rounded-2xl bg-white p-6 ring-1 ring-slate-200/70 shadow-card transition-all duration-200",
        hover && "hover:-translate-y-0.5 hover:shadow-card-hover hover:ring-slate-200",
        className
      )}
      {...rest}
    >
      {children}
    </Tag>
  );
}
