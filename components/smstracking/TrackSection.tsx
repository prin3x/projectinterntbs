const TrackSectionV2 = () => (
  <div
    className="track_section"
    style={{ backgroundImage: 'url(img/bg_7.png)' }}
  >
    <div className="container">
      <div className="row track_top">
        <div className="col-lg-6 col-md-12">
          <div className="track_img">
            <img src="img/img_19.png" alt="Image" />
          </div>
        </div>
        <div className="col-lg-6 col-md-12">
          <div className="track_text">
            <h3>รู้ว่าผู้รับคนไหนที่สนใจคุณ และนำไปทำ Lead Scoring ต่อได้</h3>
            <p>
              เพราะ SMS Tracking ติดตามสถานะการเปิดได้เป็นรายบุคคล จึงทำ
              ให้คุณสามารถนำไปสรุปผลได้ว่า ผู้รับคนไหนบ้างที่มีแนวโน้มจะสนใจ
              สินค้าบริการของธุรกิจคุณเป็นพิเศษ น่าทำ Marketing ด้วย
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
                  สอนสร้างแคมเปญด้วย <br />
                  <span>SMS Tracking</span> <br />
                  แบบ Step-by-Step
                </h4>
                <a href="#" className="btn v3">
                  ขั้นตอนการใช้งาน
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="track_box v2">
                <h4>
                  ใช้งาน SMS Tracking ได้เฉพาะ <br />
                  <span>Corporate Package</span> เท่านั้น
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
export default TrackSectionV2;
