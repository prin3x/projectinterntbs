const PricingSection = () => (
  <div className="pricing-section">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h2 className="section_title">แพ็กเกจและราคา</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 col-md-12">
          <div className="pricing_box">
            <img src="img/price_1.png" alt="Image" />
            <h3>Standard SMS</h3>
            <p>ส่ง SMS ผ่านเว็บ ส่งง่ายกว่ามือถือ ดูรายงานการส่งได้</p>
            <ul className="pricing_feature">
              <li>
                <i className="far fa-check-circle"></i>
                <p>ราคาถูกกว่า</p>
              </li>
              <li>
                <i className="far fa-check-circle"></i>
                <p>Key Benefit</p>
              </li>
              <li>
                <i className="far fa-check-circle"></i>
                <p>Key Benefit</p>
              </li>
            </ul>
            <div className="price_plan">
              <span>เริ่มต้นที่</span>
              <h2>
                0.35 <span>บาท / SMS</span>
              </h2>
              <a href="#" className="btn v3">
                ดูราคาแพ็กเกจ
              </a>
            </div>
            <div className="price_bottom_text">
              <p>เหมาะกับใคร?</p>
              <ul>
                <li>ผู้ที่ใช้งาน Volume เยอะๆ</li>
                <li>Suitable for</li>
                <li>Suitable for</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-12">
          <div className="pricing_box">
            <img src="img/price_2.png" alt="Image" />
            <h3>Corporate SMS</h3>
            <p>ส่ง SMS ผ่านเว็บ ส่งง่ายกว่ามือถือ ดูรายงานการส่งได้</p>
            <ul className="pricing_feature">
              <li>
                <i className="far fa-check-circle"></i>
                <p>ส่ง OTP ได้</p>
              </li>
              <li>
                <i className="far fa-check-circle"></i>
                <p>คืนเครดิตถ้าส่งไม่ถึงผู้รับ</p>
              </li>
              <li>
                <i className="far fa-check-circle"></i>
                <p>มีเครื่องมือวัดผลแคมเปญ</p>
              </li>
            </ul>
            <div className="price_plan">
              <span>เริ่มต้นที่</span>
              <h2>
                0.45 <span>บาท / SMS</span>
              </h2>
              <a href="#" className="btn v3">
                ดูราคาแพ็กเกจ
              </a>
            </div>
            <div className="price_bottom_text">
              <p>เริ่มต้นที่</p>
              <ul>
                <li>ผู้ที่ต้องการส่ง OTP</li>
                <li>ทีม Marketing ที่ต้องการวัดผลแคมเปญ</li>
                <li>Suitable for</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="pricing_bottom_text">
            <span>ตารางเปรียบเทียบแพ็กเกจแบบละเอียด </span>
            <h3>ยังไม่แน่ใจว่าจะเลือกแพ็กเกจไหน เราให้คุณทดลองส่งก่อนได้</h3>
            <a href="#" className="btn v3">
              ทดลองส่งฟรี
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default PricingSection;
