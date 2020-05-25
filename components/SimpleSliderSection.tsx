import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel'), {
  ssr: false,
});
const SimpleSliderSection = () => (
  <div className="simple_slider_section">
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-5 col-md-6">
          <div className="simple_slider_heading_wrap">
            <div className="simple_slider_heading">
              <h3>
                ครอบคลุมทุกจุดประสงค์ <br />
                การส่ง <span>SMS</span>
              </h3>
            </div>
            <div className="simple_slider_heading_img">
              <img src="img/img_23.png" alt="Image" />
            </div>
          </div>
        </div>
        <div className="col-lg-7 col-md-6">
          <OwlCarousel
            className="simple_slider_wrapper"
            items={2}
            nav
            dots={false}
            loop
            navText={[
              '<i class="ion-ios-arrow-back"></i>',
              '<i class="ion-ios-arrow-forward"></i>',
            ]}
            // margin={30}
            // center
            smartSpeed={2000}
            responsiveClass
            responsive={{
              0: {
                items: 1,
                margin: 20,
              },
              768: {
                items: 1,
              },
              992: {
                items: 1,
                center: true,
              },
              1200: {
                items: 2,
              },
            }}
          >
            <div className="item">
              <div className="simple_slider_item">
                <h4>โปรโมตกิจกรรม การตลาด</h4>
                <img src="img/user_3.png" alt="Image" />
                <p>
                  25 ก.พ. นี้ ลดเพิ่มสูงสุด30% ผลิตภัณฑ์ออแกนนิคที่ร่วม รายการ{' '}
                  <span>ดูสินค้าทั้งหมด</span>
                </p>
                <a href="#" className="btn v9">
                  ทดลองส่งฟรี
                </a>
              </div>
            </div>
            <div className="item">
              <div className="simple_slider_item">
                <h4>โปรโมตกิจกรรม การตลาด</h4>
                <img src="img/user_3.png" alt="Image" />
                <p>
                  25 ก.พ. นี้ ลดเพิ่มสูงสุด30% ผลิตภัณฑ์ออแกนนิคที่ร่วม รายการ{' '}
                  <span>ดูสินค้าทั้งหมด</span>
                </p>
                <a href="#" className="btn v9">
                  ทดลองส่งฟรี
                </a>
              </div>
            </div>
          </OwlCarousel>
          <a href="#" className="lang_link text-right pr-4">
            ใช้ SMS ทำอะไรได้อีกบ้าง <img src="img/arrow_3.png" alt="Image" />
          </a>
        </div>
      </div>
    </div>
  </div>
);
export default SimpleSliderSection;
