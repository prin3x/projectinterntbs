import { withTranslation } from '../../i18n';
import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import TestQuickregister from '../quickregister/testQuickregister';
import CountUp from 'react-countup';
const SmsSectionV2 = ({ t }: any) => {
  const [numStart, setnumStart] = useState(4662190879);
  const [numEnd, setnumEnd] = useState(0);
  const [duration, setDuration] = useState(0);
  useEffect(() => {
    let startDate = 1597104000;
    let dayAt = 300000;
    // let end = 1597363200;
    // 1 day = 86400
    //page id 237856750321365
    // app id 2043805689192909
    let curTime = Math.floor(Date.now() / 1000);
    console.log('WTF : ', (curTime - startDate) / 86400);
    let remain =
      (Math.ceil((curTime - startDate) / 86400) -
        (curTime - startDate) / 86400) *
      86400 *
      7;

    console.log('remain : ', remain);
    console.log(
      'start  >>>>>>>>>> : ',
      numStart + Math.ceil(dayAt * ((curTime - startDate) / 86400))
    );

    setnumStart(numStart + Math.ceil(dayAt * ((curTime - startDate) / 86400)));

    console.log(
      'end : ',
      numStart + dayAt * Math.ceil((curTime - startDate) / 86400)
    );
    setnumEnd(numStart + dayAt * Math.ceil((curTime - startDate) / 86400));
    setDuration(remain);
  }, []);
  return (
    <div
      className="sms_section lazyload"
      // style={{ backgroundImage: 'url(/img/promo_bg.png)' }}
      data-bgset="/img/promo_bg.png"
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2 col-md-12 ">
            <div className="sms_text">
              <h3>{t('homesms.header')}</h3>
            </div>
          </div>
          <div className="col-md-12">
            <div className="sms_feature">
              <div className="row">
                <div className="col-md-12">
                  <div className="sms_feature_item">
                    <p>{t('homesms.title')}</p>
                    {duration !== 0 && (
                      <h2>
                        <CountUp
                          className="account-balance"
                          start={numStart}
                          end={numEnd}
                          duration={duration}
                        />
                      </h2>
                    )}
                    {/* <h2>4,662,190,879</h2> */}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="sms_feature_item">
                    <p>{t('homesms.quantity')}</p>
                    <h3>300,000+</h3>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="sms_feature_item">
                    <p>{t('homesms.duration')}</p>
                    <h3>
                      1.9 <span>{t('homesms.second')}</span>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <TestQuickregister />
      </div>
    </div>
  );
};

SmsSectionV2.getInitialProps = async () => ({
  namespacesRequired: ['HomeHeroSection'],
});

SmsSectionV2.propTypes = {
  t: PropTypes.func.isRequired,
};
export default withTranslation('HomeSmsSection')(React.memo(SmsSectionV2));
