import PropTypes from 'prop-types';
import { withTranslation } from '../../i18n';
import Link from 'next/link';
const CtaSectionV2 = ({ t }: any) => (
    <div
        className="cta_section v2 lazyload"
        data-bgset={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/bg_10.png`}
    >
        <div className="container">
            <div className="row align-items-center">
                <div className=" col-lg-12">
                    <div className="cta-text">
                        <h3>
                            {t(
                                'ctaSection::I need to use SMS by connecting with the API'
                            )}
                        </h3>
                        <a
                            href={`${process.env.NEXT_PUBLIC_WEB_URL_ACCOUNT}/register/`}
                            className="btn v7"
                        >
                            {t('ctaSection::Test usage with a free trial')}
                        </a>
                        <Link href="/contact/">
                            <a className="btn otp2">
                                {t('ctaSection::Additional inquiries')}
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

CtaSectionV2.getInitialProps = async () => ({
    namespacesRequired: ['SMSAPIPage'],
});

CtaSectionV2.propTypes = {
    t: PropTypes.func.isRequired,
};

export default withTranslation('SMSAPIPage')(CtaSectionV2);
