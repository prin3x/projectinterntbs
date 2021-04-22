import PropTypes from 'prop-types';
import * as React from 'react';
import { withTranslation } from '../../i18n';

const HeroSection = ({ t }: any) => {
  React.useEffect(() => {}, []);
  return (
    <div className="container condition-wrap">
      <h1 className="condition-header textHeadCondition">{t('policyhero::header')}</h1>
      <p className="condition-text" style={{ textIndent: '30px' }}>{t('policyhero::subheader')}</p>
      <div className="col-lg-12">
        <div className="condition-text">

          <h2 className="textHeadCondition">{t('policyhero::section_1::header')}</h2>
          <ul
            dangerouslySetInnerHTML={{
              __html: t('policyhero::section_1::content'),
            }}
          ></ul>

          <h2 className="textHeadCondition" style={{ marginTop: '30px' }}>{t('policyhero::section_2::header')}</h2>
          <ul
            dangerouslySetInnerHTML={{
              __html: t('policyhero::section_2::content'),
            }}
          ></ul>
          <span style={{ display:'block', textIndent: '24px' }}>{t('policyhero::section_2::footer')}</span>

          <h2 className="textHeadCondition" style={{ marginTop: '30px' }}>{t('policyhero::section_3::header')}</h2>
          <span style={{ display:'block', textIndent: '24px', marginBottom: '14px' }}>{t('policyhero::section_3::desc')}</span>
          <ul
            dangerouslySetInnerHTML={{
              __html: t('policyhero::section_3::content'),
            }}
          ></ul>
          <span style={{ display:'block', textIndent: '24px' }}>{t('policyhero::section_3::footer')}</span>

          <h2 className="textHeadCondition" style={{ marginTop: '30px' }}>{t('policyhero::section_4::header')}</h2>
          <ul
            dangerouslySetInnerHTML={{
              __html: t('policyhero::section_4::content'),
            }}
          ></ul>

          <h2 className="textHeadCondition" style={{ marginTop: '30px' }}>{t('policyhero::section_5::header')}</h2>
          {t('policyhero::section_5::content')}

          <h2 className="textHeadCondition" style={{ marginTop: '30px' }}>{t('policyhero::section_6::header')}</h2>
          {t('policyhero::section_6::content')}

          <h2 className="textHeadCondition" style={{ marginTop: '30px' }}>{t('policyhero::section_7::header')}</h2>
          {t('policyhero::section_7::content')}

          <h2 className="textHeadCondition" style={{ marginTop: '30px' }}>{t('policyhero::section_8::header')}</h2>
          {t('policyhero::section_8::content')}

          <h2 className="textHeadCondition" style={{ marginTop: '30px' }}>{t('policyhero::section_9::header')}</h2>
          {t('policyhero::section_9::content')}

          <h2 className="textHeadCondition" style={{ marginTop: '30px' }}>{t('policyhero::section_10::header')}</h2>
          {t('policyhero::section_10::content')}


        </div>
      </div>
      <p style={{ marginTop: '30px' }} className="condition-text">
        {t('policyhero::effective')}
      </p>
    </div>
  );
};

HeroSection.getInitialProps = async () => ({
  namespacesRequired: ['Policy'],
});

HeroSection.propTypes = {
  t: PropTypes.func.isRequired,
};
export default withTranslation('Policy')(HeroSection);
