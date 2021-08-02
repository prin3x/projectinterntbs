import PropTypes from 'prop-types';
import { withTranslation } from '../../i18n';
const SimpleIconSection = ({ }: any) => (
  <div className="simple_icon_section  bg-speed">
    <div className="container">
      
      <div className="row align-items-center">
          <div className="col-lg-5">
              <div className="newsletter_text">
                  <h3>ทำไมเราถึงส่งได้เร็วและเสถียรกว่า</h3>
                  <p>ThaiBulkSMS ใช้ระบบ Intelligent Routing ในการเลือกช่องทางส่งที่เร็วที่สุดให้โดยอัตโนมัติ คุณจึงมั่นใจได้ในความเร็วและความเสถียรของทุกการส่ง SMS</p>
                  <p className="textNum">Transaction สูงสุดที่รองรับ / วินาที</p>
                  <h3><span>400 TPS</span></h3>
              </div>
          </div>
          <div className="col-lg-7">
              <div className="newsletter_img">
                <img
                    className="lazyload"
                    data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/img_15.png`}
                    alt="Image"
                />
              </div>
          </div>
      </div>
      <div className="row align-items-center">
        <div className="col-lg-12">
          <div className="sendOperator">
            <div className="sendOper">
              <object
                  type="image/svg+xml"
                  data={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icn-oper01.svg`}
              ></object>
              <p>ส่งผ่าน 3 เครือข่ายโดยตรง</p>
            </div>
            <div className="sendOper">
              <object
                  type="image/svg+xml"
                  data={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icn-oper02.svg`}
              ></object>
              <p>เลือกช่องทางส่ง ที่ตรงกับเครือข่ายเบอร์ผู้รับ</p>
            </div>
            <div className="sendOper">
              <object
                  type="image/svg+xml"
                  data={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icn-oper03.svg`}
              ></object>
              <p>เลือกช่องทางส่งที่ดีที่สุดอัตโนมัติ</p>
            </div>
            <div className="sendOper">
              <object
                  type="image/svg+xml"
                  data={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icn-oper04.svg`}
              ></object>
              <p>มีระบบจัดการคิวด้วย AI ไม่เกิดปัญหาคอขวด</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col-lg-12 secBrandSpeed">
          <p>จำนวน SMS ที่เราส่งไปจนถึงเวลานี้</p>
          <h2>4,748,327,510</h2>
          <p>แบรนด์ชั้นนำ ที่ส่ง SMS กับเรา</p>
          <div className="brandSpeed">
            <div className="imgBrand">
              <img
                    className="lazyload"
                    data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/logo-brand05.png`}
                    alt="Image"
                />
            </div>
            <div className="imgBrand">
              <img
                    className="lazyload"
                    data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/logo-brand03.png`}
                    alt="Image"
                />
            </div>
            <div className="imgBrand">
              <img
                    className="lazyload"
                    data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/logo-brand06.png`}
                    alt="Image"
                />
            </div>
            <div className="imgBrand">
              <img
                    className="lazyload"
                    data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/logo-brand08.png`}
                    alt="Image"
                />
            </div>
            <div className="imgBrand">
              <img
                    className="lazyload"
                    data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/logo-brand04.png`}
                    alt="Image"
                />
            </div>
          </div>
        </div>
      </div>
      
    </div>
  </div>
);
SimpleIconSection.getInitialProps = async () => ({
  namespacesRequired: ['Otp'],
});

SimpleIconSection.propTypes = {
  t: PropTypes.func.isRequired,
};
export default withTranslation('Otp')(SimpleIconSection);