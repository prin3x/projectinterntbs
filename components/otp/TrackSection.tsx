const TrackSection = () => (
  <div
    className="track_section"
    style={{ backgroundImage: 'url(img/bg_7.png)' }}
  >
    <div className="container">
      <div className="row track_top">
        <div className="col-lg-6 col-md-12">
          <div className="track_img">
            <img src="img/img_22.png" alt="Image" />
          </div>
        </div>
        <div className="col-lg-6 col-md-12">
          <div className="track_text">
            <h3>
              รู้ผลสถานะการยืนยันตัวตน <br />
              ครบทุกรายการ
            </h3>
            <p>
              สามารถดูสถานะการยืนยันตัวตนผ่านรหัส OTP ที่ส่งไปได้ครบทุกรายการ
              ไม่ว่าจะยืนยันสำเร็จ หรือรหัสหมดอายุ
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div className="row">
            <div className="col-lg-6">
              <div className="track_box">
                <h4>
                  แต่ถ้าหากคุณมี<span>ระบบส่ง OTP</span> <br />
                  อยู่แล้ว ก็สามารถนำมาเชื่อม <span>API</span> <br />
                  ได้เช่นกัน{' '}
                </h4>
                <a href="#" className="btn v3">
                  ขั้นตอนการใช้งาน
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="track_box v2">
                <h4>
                  ใช้งานระบบส่ง OTP พร้อมใช้ <br />
                  ได้เฉพาะ <span>Corporate Package</span> <br />
                  เท่านั้น
                </h4>
                <a href="#" className="btn v3">
                  ดูราคาแพ็กเกจ
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default TrackSection;
