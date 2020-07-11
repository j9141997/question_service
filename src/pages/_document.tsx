import Document, { DocumentContext, Html, Head, Main, NextScript } from "next/document";

interface Props {
  locale: "en-us" | "ja-JP"
}

export default class MyDocument extends Document<Props> {
  render() {
    return (
      <Html lang={this.props.locale}>
        <Head>
          <meta name="viewport" content="width=device-width,height=device-height" key="viewport" />
          <meta name="theme-color" content="#fff" key="themeColor" />
        </Head>

        <body>
          <Main />

          <NextScript />
        </body>
      </Html>
    );
  }
}