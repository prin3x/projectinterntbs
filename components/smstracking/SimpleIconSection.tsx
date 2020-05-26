const SimpleIconSectionV2 = () => (
  <div className="simple_icon_section">
    <div className="container">
      <div className="row">
        <div className="col-xl-8 offset-xl-2 col-lg-10 offsert-lg-1 col-md-12">
          <div className="simple_icon_title">
            <h3>วัดผลแคมเปญแม่นยำ ด้วยข้อมูลที่จับต้องได้</h3>
            <p>
              คุณสามารถใช้ข้อมูลจาก “รายงานแคมเปญ” ของ SMS Tracking
              ในการนำไปวัดผลทางการตลาด ว่าแคมเปญ SMS
              ของคุณสำเร็จและคุ้มค่ากับงบประมาณที่ใช้มากแค่ไหน
            </p>
          </div>
        </div>
        <div className="col-md-12">
          <div className="icon_wrapper">
            <img className="arrow_bg" src="img/arrow_bg.png" alt="Image" />
            <div className="simple_icon_wrapper">
              <div className="simple_icon">
                <img src="img/img_12.png" alt="Image" />
                <p>
                  จำนวน SMS <br />
                  ที่ส่งถึงผู้รับ
                </p>
              </div>
              <div className="simple_icon">
                <img src="img/img_4.png" alt="Image" />
                <p>
                  จำนวนผู้รับ <br />
                  ที่เปิดอ่าน
                </p>
              </div>
              <div className="simple_icon">
                <img src="img/img_13.png" alt="Image" />
                <p>
                  จำนวนการเข้าชม <br />
                  เว็บไซต์ที่มาจาก SMS
                </p>
              </div>
              <div className="simple_icon">
                <img src="img/img_14.png" alt="Image" />
                <p>
                  จำนวน Conversion <br />
                  ที่มาจาก SMS
                </p>
              </div>
              <div className="simple_icon">
                <img src="img/img_17.png" alt="Image" />
                <p>
                  จำนวนเครดิต <br />
                  ที่ใช้ในแคมเปญ
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row icon_btn">
        <div className="col-lg-10 offset-lg-1">
          <div className="row">
            <div className="col-md-6">
              <div className="simple_icon_btn">
                <h4>Conversion rate</h4>
              </div>
            </div>
            <div className="col-md-6">
              <div className="simple_icon_btn">
                <h4>ROI</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default SimpleIconSectionV2;
