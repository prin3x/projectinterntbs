const SmsSection = () => (
  <div
    className="sms_section"
    style={{ backgroundImage: 'url(img/promo_bg.png' }}
  >
    <div className="container">
      <div className="row">
        <div className="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2 col-md-12 ">
          <div className="sms_text">
            <h3>ส่ง OTP ไม่ดีเลย รันแคมเปญไม่สะดุด</h3>
            <p>
              ส่ง SMS ผ่าน 3 เครือข่ายหลักโดยตรง (AIS, TRUE, DTAC)
              ระบบเลือกช่องทางการส่งที่ตรงกับเครือข่ายของเบอร์ผู้รับ
              รับประกันความเสถียร 24/7
            </p>
          </div>
        </div>
        <div className="col-md-12">
          <div className="sms_feature">
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="sms_feature_item">
                  <p>จำนวนการส่ง SMS โดยเฉลี่ย / วัน</p>
                  <h3>2,000,00</h3>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="sms_feature_item">
                  <p>ระยะเวลาการส่ง SMS โดยเฉลี่ย</p>
                  <h3>
                    2.9 <span>วินาที</span>
                  </h3>
                </div>
              </div>
              <div className="col-lg-4 col-md-12">
                <div className="sms_feature_item">
                  <a href="#">
                    <img src="img/play_icon.png" alt="Image" />
                    ทำไมเราถึงส่งไว?
                  </a>
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
export default SmsSection;
