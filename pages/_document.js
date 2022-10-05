import Document, { Html, Head, Main, NextScript } from "next/document";
import { withRouter } from 'next/router'

export default withRouter(class HomepageDocument extends Document {
    render() {
        const { router } = this.props;

        return (
          <Html lang="en" className="h-screen">
            <Head>
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta property="og:site_name" content="Arena"></meta>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap" rel="stylesheet"></link>
            </Head>
            <body className="h-screen">
              <Main />
              <NextScript id="main-script" />
            </body>
          </Html>
        );
      }
    }
);