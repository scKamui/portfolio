import Link from "next/link";
import { useRouter } from "next/router";

// Keeping the links here makes the menu easy to update later.
const links = [
  ["Home", "/"],
  ["Projects", "/projects"],
  ["About", "/about"],
  ["Contact", "/contact"],
];

export default function Navbar() {
  const { pathname } = useRouter();
  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Primary navigation">
        {/* My name always takes visitors back to the homepage. */}
        <Link href="/" className="wordmark" aria-label="Sami Chauhan home">
          <span className="wordmark-dot" />
          Sami Chauhan
        </Link>
        {/* The active class shows which page is currently open. */}
        <div className="nav-links">
          {links.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className={`nav-link ${pathname === href ? "is-active" : ""}`}
            >
              {label}
            </Link>
          ))}
        </div>
        {/* The resume opens in a new tab so the portfolio stays open. */}
        <a
          className="nav-resume"
          href="/Tech_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume <span aria-hidden="true">↗</span>
        </a>
      </nav>
    </header>
  );
}
