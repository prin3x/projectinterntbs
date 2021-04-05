import { withTranslation } from '../../i18n'
import PropTypes from 'prop-types'
const SmsSectionV3 = ({ t }: any) => (
    <div className="sms_section v3 ">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-5">
                    <div className="newsletter_text">
                        <h3>
                            {t(
                                'SmsSection::As Thailand’s Number 1 SMS Communication Platform, which can be personally confirmed,'
                            )}
                        </h3>
                        <p>
                            {t(
                                'SmsSection::ThaiBulkSMS provides the SMS Communication Platform that is certified by the National Broadcasting and Telecommunications Commission. We have been operating for over 10 years, so you can certainly rest assured in the quality of our service.'
                            )}
                        </p>
                    </div>
                </div>
                <div className="col-lg-7">
                    <div className="newsletter_img">
                        <img
                            className="lazyload"
                            data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/img-WhyNum1.png`}
                            alt="Image"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
)

SmsSectionV3.getInitialProps = async () => ({
    namespacesRequired: ['WhyThaibulksms'],
})

SmsSectionV3.propTypes = {
    t: PropTypes.func.isRequired,
}
export default withTranslation('WhyThaibulksms')(SmsSectionV3)
