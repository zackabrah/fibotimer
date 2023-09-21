import { Html, Head, Main, NextScript } from "next/document";
import Background from "~/components/background";

export default function Document() {
  return (
    <Html lang="en" className="h-full">
      <Head />
      <body className="flex h-full flex-col">
        <Main />
        <NextScript />
        <Background numberOfCircles={10} />
      </body>
    </Html>
  );
}
