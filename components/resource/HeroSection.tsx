import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, A11y, Autoplay } from 'swiper';
import { format } from 'date-fns'
import { parseFromTimeZone } from 'date-fns-timezone'
import { withTranslation } from '../../i18n';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

SwiperCore.use([Navigation, Pagination, A11y, Autoplay]);
const ContentSection = ({ Posts }: any) => (
  <div
    className="hero_section lazyload"
    data-bgset={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/bg-resource.jpg`}
  >{console.log(Posts)}
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
                  <div className="sliderResource">
                    <div className="imgSlider"><img src={item.cover_image.url} alt={item.name} /></div>
                    <div className="textSlider">
                      <h4>{item.name}</h4>
                      <p>{format(parseFromTimeZone(item.published_at, { timeZone: 'Asia/Bangkok' }), 'dd MMM yyyy')}</p>
                    </div>
                  </div>
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
