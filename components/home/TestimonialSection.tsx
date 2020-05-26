import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel'), {
  ssr: false,
});
const TestimonialSection = () => (
  <div className="testimonial_section">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h3 className="section_title">
            ลูกค้าที่มั่นใจใน <span className="col_one">ThaiBulk</span>{' '}
            <span className="col_two">SMS</span>
          </h3>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-10 offset-lg-1">
          <OwlCarousel
            className="testimonial_slider"
            items={1}
            nav={true}
            dots={false}
            loop={true}
            navText={[
              '<i class="ion-ios-arrow-back"></i>',
              '<i class="ion-ios-arrow-forward"></i>',
            ]}
            margin={30}
            center
            smartSpeed={2000}
            responsiveClass={true}
            responsive={{
              0: {
                items: 1,
              },
              768: {
                items: 1,
              },
              1000: {
                items: 1,
              },
            }}
          >
            <div className="item">
              <div className="testimonial_item">
                <p className="client_quote">
                  “Our teams tell us they’re working together and solving
                  problems much faster, because although they are spread across
                  the globe, Slack makes it like you’re in the same room.”
                </p>
                <div className="client_info">
                  <div className="client_img">
                    <img src="img/client_1.png" alt="Image" />
                  </div>
                  <div className="client_name">
                    <h6>Pam Whitmore</h6>
                    <p>Group manager, IT, Intuit</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="testimonial_item">
                <p className="client_quote">
                  “Our teams tell us they’re working together and solving
                  problems much faster, because although they are spread across
                  the globe, Slack makes it like you’re in the same room.”
                </p>
                <div className="client_info">
                  <div className="client_img">
                    <img src="img/client_1.png" alt="Image" />
                  </div>
                  <div className="client_name">
                    <h6>Pam Whitmore</h6>
                    <p>Group manager, IT, Intuit</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="testimonial_item">
                <p className="client_quote">
                  “Our teams tell us they’re working together and solving
                  problems much faster, because although they are spread across
                  the globe, Slack makes it like you’re in the same room.”
                </p>
                <div className="client_info">
                  <div className="client_img">
                    <img src="img/client_1.png" alt="Image" />
                  </div>
                  <div className="client_name">
                    <h6>Pam Whitmore</h6>
                    <p>Group manager, IT, Intuit</p>
                  </div>
                </div>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 text-center">
          <a href="#" className="btn v6">
            ดูเรื่องราวลูกค้าของเรา
          </a>
        </div>
      </div>
    </div>
  </div>
);
export default TestimonialSection;
