import { withTranslation } from '../../i18n';
import PropTypes from 'prop-types';
const CtaSectionV2 = ({ t }: any) => (
  <div
    className="cta_section v2 lazyload"
    data-bgset={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/bg_10.png`}
  >
    <div className="container">
      <div className="row align-items-center">
        <div className=" col-lg-12">
          <div className="cta-text">
            <h3>ส่ง SMS และ OTP ได้ทั่วโลก<br />ส่งถึงไว ในราคาที่คุ้มค่า</h3>
            <a
              href={``}
              className="btn v7"
            >
              สอบถามเพิ่มเติม
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);
CtaSectionV2.getInitialProps = async () => ({
  namespacesRequired: ['OtpCtaSection'],
});

CtaSectionV2.propTypes = {
  t: PropTypes.func.isRequired,
};
export default withTranslation('OtpCtaSection')(CtaSectionV2);
