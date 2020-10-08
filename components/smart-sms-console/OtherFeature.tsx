import PropTypes from 'prop-types';
import { withTranslation } from '../../i18n';
const TrackSection = ({ t }: any) => (
  <div
    className="track_section lazyload"
    data-bgset={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/bg_7.png`}
  >
    <div className="container">
      <div className="row">
        <div className="col-md-12 promo_item">
          <h2>ยังมีฟีเจอร์อีกมากมาย สำหรับการส่งด้วย Smart SMS Console</h2>
        </div>
      </div>
      <div className="row m-80">
        <div className="col-lg-12">
          <div className="row">
            <div className="col-lg-4">
              <div className="track_box feature">
                <img
                  className="lazyload size-img"
                  data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icn-bulkSMS04.png`}
                  alt="Image"
                />
                <h4>ตั้งเวลาส่งได้หลากหลาย</h4>
                <p>ตั้งเวลาส่งล่วงหน้าตามต้องการ มีรายงานการตั้งเวลาให้เช็กความถูกต้อง</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="track_box v2 feature">
                <img
                  className="lazyload size-img"
                  data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icn-bulkSMS05.png`}
                  alt="Image"
                />
                <h4>ระบบ Phonebook</h4>
                <p>บันทึกเบอร์ลงสมุดโทรศัพท์ในระบบได้ เลือกส่งได้ง่ายกว่า</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="track_box v2 feature">
                <img
                  className="lazyload size-img"
                  data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icn-bulkSMS06.png`}
                  alt="Image"
                />
                <h4>แจ้งเตือนเครดิตใกล้หมด</h4>
                <p>แจ้งเตือนทางอีเมลเมื่อเครดิตเหลือน้อยกว่าที่กำหนด โดยสามารถตั้งค่าเองได้</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 offset-lg-2">
              <div className="track_box feature">
                <img
                  className="lazyload size-img"
                  data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icn-bulkSMS07.png`}
                  alt="Image"
                />
                <h4>ข้อความยาวแค่ไหน ก็ส่งได้</h4>
                <p>รวมเป็นข้อความเดียวให้อัตโนมัติ เพื่อให้ผู้รับอ่านได้ง่าย รองรับสูงสุด 5 ข้อความ</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="track_box v2 feature">
                <img
                  className="lazyload size-img"
                  data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icn-bulkSMS08.png`}
                  alt="Image"
                />
                <h4>ระบบ Blocklist</h4>
                <p>เมื่อนำเบอร์ที่ไม่ต้องการส่งมาใส่ใน Blocklist ระบบจะตัดออก ไม่ทำการส่งไป</p>
              </div>
            </div>
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
