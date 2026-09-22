import { cn } from "../../lib/cn";

/**
 * Centered content column shared by every section on the site.
 * Replaces the repeated `max-width: 1200px; margin: 0 auto; padding: 0 2rem`
 * block that used to live in every *.styles.js file.
 */
export function Container(props) {
  const { as: Tag = "div", className, children, ...rest } = props;
  return (
    <Tag className={cn("mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8", className)} {...rest}>
      {children}
    </Tag>
  );
}
