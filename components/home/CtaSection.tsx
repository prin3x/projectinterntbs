import { withTranslation } from '../../i18n';
import Link from 'next/link';

import PropTypes from 'prop-types';
const CtaSection = ({ t }: any) => (
    <div className="cta_section">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-xl-12"></div>
            </div>
            <div className="row align-items-center">
                <div className="col-xl-6 col-lg-12">
                    <div className="cta-text">
                        <h3
                            dangerouslySetInnerHTML={{
                                __html: t(
                                    'CtaSection::Improve the effectiveness of<br/>your business With SMS from ThaiBulkSMS'
                                ),
                            }}
                        ></h3>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-12">
                    <ul className="cta-btn before-footer">
                        <li>
                            <a
                                href={`${process.env.NEXT_PUBLIC_WEB_URL_ACCOUNT}/register/`}
                                className="btn v3"
                            >
                                {t('CtaSection::Try SMS sending for free')}
                            </a>
                        </li>
                        <li>
                            <Link href="/pricing/">
                                <a className="btn v5">
                                    {t('CtaSection::View package prices')}
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
);
CtaSection.getInitialProps = async () => ({
    namespacesRequired: ['Home'],
});

CtaSection.propTypes = {
    t: PropTypes.func.isRequired,
};
export default withTranslation('Home')(CtaSection);
