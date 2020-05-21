import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            href='https://fonts.googleapis.com/css2?family=Prompt:wght@200;300;400;500;600;700;800&display=swap'
            rel='stylesheet'
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Sarabun:wght@300;400;500;600;700;800&display=swap'
            rel='stylesheet'
          />
          <link rel='shortcut icon' href='img/favicon.ico' type='image/png' />
          <link href='css/bootstrap.min.css' rel='stylesheet' />
          <link href='css/animate.min.css' rel='stylesheet' />
          <link href='css/all.min.css' rel='stylesheet' />
          <link href='css/ionicons.min.css' rel='stylesheet' />
          <link href='css/owl.carousel.css' rel='stylesheet' />
          <link href='css/nice-select.css' rel='stylesheet' />
          <link href='css/style.css' rel='stylesheet' />
          <link href='css/responsive.css' rel='stylesheet' />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script src='js/vendor/jquery-3.4.1.min.js'></script>
          <script src='js/Popper.js'></script>
          <script src='js/bootstrap.min.js'></script>
          <script src='js/jquery.easing.min.js'></script>
          <script src='js/owl.carousel.js'></script>
          <script src='js/jquery-nice-select.js'></script>
          {/* <script src="js/jquery.sticky.js"></script> */}
          <script src='js/main.js'></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
