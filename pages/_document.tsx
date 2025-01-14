import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="title" content="Nestar Demo" />
        <link rel="icon" type="image/png" href="/img/logo/logoText.svg" />
        <meta name="robots" content="index,follow" />
        <meta
          name="keyword"
          content="nestar, nestar.uz, devex, mern, mern nestjs fullstack"
        />
        <meta
          name="description"
          content="Buy and sell properties anywhere anytime in South Korea"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
