import { withTranslation } from '../../i18n';
import PropTypes from 'prop-types';
const TestCountSection = ({  }: any) => {
    return (
        <div
            className="sms_section productsms CalCredit lazyload"
            data-bgset={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/promo_bg.png`}
        >
            <div className="container">
                <div className="row">
                    <div className="col-xl-10 offset-xl-1 col-lg-10 offset-lg-1 col-md-12 ">
                        <div className="sms_text">
                            <h3>ทดลองคำนวณเครดิตด้วยข้อความของคุณ</h3>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="row">
                          <div className="col-md-6 col-sm-12 spaceCount">
                              <div className="secCountCredits">
                                  <textarea className="areaCount"></textarea>
                                  <p className="textMessage">ข้อความ</p>
                                  <p className="textCount">0/70</p>
                                  <div className="countCredit">คิดเป็น <span>160 เครดิต</span></div>
                              </div>
                          </div>
                          <div className="col-md-6 col-sm-12 spaceRegis">
                            <a href="" className="linkRegis">สมัครสมาชิก</a><br />
                            <p className="freeCredit">เพื่อ รับเครดิตฟรี สำหรับทดลองส่ง</p>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
TestCountSection.getInitialProps = async () => ({
    namespacesRequired: ['credit-calculation'],
});

TestCountSection.propTypes = {
    t: PropTypes.func.isRequired,
};
export default withTranslation('credit-calculation')(TestCountSection);
