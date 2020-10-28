import { withTranslation } from '../../i18n';
import PropTypes from 'prop-types';
const SmsSectionV3 = ({  }: any) => (
  <div className="sms_section v2 ">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-5">
          <div className="newsletter_text">
            <h3>การันตีส่ง SMS ได้ทั่วโลก ส่งไว ติดตามผลการส่งได้</h3>
            <p>ส่ง SMS ครอบคลุม 200 ประเทศ ส่งได้รวดเร็วฉับไวด้วยระบบเลือกช่องทางส่งอัจฉริยะ (Intelligent Routing) พร้อมรายงานการส่งที่ให้คุณมั่นใจได้ว่าข้อความถึงมือผู้รับแน่นอน</p>
          </div>
        </div>
        <div className="col-lg-7">
          <div className="newsletter_img">
            <img
              className="lazyload"
              data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/img-global01.png`}
              alt="Image"
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="sms_form v2">
            <div className="row align-items-center">
              <div className="col-lg-8 col-md-12">
                <div className="sms_form_text">
                  <h4>ต้องการส่ง SMS ไปให้ลูกค้าต่างประเทศ</h4>
                </div>
              </div>
              <div className="col-lg-4 col-md-12">
                <div className="sms_form_field">
                  <a
                    href={``}
                    className="btn v8"
                  >
                    ติดต่อฝ่ายขาย
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

SmsSectionV3.getInitialProps = async () => ({
  namespacesRequired: ['OtpSmsSection'],
});

SmsSectionV3.propTypes = {
  t: PropTypes.func.isRequired,
};
export default withTranslation('OtpSmsSection')(SmsSectionV3);
