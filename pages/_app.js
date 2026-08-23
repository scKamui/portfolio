import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* These default tags are used on every page for browser tabs and search results. */}
      <Head>
        <title>Sami Chauhan — Software Developer</title>
        <meta
          name="description"
          content="Software developer building practical applications with Python, JavaScript, and AI tools."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {/* Next.js swaps this component when someone changes pages. */}
      <Component {...pageProps} />
    </>
  );
}
