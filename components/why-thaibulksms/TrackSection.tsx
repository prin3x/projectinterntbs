import { withTranslation } from '../../i18n';
import PropTypes from 'prop-types';
const TrackSection = ({ t }: any) => (
  <div className="track_section bgWhy lazyload">
    <div className="container">
      <div className="row track_top">
        <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1 col-md-12">
          <div className="simple_icon_title">
            <h3>{t('ใช้งานง่าย ไม่ว่าคุณจะเป็น User แบบไหน')}</h3>
          </div>
        </div>
        <div className="col-lg-12 m-80">
          <div className="row">
            <div className="col-lg-4">
              <div className="track_box whyBox">
                <h4><span>มือใหม่</span> ไม่เคยส่ง SMS ผ่านเว็บมาก่อน</h4>
                <p>การส่ง SMS ผ่าน ThaiBulkSMS ไม่ซับซ้อนแม้ไม่รู้เรื่องเทคนิคก็ส่งได้ หากติดปัญหาก็มีหลายช่องทางที่พร้อมช่วยเหลือ</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="track_box whyBox v2">
                <h4><span>Marketer</span> ที่อยากวัดผลแคมเปญ SMS</h4>
                <p>มีเครื่องมือวัดผลและรายงานที่เข้าใจง่าย ช่วยให้นำไปวิเคราะห์ต่อได้ว่า แคมเปญประสบความสำเร็จหรือไม่</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="track_box whyBox v2">
                <h4><span>Developer</span> ที่ต้องเขียนโปรแกรมเชื่อมต่อ API</h4>
                <p>เขียนโปรแกรมเชื่อมต่อกับ API ได้ง่าย รองรับหลากหลายภาษา และยังมีระบบพร้อมใช้สำหรับการส่ง OTP</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-12 text-center">
          <a href={`${process.env.NEXT_PUBLIC_WEB_URL_ACCOUNT}/register/`} className="btn v3">ทดลองส่งฟรี</a>
        </div>
      </div>
      <div className="row m-80">
        <div className="col-md-6 col-md-push-6">
          <div className="track_text mt-5">
            <h3>พร้อมซัพพอร์ต โดยทีมงานผู้เชี่ยวชาญ</h3>
            <p>จึงทำให้มั่นใจได้ว่าหากระบบเกิดปัญหา ทางเราจะสามารถแก้ไขให้คุณได้อย่างทันท่วงที ไม่ว่าจะเป็นด้าน Hardware หรือ Software ก็ตาม</p>
          </div>
        </div>
        <div className="col-md-6 col-md-pull-6">
          <div className="track_img mt-5">
            {/* <object type="image/svg+xml" data="/img/img-sms-track-page.svg"></object> */}
            <img className="lazyload" data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/img-whysupport.png`} alt="Image" />
          </div>
        </div>
      </div>
      <div className="row m-80">
        <div className="col-md-6 col-md-push-6">
          <div className="track_img mt-5">
            {/* <object type="image/svg+xml" data="/img/img-sms-track-page.svg"></object> */}
            <img className="lazyload" data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/img-whysecure.png`} alt="Image" />
          </div>
        </div>
        <div className="col-md-6 col-md-pull-6">
          <div className="track_text mt-5">
            <h3>เก็บรักษาข้อมูลอย่างปลอดภัย ด้วยมาตรฐาน Internet Banking</h3>
            <p>ด้วยระบบรักษาความปลอดภัย SSL ที่เป็นมาตรฐานสูงสุดซึ่งใช้ใน Internet Banking ต่าง ๆ เพื่อให้มั่นใจได้ว่าเมื่อเข้าใช้งาน ThaiBulkSMS จะได้รับความปลอดภัยเหมือนใช้ Internet Banking</p>
          </div>

        </div>
      </div>
    </div>
  </div>
);
TrackSection.getInitialProps = async () => ({
  namespacesRequired: ['OtpTrackSection'],
});

TrackSection.propTypes = {
  t: PropTypes.func.isRequired,
};
export default withTranslation('OtpTrackSection')(TrackSection);
