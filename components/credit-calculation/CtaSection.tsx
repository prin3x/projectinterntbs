import { withTranslation } from '../../i18n';
import PropTypes from 'prop-types';
const CtaSectionV2 = ({}: any) => (
    <div
        className="cta_section v2 lazyload"
        data-bgset={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/bg_10.png`}
    >
        <div className="container">
            <div className="row align-items-center">
                <div className=" col-lg-12">
                    <div className="cta-text">
                        <h3>รับฟรี 20 เครดิตสำหรับทดลองส่งจริง</h3>
                        <a
                            href={`${process.env.NEXT_PUBLIC_DOMAIN_URL}/pricing/`}
                            className="btn v7"
                        >
                            ดูราคาแพ็กเกจ
                        </a>
                        <a
                            href={`${process.env.NEXT_PUBLIC_WEB_URL_ACCOUNT}/register/`}
                            className="btn otp2"
                        >
                            สมัครเลย
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
CtaSectionV2.getInitialProps = async () => ({
    namespacesRequired: ['Otp'],
});

CtaSectionV2.propTypes = {
    t: PropTypes.func.isRequired,
};
export default withTranslation('Otp')(CtaSectionV2);
