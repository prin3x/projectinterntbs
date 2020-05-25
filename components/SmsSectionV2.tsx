const SmsSectionV2 = () => (
  <div
    className="sms_section "
    style={{ backgroundImage: 'url(img/promo_bg.png)' }}
  >
    <div className="container">
      <div className="row">
        <div className="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2 col-md-12 ">
          <div className="sms_text">
            <h3>มั่นใจได้ ในทุกๆ การส่ง SMS</h3>
          </div>
        </div>
        <div className="col-md-12">
          <div className="sms_feature">
            <div className="row">
              <div className="col-md-12">
                <div className="sms_feature_item">
                  <p>จำนวน SMS ที่เราส่งไปจนถึงเวลานี้</p>
                  <h2>656,778,435</h2>
                </div>
              </div>
              <div className="col-md-6">
                <div className="sms_feature_item">
                  <p>จำนวนการส่ง SMS โดยเฉลี่ย / วัน</p>
                  <h3>2,000,00</h3>
                </div>
              </div>
              <div className="col-md-6">
                <div className="sms_feature_item">
                  <p>ระยะเวลาการส่ง SMS โดยเฉลี่ย</p>
                  <h3>
                    2.9 <span>วินาที</span>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="sms_form">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12">
                <div className="sms_form_text">
                  <h4>ทดลองส่ง SMS เข้ามือถือคุณได้ทันที</h4>
                  <p>เพียงกรอกเบอร์มือถือของคุณ และยืนยันตัวตนผ่าน OTP</p>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="sms_form_field">
                  <input type="text" placeholder="เบอร์มือถือของคุณ" />
                  <button className="btn v2" type="submit">
                    ยืนยันเบอร์
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default SmsSectionV2;
