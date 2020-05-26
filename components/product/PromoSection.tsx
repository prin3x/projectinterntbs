const PromoSection = () => (
  <div
    className="promo_section"
    style={{ backgroundImage: 'url(img/bg_5.png)' }}
  >
    <div className="container">
      <div className="row">
        <div className="col-lg-6 offset-lg-3 col-md-8 offset-md-2">
          <div className="promo_text">
            <h2>
              ฟีเจอร์ครบ ตอบโจทย์ทั้ง <br />
              Marketer และ Developer
            </h2>
            <p>ใช้ง่าย ไม่ว่าจะส่งผ่านเว็บหรือ API</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="promo_item">
            <div className="promo_title">
              <p>
                ส่งผ่านเว็บเองง่าย ๆ <br />
                ไม่ต้องรู้เรื่องเทคนิคก็ส่งได้
              </p>
            </div>
            <div className="promo_img">
              <img src="img/promo_2.png" alt="Image" />
              <a href="#" className="btn v2">
                ทดลองส่งฟรี
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="promo_item">
            <div className="promo_title">
              <p>
                เขียนเชื่อม API ง่าย <br />
                ต่อได้ทุกภาษา
              </p>
            </div>
            <div className="promo_img">
              <img src="img/promo_1.png" alt="Image" />
              <a href="#" className="btn v2">
                TBS Developer
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-12">
          <div className="promo_bottom_text">
            <p>
              ยังไม่ค่อยเข้าใจว่าการส่ง SMS ผ่าน ThaiBulkSMS
              ต่างจากการส่งผ่านมือถืออย่างไร{' '}
              <span>ความรู้เบื้องต้นเกี่ยวกับ SMS</span>
            </p>
          </div>
        </div>
      </div>
      <div className="row align-items-center row_pad">
        <div className="col-lg-6 col-md-12">
          <div className="promo_item_three_img">
            <img src="img/plane.png" alt="Image" />
          </div>
        </div>
        <div className="col-lg-6 col-md-12">
          <div className="service_feature_text">
            <h3>ไม่เสียเครดิต ถ้าส่งไม่ถึงผู้รับ</h3>
            <p>
              ตรวจสอบได้ถึงมือถือปลายทาง ว่า SMS ส่งถึงมือถือผู้รับหรือไม่{' '}
              <br />
              หากส่งไม่ถึง เช่น ติด Anti-Spam, ปิดเครื่อง, โทรศัพท์ข้อมูลเต็ม{' '}
              <br />
              ฯลฯ ทางเราจะคืนเครดิตให้คุณ
            </p>
            <a className="link" href="#">
              Anti-Spam คืออะไร
            </a>
            <h6 className="promo_link">
              ฟีเจอร์นี้สำหรับ <span>แพ็กเกจ Corporate SMS</span> เท่านั้น
            </h6>
          </div>
        </div>
      </div>
      <div className="row align-items-center row_pad">
        <div className="col-lg-5 col-md-12 col-12 order-lg-1 order-md-2 order-2">
          <div className="service_feature_text">
            <h3>
              วัดผลแคมเปญแม่นยำ <br />
              ด้วย SMS Tracking
            </h3>
            <p>
              ติดตามลูกค้าหรือกลุ่มเป้าหมายได้ทันทีหลังจาก ที่กดส่งข้อความ
              พร้อมเช็กสถานะได้ว่าปลายทาง เปิดอ่านข้อความของเราแล้วหรือยัง
            </p>
            <a className="link" href="#">
              SMS Tracking ทำงานอย่างไร?
            </a>
            <h6 className="promo_link">
              ฟีเจอร์นี้สำหรับ <span>แพ็กเกจ Corporate SMS</span> เท่านั้น
            </h6>
          </div>
        </div>
        <div className="col-lg-7 col-md-12 col-12 order-lg-2 order-md-1 order-1">
          <div className="row">
            <div className="col-md-4 col-12">
              <div className="service_feature_item">
                <img src="img/img_4.png" alt="Image" />
                <p>รู้ว่าใครเปิด หรือไม่เปิดข้อความ</p>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div className="service_feature_item">
                <img src="img/img_5.png" alt="Image" />
                <p>รู้ว่าใครเปิด หรือไม่เปิดข้อความ</p>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div className="service_feature_item">
                <img src="img/img_6.png" alt="Image" />
                <p>รู้ว่าใครเปิด หรือไม่เปิดข้อความ</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col-lg-6 col-md-12">
          <div className="promo_item_three_img">
            <img src="img/device.png" alt="Image" />
          </div>
        </div>
        <div className="col-lg-6 col-md-12">
          <div className="service_feature_text">
            <h3>
              ระบบส่ง OTP แบบพร้อมใช้ <br />
              ไม่ต้องเขียนโปรแกรมเพิ่ม
            </h3>
            <p>
              ให้ Developer ทำงานง่ายและสะดวกขึ้น เพราะเพียงเซ็ตอัพ
              เบื้องต้นไม่กี่คลิก ก็ได้โค้ดสำหรับนำไปใช้กับ API ได้ทันที
            </p>
            <a href="#" className="btn v2">
              ทดลองส่งฟรี
            </a>
            <a className="link" href="#">
              อ่านเพิ่มเติมเกี่ยวกับ OTP Ready-to-Use
            </a>
            <h6 className="promo_link">
              ฟีเจอร์นี้สำหรับ <span>แพ็กเกจ Corporate SMS</span> เท่านั้น
            </h6>
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default PromoSection;
