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
            <h3>กำหนดกลุ่มเป้าหมายเองได้</h3>
            <p>เข้าถึงลูกค้าได้อย่างมีประสิทธิภาพมากขึ้น และประหยัดงบประมาณในการส่ง เพราะกำหนดส่งไปยังกลุ่มเป้าหมายที่ต้องการได้ เช่น เพศ อายุ หรือผู้ที่มีกำลังซื้อสูง เป็นต้น</p>
          </div>
        </div>
        <div className="col-md-6 col-md-pull-6">
          <div className="track_img">
            <img
              className="lazyload"
              data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/img-lbs02.png`}
              alt="Image"
            />
          </div>
        </div>
      </div>
      <div className="row track_top m-40">
        <div className="col-md-6">
          <div className="track_text">
            <h3>เกิดการขายทันทีในพื้นที่ของคุณ</h3>
            <p>เข้าถึงอย่างรวดเร็ว ทำให้กลายเป็นตัวเลือกแรก ๆ ในการเลือกซื้อของกลุ่มเป้าหมาย โดยเฉพาะอย่างยิ่งในพื้นที่ที่มีการแข่งขันสูง เช่น ห้างสรรพสินค้า การออกบูธจัดแสดง เป็นต้น</p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="track_img">
            <img
              className="lazyload"
              data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/img-lbs03.png`}
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
