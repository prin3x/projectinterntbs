import PropTypes from 'prop-types';
import { withTranslation } from '../../i18n';
const SimpleIconSection = ({  }: any) => (
  <div className="simple_icon_section v2">
    <div className="container">
      <div className="row">
        <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1 col-md-12">
          <div className="simple_icon_title">
            <h3>ระบุพื้นที่ได้ตามความต้องการ</h3>
            <p>ไม่ว่าจะอยู่ที่ไหน ก็สามารถใช้บริการนี้ได้ หากสถานที่นั้นมีเสาสัญญาณโทรศัพท์
เพื่อกระจายข้อความของคุณ โดยสามารถกำหนดจุดส่งได้ 2 แบบ</p>
          </div>
        </div>
      </div>  
      <div className="row m-80">
        <div className="col-lg-6">
          <div className="track_box productBox">
           <img
              className="lazyload"
              data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icn-lbs01.png`}
              alt="Image"
            />
            <h4><span>พื้นที่ตามจุดสำคัญ</span></h4>
            <p>สามารถส่งข้อความได้ตามสถานที่หรือจุดสำคัญทั่วประเทศ ไม่ว่าจะเป็น สนามบิน ห้างสรรพสินค้า หรือสถานที่ราชการ เป็นต้น</p>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="track_box productBox v2">
           <img
              className="lazyload"
              data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icn-lbs02.png`}
              alt="Image"
            />
            <h4><span>กำหนดจุดส่งด้วยตนเอง</span></h4>
            <p>สามารถกำหนดพื้นที่ส่งข้อความด้วยตนเอง ตามพื้นที่ที่มีสัญญาณโทรศัพท์กระจายอยู่ </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);
SimpleIconSection.getInitialProps = async () => ({
  namespacesRequired: ['OtpSimpleIconSection'],
});

SimpleIconSection.propTypes = {
  t: PropTypes.func.isRequired,
};
export default withTranslation('OtpSimpleIconSection')(SimpleIconSection);
