import PropTypes from 'prop-types';
import { withTranslation } from '../../i18n';
const TrackSection = ({  }: any) => (
  <div
    className="track_section lazyload"
    data-bgset={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/bg_7.png`}
  >
    <div className="container">
      <div className="row track_top m-40">
        <div className="col-md-6 col-md-push-6">
          <div className="track_text">
            <h3>ข้อเสนอสุดพิเศษ มีให้แบบ Unlimited</h3>
            <p>ไม่จำกัดจำนวน Sender Name และจำนวนบัญชีผู้ใช้รายย่อย มอบให้พิเศษสำหรับตัวแทนจำหน่ายเช่นคุณเท่านั้น</p>
          </div>
        </div>
        <div className="col-md-6 col-md-pull-6">
          <div className="track_img">
            <img
              className="lazyload"
              data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/img-reseller02.png`}
              alt="Image"
            />
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
