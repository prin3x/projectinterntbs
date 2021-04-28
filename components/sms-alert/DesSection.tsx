import PropTypes from 'prop-types';
import { withTranslation } from '../../i18n';
const SimpleIconSection = () => (
    <div className="simple_icon_section v2">
        <div className="container">
            <div className="row">
                <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1 col-md-12">
                    <div className="simple_icon_title">
                        <h3>SMS Marketing ช่วยให้ธุรกิจคุณได้ส่งข้อความ สื่อสารได้ทุกจุดประสงค์</h3>
                    </div>
                </div>
            </div>
            <div className="row m-80 alertDetail">
                <div className="col-lg-4">
                    <div className="track_box productBox">
                        <img
                            className="lazyload col4"
                            data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icn-alert01.png`}
                            alt="Image"
                        />
                        <p className="col6">แจ้งเตือนการชำระค่าบริการ หรือธุรกรรมทางการเงินต่าง ๆ</p>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="track_box productBox v2">
                        <img
                            className="lazyload col4"
                            data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icn-alert02.png`}
                            alt="Image"
                        />
                        <p className="col6">แจ้งการทำงานภายในองค์กร</p>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="track_box productBox">
                        <img
                            className="lazyload col4"
                            data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icn-alert03.png`}
                            alt="Image"
                        />
                        <p className="col6">แจ้งเตือนโปรโมชันสำคัญ หรือสิทธิพิเศษต่าง ๆ ที่ควรได้รับ</p>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="track_box productBox v2">
                        <img
                            className="lazyload col4"
                            data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icn-alert04.png`}
                            alt="Image"
                        />
                        <p className="col6">แจ้งเตือนการติดตามพัสดุ สำหรับธุรกิจซื้อขายผ่านช่องทางออนไลน์</p>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="track_box productBox v2">
                        <img
                            className="lazyload col4"
                            data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icn-alert05.png`}
                            alt="Image"
                        />
                        <p className="col6">แจ้งเตือนการสั่งซื้อหรือจองสินค้าและบริการต่าง ๆ</p>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="track_box productBox v2">
                        <img
                            className="lazyload col4"
                            data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icn-alert06.png`}
                            alt="Image"
                        />
                        <p className="col6">แจ้งเตือนสิ่งที่สำคัญ เพื่อให้ไม่พลาดข้อมูลของบริการนั้น ๆ</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
SimpleIconSection.getInitialProps = async () => ({
    namespacesRequired: ['LocationBasedSMSPage'],
});

SimpleIconSection.propTypes = {
    t: PropTypes.func.isRequired,
};
export default withTranslation('LocationBasedSMSPage')(SimpleIconSection);
