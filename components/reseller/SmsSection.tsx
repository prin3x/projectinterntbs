import PropTypes from 'prop-types'
import { withTranslation } from '../../i18n'
import Link from 'next/link'
const SmsSectionV3 = ({ t }: any) => (
    <div className="sms_section v2 ">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-5">
                    <div className="newsletter_text">
                        <h3>
                            {t(
                                'SmsSection::Valuable prices at better rates than on the web page.'
                            )}
                        </h3>
                        <p>
                            {t(
                                'SmsSection::When you become a reseller, you will receive superior Special Rate prices that are suitable for Software House or Digital Agency businesses.'
                            )}
                        </p>
                    </div>
                </div>
                <div className="col-lg-7">
                    <div className="newsletter_img">
                        <img
                            className="lazyload"
                            data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/img-reseller01.png`}
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
                                    <h4>
                                        {t(
                                            'SmsSection::Interested in becoming a ThaiBulkSMS reseller?'
                                        )}
                                    </h4>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12">
                                <div className="sms_form_field">
                                    <Link href="/contact">
                                        <a href={``} className="btn v8">
                                            {t(
                                                'SmsSection::Request a quotation slip'
                                            )}
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
)

SmsSectionV3.getInitialProps = async () => ({
    namespacesRequired: ['ResellerPage'],
})

SmsSectionV3.propTypes = {
    t: PropTypes.func.isRequired,
}
export default withTranslation('ResellerPage')(SmsSectionV3)
