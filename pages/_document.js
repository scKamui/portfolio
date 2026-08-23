import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="antialiased">
        {/* Next.js injects the current page and its scripts here. */}
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
