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
                        <h3
                            dangerouslySetInnerHTML={{
                                __html: t(
                                    'CtaSection::Use SMS Location-Based Services to enter more of your target customers.'
                                ),
                            }}
                        ></h3>
                        <Link href="/contact/">
                            <a className="btn v7">
                                {t('CtaSection::Additional inquiries')}
                            </a>
                        </Link>
                        <p
                            dangerouslySetInnerHTML={{
                                __html: t(
                                    'CtaSection::Or call us at <a href="tel:02-798-6000">02-798-6000</a>'
                                ),
                            }}
                        ></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
CtaSectionV2.getInitialProps = async () => ({
    namespacesRequired: ['LocationBasedSMSPage'],
});

CtaSectionV2.propTypes = {
    t: PropTypes.func.isRequired,
};
export default withTranslation('LocationBasedSMSPage')(CtaSectionV2);
