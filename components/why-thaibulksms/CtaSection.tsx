import { withTranslation } from '../../i18n';
import PropTypes from 'prop-types';
const CtaSectionV2 = ({ t }: any) => (
  <div
    className="cta_section v2 lazyload"
    // style={{ backgroundImage: 'url(/img/bg_10.png)' }}
    data-bgset={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/bg_10.png`}
  >
    <div className="container">
      <div className="row align-items-center mt-5">
        <div className=" col-lg-12">
          <div className="cta-text">
            <h3>{t(`เพิ่มความสำเร็จให้ SMS Marketing`)}<br />ด้วย SMS Provider อันดับ 1 ของไทย</h3>
            <div><a className="btn v7 Whybtn">ทดลองใช้ฟรี</a><a className="btn v7">ดูราคาแพ็กเกจ</a></div>

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
