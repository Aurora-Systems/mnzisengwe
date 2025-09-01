// pages/_document.tsx
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <script 
            src="https://www.paypal.com/sdk/js?client-id=AcMK90FgphocyUFcodXYEN7Q9PGi46_SNBQrf4O1fdWQ-BG-P42tGOYeN2B08PFYeMkljuMMtKxHDSin" 
            async
          ></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;