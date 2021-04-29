import PropTypes from 'prop-types';
import { withTranslation } from '../../i18n';
import Link from 'next/link';
const SmsSectionV3 = ({ t }: any) => (
    <div className="sms_section v2 ">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-5">
                    <div className="newsletter_text">
                        <h3>{t('SmsSection::smssec1')}</h3>
                        <p>{t('SmsSection::smssec2')}</p>
                    </div>
                </div>
                <div className="col-lg-7">
                    <div className="newsletter_img">
                        <img
                            className="lazyload"
                            data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/img-alert.png`}
                            alt="Image"
                        />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="sms_form v2">
                        <div className="row align-items-center">
                            <div className="col-lg-8 col-md-12">
                                <div className="sms_form_text">
                                    <h4>{t('SmsSection::smssec3')}</h4>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12">
                                <div className="sms_form_field">
                                    <Link href="/contact">
                                        <a className="btn v8">
                                            {t('SmsSection::smssec4')}
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

SmsSectionV3.getInitialProps = async () => ({
    namespacesRequired: ['Sms-alert'],
});

SmsSectionV3.propTypes = {
    t: PropTypes.func.isRequired,
};
export default withTranslation('Sms-alert')(SmsSectionV3);
