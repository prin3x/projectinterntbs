import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, A11y, Autoplay } from 'swiper';
import { format } from 'date-fns'
import { parseFromTimeZone } from 'date-fns-timezone'
import Link from 'next/link'
import { withTranslation } from '../../i18n';
import AppConfig from '../../appConfig';
// Import Swiper styles


SwiperCore.use([Navigation, Pagination, A11y, Autoplay]);
const ContentSection = ({ Posts }: any) => (
  <div
    className="hero_section lazyload"
    data-bgset={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/bg-resource.jpg`}
  >
    <div className="container">
      <div className="row justify-content-center hero_top_one">
        <div className="col-12 text-center">
          <h3 className="section__title">คลังข้อมูล</h3>
          <div className="secSliderResource">
            <Swiper

              spaceBetween={50}
              slidesPerView={1}
              // pagination={true}
              autoplay={{
                delay: 7000
              }}
              loop={true}
              navigation={true}
              pagination={true}
            // scrollbar={{ draggable: true }}
            // onSwiper={(swiper) => console.log(swiper)}
            // onSlideChange={() => console.log('slide change')}
            >
              {!Posts.highligth || Posts.highligth.map((item, key) => {
                return <SwiperSlide key={key}>
                  <Link href={`${AppConfig.WEB_URL_BLOG}/post/[slug]`} as={`${AppConfig.WEB_URL_BLOG}/post/${item.slug}`}>
                    <a>
                      <div className="sliderResource">
                        <div className="imgSlider"><img src={item.banner_image_top.url} alt={item.name} /></div>
                        <div className="textSlider">
                          <h4>{item.name}</h4>
                          <p>{format(parseFromTimeZone(item.published_at, { timeZone: 'Asia/Bangkok' }), 'dd MMM yyyy')}</p>
                        </div>
                      </div>
                    </a>
                  </Link>
                </SwiperSlide>;
              })}
            </Swiper>


          </div>
        </div>
      </div>
    </div>
  </div>
);

ContentSection.getInitialProps = async () => ({
  namespacesRequired: ['ContentSection'],
});

ContentSection.propTypes = {
  t: PropTypes.func.isRequired,
};
export default withTranslation('ContentSection')(ContentSection);
