import { usePageContext } from "vike-react/usePageContext";

export function Link({ href, children }: { href: string; children: string }) {
  const pageContext = usePageContext();
  const { urlPathname } = pageContext;
  const isActive = href === "/" ? urlPathname === href : urlPathname.startsWith(href);
  return (
    <a
      href={href}
      className={`no-underline px-2.5 py-0.5 -ml-2.5 rounded ${
        isActive ? "bg-[#eee]" : "hover:bg-[#f5f5f5]"
      }`}
    >
      {children}
    </a>
  );
}
