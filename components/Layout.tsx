import Header from './Header';
import Footer from './Footer';
const Layout = (props: any) => (
  <div>
    <Header />
    {props.children}
    <Footer />
  </div>
);
export default Layout;
