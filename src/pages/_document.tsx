import { Html, Head, Main, NextScript } from "next/document";
import Background from "~/components/background";

export default function Document() {
  return (
    <Html lang="en" className="h-full bg-gradient-to-t from-sky-400 to-sky-200">
      <Head />
      <body className="flex h-full flex-col">
        <Main />
        <NextScript />
        <Background numberOfCircles={10} />
      </body>
    </Html>
  );
}
