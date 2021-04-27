import PropTypes from 'prop-types';
import { withTranslation } from '../../i18n';
import Link from 'next/link';
const CtaSectionV2 = () => (
    <div
        className="cta_section v2 lazyload"
        data-bgset={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/bg_10.png`}
    >
        <div className="container">
            <div className="row align-items-center">
                <div className=" col-lg-12">
                    <div className="cta-text">
                        <h3>ส่ง SMS Alert เพื่อให้ลูกค้าไม่พลาดทุกข่าวสารของคุณ</h3>
                        <Link href="/contact">
                            <a className="btn v7 marginSide">ขอรายละเอียด</a>
                        </Link>
                        <Link href="/contact">
                            <a className="btn v7 marginSide">แพ็กเกจราคา</a>
                        </Link>
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
