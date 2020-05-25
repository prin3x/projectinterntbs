import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel'), {
  ssr: false,
});
const SliderSection = () => (
  <div
    className="slider_section"
    style={{ backgroundImage: 'url(img/bg_2.png)' }}
  >
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h3 className="section_title">นำ SMS ไปใช้งานได้หลากหลาย</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <OwlCarousel
            items={4}
            nav
            dots={false}
            autoplay
            autoplayTimeout={5500}
            loop
            navText={[
              '<i class="ion-ios-arrow-back"></i>',
              '<i class="ion-ios-arrow-forward"></i>',
            ]}
            margin={30}
            center
            smartSpeed={2000}
            responsiveClass
            responsive={{
              0: {
                items: 1,
              },
              768: {
                items: 3,
              },
              1000: {
                items: 4,
              },
            }}
          >
            <div className="item">
              <div className="slider_item">
                <h3>ส่ง OTP ยืนยันตัวตน</h3>
                <p>
                  รหัสผ่านแบบใช้ครั้งเดียว เพื่อ เพิ่มความปลอดภัยให้กับการทำ
                  ธุรกรรมทางอินเทอร์เน็ต
                </p>
                <a href="#">การส่ง OTP ต่างจาก SMS ปกติอย่างไร? </a>
              </div>
            </div>
            <div className="item">
              <div className="slider_item">
                <h3>โปรโมตกิจกรรม การตลาด</h3>
                <p>
                  รหัสผ่านแบบใช้ครั้งเดียว เพื่อ เพิ่มความปลอดภัยให้กับการทำ
                  ธุรกรรมทางอินเทอร์เน็ต
                </p>
                <a href="#">การส่ง OTP ต่างจาก SMS ปกติอย่างไร? </a>
              </div>
            </div>
            <div className="item">
              <div className="slider_item">
                <h3>แจ้งสถานะการขนส่ง</h3>
                <p>
                  รหัสผ่านแบบใช้ครั้งเดียว เพื่อ เพิ่มความปลอดภัยให้กับการทำ
                  ธุรกรรมทางอินเทอร์เน็ต
                </p>
                <a href="#">การส่ง OTP ต่างจาก SMS ปกติอย่างไร? </a>
              </div>
            </div>
            <div className="item">
              <div className="slider_item">
                <h3>แจ้งเตือนวัน หมดอายุ</h3>
                <p>
                  รหัสผ่านแบบใช้ครั้งเดียว เพื่อ เพิ่มความปลอดภัยให้กับการทำ
                  ธุรกรรมทางอินเทอร์เน็ต
                </p>
                <a href="#">การส่ง OTP ต่างจาก SMS ปกติอย่างไร? </a>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </div>
    </div>
  </div>
);
export default SliderSection;
