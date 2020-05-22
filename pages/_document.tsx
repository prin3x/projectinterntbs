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
            href="https://fonts.googleapis.com/css2?family=Prompt:wght@200;300;400;500;600;700;800&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Sarabun:wght@300;400;500;600;700;800&display=swap"
            rel="stylesheet"
          />
          <link rel="shortcut icon" href="img/favicon.ico" type="image/png" />
          <link href="css/bootstrap.min.css" rel="stylesheet" />
          <link href="css/animate.min.css" rel="stylesheet" />
          <link href="css/all.min.css" rel="stylesheet" />
          <link href="css/ionicons.min.css" rel="stylesheet" />
          <link href="css/owl.carousel.css" rel="stylesheet" />
          <link href="css/nice-select.css" rel="stylesheet" />
          <link href="css/style.css" rel="stylesheet" />
          <link href="css/responsive.css" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
          <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-nice-select/1.0/js/jquery.nice-select.min.js"></script>
          <script src="js/main.js"></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
