import Header from './Header';
import Footer from './Footer';
import { i18n } from '../i18n';
import React, { useEffect } from 'react';
const Layout = (props: any) => {
  useEffect(() => {
    i18n.changeLanguage('th');
  }, []);
  return (
    <div>
      <Header />
      {props.children}
      <Footer />
    </div>
  );
};
export default Layout;
