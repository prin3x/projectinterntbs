const FeatureSection = () => (
  <div className="feature_section">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h3 className="section_title">
            ทำไมต้องเป็น<span className="col_one">ThaiBulk</span>{' '}
            <span className="col_two">SMS</span>
          </h3>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-3">
          <div className="single_feature_item">
            <img src="img/icon_1.png" alt="Image" />
            <div className="single_feature_text">
              <h4>SMS Provider</h4>
              <p>
                อันดับ 1 ของไทย <br />
                ที่ได้รับใบอนุญาตจาก กสทช.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="single_feature_item">
            <img src="img/icon_2.png" alt="Image" />
            <div className="single_feature_text">
              <h4>Direct Connection</h4>
              <p>ต่อตรงกับ 3 เครือข่ายหลัก</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="single_feature_item">
            <img src="img/icon_3.png" alt="Image" />
            <div className="single_feature_text">
              <h4>User Friendly</h4>
              <p>
                ทั้งกับผู้ใช้ทั่วไป <br />
                และ Developer
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="single_feature_item">
            <img src="img/icon_4.png" alt="Image" />
            <div className="single_feature_text">
              <h4>Industry Expert</h4>
              <p>ที่ให้คำแนะนำได้ทุกขั้นตอน</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default FeatureSection;
