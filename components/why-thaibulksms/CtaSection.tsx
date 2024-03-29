import { withTranslation } from '../../i18n';
import Link from 'next/link';

import PropTypes from 'prop-types';
const CtaSectionV2 = ({ t }: any) => (
    <div
        className="cta_section v2 lazyload"
        // style={{ backgroundImage: 'url(/img/bg_10.png)' }}
        data-bgset={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/bg_10.png`}
    >
        <div className="container">
            <div className="row align-items-center mt-5">
                <div className=" col-lg-12">
                    <div className="cta-text">
                        <h3
                            dangerouslySetInnerHTML={{
                                __html: t(
                                    'CtaSection::Increase successes with SMS Marketing <br/>through Thailand’s number 1 SMS Provider.'
                                ),
                            }}
                        >
                            {/* {t(`เพิ่มความสำเร็จให้ SMS Marketing`)}
              <br />
              ด้วย SMS Provider อันดับ 1 ของไทย */}
                        </h3>
                        <div>
                            <a
                                href={`${process.env.NEXT_PUBLIC_WEB_URL_ACCOUNT}/register/`}
                                className="btn v7 Whybtn"
                            >
                                {t('CtaSection::Try for free')}
                            </a>
                            <Link href="/pricing">
                                <a className="btn v7">
                                    {t('CtaSection::View Package Prices')}
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
CtaSectionV2.getInitialProps = async () => ({
    namespacesRequired: ['WhyThaibulksms'],
});

CtaSectionV2.propTypes = {
    t: PropTypes.func.isRequired,
};
export default withTranslation('WhyThaibulksms')(CtaSectionV2);
