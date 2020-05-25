const SmsSectionV4 = () => (
  <div className="sms_section v2 ">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-5">
          <div className="newsletter_text">
            <h3>
              ผู้รับเปิดอ่านข้อความหรือไม่ <br />
              เช็กสถานะได้แบบเรียลไทม์
            </h3>
            <p>
              หมดปัญหาส่ง SMS แล้ววัดผลไม่ได้ เพราะการส่งด้วย Link ผ่านฟีเจอร์
              SMS Tracking จะทำให้ติดตามผลได้ทันทีหลังจากที่กดส่ง พร้อมเช็ก
              สถานะได้ว่าผู้รับเปิดข้อความของเราแล้วหรือยัง
            </p>
          </div>
        </div>
        <div className="col-lg-7">
          <div className="newsletter_img">
            <img src="img/img_21.png" alt="Image" />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="sms_form v2">
            <div className="row align-items-top">
              <div className="col-lg-8 col-md-12">
                <div className="sms_form_text">
                  <h4>
                    สิบปากว่าไม่เท่าตาเห็น ทดลองใช้ SMS Tracking <br />
                    ด้วยตัวคุณเอง
                  </h4>
                </div>
              </div>
              <div className="col-lg-4 col-md-12">
                <div className="sms_form_field">
                  <a href="#" className="btn v8">
                    ทดลองใช้ฟรี
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
export default SmsSectionV4;
