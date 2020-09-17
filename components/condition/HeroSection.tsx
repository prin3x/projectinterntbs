import { withTranslation } from '../../i18n';
import PropTypes from 'prop-types';
import * as React from 'react';

const HeroSection = ({ t }: any) => {
  React.useEffect(() => {}, []);
  return (
    <div className="container condition-wrap">
      <h2 className="condition-header">{t('conditionhero.header')}</h2>
      <div className="col-lg-12">
        <div className="condition-text">
          <h4>{t('conditionhero.purpose.header')}</h4>
          {t('conditionhero.purpose.desc')}
          <br /> <br />
          <ul
            dangerouslySetInnerHTML={{
              __html: t('conditionhero.purpose.content'),
            }}
          ></ul>
          <h4 style={{ marginTop: '30px' }}>
            {t('conditionhero.servicecharge.header')}
          </h4>
          <ul
            dangerouslySetInnerHTML={{
              __html: t('conditionhero.servicecharge.content'),
            }}
          ></ul>
          <h4 style={{ marginTop: '30px' }}>
            {t('conditionhero.transfer.header')}
          </h4>
          <ul
            dangerouslySetInnerHTML={{
              __html: t('conditionhero.transfer.content'),
            }}
          ></ul>
          <h4 style={{ marginTop: '30px' }}>
            {t('conditionhero.calexpire.header')}
          </h4>
          <ul
            dangerouslySetInnerHTML={{
              __html: t('conditionhero.calexpire.content'),
            }}
          ></ul>
          <h4 style={{ marginTop: '30px' }}>
            {t('conditionhero.sender.header')}
          </h4>
          <ul
            dangerouslySetInnerHTML={{
              __html: t('conditionhero.sender.content'),
            }}
          ></ul>
          <h4 style={{ marginTop: '30px' }}>
            {t('conditionhero.whiltelist.header')}
          </h4>
          <ul
            dangerouslySetInnerHTML={{
              __html: t('conditionhero.whiltelist.content'),
            }}
          ></ul>
          <h4 style={{ marginTop: '30px' }}>
            {t('conditionhero.account.header')}
          </h4>
          <span className="bold-text">{t('conditionhero.account.desc')}</span>
          <ul
            dangerouslySetInnerHTML={{
              __html: t('conditionhero.account.content'),
            }}
          ></ul>
          <h4 style={{ marginTop: '30px' }}>{t('conditionhero.ban.header')}</h4>
          <span className="bold-text">{t('conditionhero.ban.desc')}</span>
          <ul
            dangerouslySetInnerHTML={{
              __html: t('conditionhero.ban.content'),
            }}
          ></ul>
          <h4 style={{ marginTop: '30px' }}>
            {t('conditionhero.policy.header')}
          </h4>
          <ul
            dangerouslySetInnerHTML={{
              __html: t('conditionhero.policy.content'),
            }}
          ></ul>
        </div>
      </div>
    </div>
  );
};

HeroSection.getInitialProps = async () => ({
  namespacesRequired: ['ConditionHeroSection'],
});

HeroSection.propTypes = {
  t: PropTypes.func.isRequired,
};
export default withTranslation('ConditionHeroSection')(HeroSection);
