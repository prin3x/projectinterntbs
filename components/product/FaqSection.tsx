const FaqSection = () => (
  <div className="faq_section" style={{ backgroundImage: 'url(img/bg_3.png)' }}>
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h2 className="section_title">คำถามที่พบบ่อย</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-6 col-lg-12">
          <div
            className="accordion md-accordion"
            id="accordionEx"
            role="tablist"
            aria-multiselectable="true"
          >
            <div className="card">
              <div className="card-header" role="tab" id="headingOne1">
                <a
                  data-toggle="collapse"
                  data-parent="#accordionEx"
                  href="#collapseOne1"
                  aria-expanded="false"
                  aria-controls="collapseOne1"
                >
                  <span className="close ion-ios-arrow-down"></span>
                  <span className="open ion-ios-arrow-up"></span>
                  <h5 className="mb-0 faq_header">
                    Standard SMS และ Corporate SMS แตกต่างกัน อย่างไร?
                  </h5>
                </a>
              </div>
              <div
                id="collapseOne1"
                className="collapse"
                role="tabpanel"
                aria-labelledby="headingOne1"
                data-parent="#accordionEx"
              >
                <div className="card-body">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Est in obcaecati nulla amet distinctio sapiente, itaque
                    porro, neque at laudantium.
                  </p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header" role="tab" id="headingTwo2">
                <a
                  className="collapsed"
                  data-toggle="collapse"
                  data-parent="#accordionEx"
                  href="#collapseTwo2"
                  aria-expanded="false"
                  aria-controls="collapseTwo2"
                >
                  <span className="close ion-ios-arrow-down"></span>
                  <span className="open ion-ios-arrow-up"></span>
                  <h5 className="mb-0 faq_header">
                    ความยาวของข้อความในการส่ง SMS พิมพ์ได้เยอะ ขนาดไหน?
                  </h5>
                </a>
              </div>
              <div
                id="collapseTwo2"
                className="collapse"
                role="tabpanel"
                aria-labelledby="headingTwo2"
                data-parent="#accordionEx"
              >
                <div className="card-body">
                  <p>
                    {' '}
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Vel maiores quidem animi, rem maxime autem quaerat, facilis
                    porro doloremque aspernatur.
                  </p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header" role="tab" id="headingThree3">
                <a
                  className="collapsed"
                  data-toggle="collapse"
                  data-parent="#accordionEx"
                  href="#collapseThree3"
                  aria-expanded="false"
                  aria-controls="collapseThree3"
                >
                  <span className="close ion-ios-arrow-down"></span>
                  <span className="open ion-ios-arrow-up"></span>
                  <h5 className="mb-0 faq_header">
                    Standard SMS และ Corporate SMS แตกต่างกัน อย่างไร?
                  </h5>
                </a>
              </div>
              <div
                id="collapseThree3"
                className="collapse"
                role="tabpanel"
                aria-labelledby="headingThree3"
                data-parent="#accordionEx"
              >
                <div className="card-body">
                  <p>
                    {' '}
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Harum sed aliquam odit aperiam deleniti quae, rerum dolore
                    voluptate rem aspernatur.
                  </p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header" role="tab" id="headingFour">
                <a
                  className="collapsed"
                  data-toggle="collapse"
                  data-parent="#accordionEx"
                  href="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  <span className="close ion-ios-arrow-down"></span>
                  <span className="open ion-ios-arrow-up"></span>
                  <h5 className="mb-0 faq_header">
                    Standard SMS และ Corporate SMS แตกต่างกัน อย่างไร?
                  </h5>
                </a>
              </div>
              <div
                id="collapseFour"
                className="collapse"
                role="tabpanel"
                aria-labelledby="headingFour"
                data-parent="#accordionEx"
              >
                <div className="card-body">
                  <p>
                    {' '}
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Facere voluptates cum saepe atque fugiat vero commodi eos,
                    neque excepturi deleniti beatae. Laboriosam quam quisquam,
                    similique ipsam eos fugit minima molestias.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-6 col-lg-12">
          <div
            className="accordion md-accordion"
            id="accordionEx2"
            role="tablist"
            aria-multiselectable="true"
          >
            <div className="card">
              <div className="card-header" role="tab" id="headingFive">
                <a
                  data-toggle="collapse"
                  data-parent="#accordionEx2"
                  href="#collapseFive"
                  aria-expanded="false"
                  aria-controls="collapseFive"
                >
                  <span className="close ion-ios-arrow-down"></span>
                  <span className="open ion-ios-arrow-up"></span>
                  <h5 className="mb-0 faq_header">
                    Standard SMS และ Corporate SMS แตกต่างกัน อย่างไร?
                  </h5>
                </a>
              </div>
              <div
                id="collapseFive"
                className="collapse"
                role="tabpanel"
                aria-labelledby="headingFive"
                data-parent="#accordionEx2"
              >
                <div className="card-body">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Dolor eveniet ex officia, assumenda ratione repellendus fuga
                    molestiae sequi delectus ut.
                  </p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header" role="tab" id="heading6">
                <a
                  className="collapsed"
                  data-toggle="collapse"
                  data-parent="#accordionEx2"
                  href="#collapse6"
                  aria-expanded="false"
                  aria-controls="collapse6"
                >
                  <span className="close ion-ios-arrow-down"></span>
                  <span className="open ion-ios-arrow-up"></span>
                  <h5 className="mb-0 faq_header">
                    Standard SMS และ Corporate SMS แตกต่างกัน อย่างไร?
                  </h5>
                </a>
              </div>
              <div
                id="collapse6"
                className="collapse"
                role="tabpanel"
                aria-labelledby="heading6"
                data-parent="#accordionEx2"
              >
                <div className="card-body">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Fugit nam minima illo corporis sed? Laboriosam aperiam odit
                    voluptatem, magnam fugiat?
                  </p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header" role="tab" id="heading7">
                <a
                  className="collapsed"
                  data-toggle="collapse"
                  data-parent="#accordionEx2"
                  href="#collapse7"
                  aria-expanded="false"
                  aria-controls="collapse7"
                >
                  <span className="close ion-ios-arrow-down"></span>
                  <span className="open ion-ios-arrow-up"></span>
                  <h5 className="mb-0 faq_header">
                    Standard SMS และ Corporate SMS แตกต่างกัน อย่างไร?
                  </h5>
                </a>
              </div>
              <div
                id="collapse7"
                className="collapse"
                role="tabpanel"
                aria-labelledby="heading7"
                data-parent="#accordionEx2"
              >
                <div className="card-body">
                  <p>
                    {' '}
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Fugit nam minima illo corporis sed? Laboriosam aperiam odit
                    voluptatem, magnam fugiat?
                  </p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header" role="tab" id="heading8">
                <a
                  className="collapsed"
                  data-toggle="collapse"
                  data-parent="#accordionEx2"
                  href="#collapse8"
                  aria-expanded="false"
                  aria-controls="collapse8"
                >
                  <span className="close ion-ios-arrow-down"></span>
                  <span className="open ion-ios-arrow-up"></span>
                  <h5 className="mb-0 faq_header">
                    Standard SMS และ Corporate SMS แตกต่างกัน อย่างไร?
                  </h5>
                </a>
              </div>
              <div
                id="collapse8"
                className="collapse"
                role="tabpanel"
                aria-labelledby="heading8"
                data-parent="#accordionEx2"
              >
                <div className="card-body">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Fugit nam minima illo corporis sed? Laboriosam aperiam odit
                    voluptatem, magnam fugiat?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row align-items-center mt-80">
        <div className="col-xl-5 col-lg-12">
          <div className="faq_bottom_text">
            <h3>ยังคงมีข้อสงสัย?</h3>
            <p>เลือกช่องทางติดต่อที่คุณสะดวก</p>
          </div>
        </div>
        <div className="col-xl-7 col-12-7">
          <div className="row">
            <div className="col-md-4 col-12">
              <div className="service_feature_item">
                <img src="img/img_1.png" alt="Image" />
                <a href="#" className="btn v4">
                  ติดต่อเจ้าหน้าที่
                </a>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div className="service_feature_item">
                <img src="img/img_2.png" alt="Image" />
                <a href="#" className="btn v4">
                  เจ้าหน้าที่ติดต่อกลับ
                </a>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div className="service_feature_item">
                <img src="img/img_3.png" alt="Image" />
                <a href="#" className="btn v4">
                  Facebook Chat
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default FaqSection;
