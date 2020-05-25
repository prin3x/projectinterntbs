const HeroSectionV2 = () => (
  <div
    className="hero_section v2"
    style={{ backgroundImage: 'url(img/hero_img_2.png)' }}
  >
    <div className="container">
      <div className="row align-item-center hero_top_one">
        <div className="col-lg-6 col-md-12 col-12 order-lg-1 order-md-2 order-2">
          <div className="hero_text_one">
            <h1>ตอบโจทย์ทุกความต้องการ ด้านการส่ง SMS</h1>
            <p>ส่ง SMS ไว มั่นใจได้ในความเสถียรพร้อมให้คำปรึกษาทุกขั้นตอน</p>
            <ul className="cta-btn">
              <li>
                <a className="btn v3" href="#">
                  ทดลองส่งฟรี
                </a>
              </li>
              <li>
                <a className="btn v5" href="#">
                  ดูแพ็กเกจราคา
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default HeroSectionV2;
