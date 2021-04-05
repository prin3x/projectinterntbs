import PropTypes from 'prop-types'
import { withTranslation } from '../../i18n'
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
                                    'CtaSection::Increase successes with SMS Marketing <br/>through Thailand’s number 1 SMS Provider.'
                                ),
                            }}
                        >
                            {/* เพิ่มความสำเร็จให้ SMS Marketing
              <br />
              ด้วย SMS Provider อันดับ 1 ของไทย */}
                        </h3>
                        <a
                            href={`${process.env.NEXT_PUBLIC_WEB_URL_ACCOUNT}/register/`}
                            className="btn v7"
                        >
                            {t('CtaSection::Try for free')}
                        </a>
                        <a
                            href={`https://otp-manager.thaibulksms.com/login`}
                            className="btn otp2"
                            target="_blank"
                        >
                            {t('CtaSection::View Package Prices')}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
CtaSectionV2.getInitialProps = async () => ({
    namespacesRequired: ['Resource'],
})

CtaSectionV2.propTypes = {
    t: PropTypes.func.isRequired,
}
export default withTranslation('Resource')(CtaSectionV2)
