import { Html, Head, Main, NextScript } from "next/document";
import Background from "~/components/background";

export default function Document() {
  return (
    <Html lang="en" className="h-full bg-gradient-to-b from-sky-400 to-sky-200">
      <Head />
      <body className="h-full">
        <Background numberOfCircles={10} />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
