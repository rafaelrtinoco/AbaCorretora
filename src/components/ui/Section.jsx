import { cn } from "../../lib/cn";
import { Container } from "./Container";

const TONES = {
  white: "bg-white",
  muted: "bg-brand-50",
  navy: "bg-navy-900 text-white",
  brand: "bg-brand-500 text-white",
};

/**
 * Full-bleed section wrapper: sets the background tone and vertical rhythm,
 * then centers a Container inside it. Replaces PageSection / ProductsContainer /
 * ValuePropsSection / BlogContainer / HowItWorksSection etc.
 */
export function Section(props) {
  const { tone = "white", className, containerClassName, children, id, ...rest } = props;

  return (
    <section id={id} className={cn("py-16 md:py-20", TONES[tone], className)} {...rest}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
