import { withTranslation } from '../../i18n';
import PropTypes from 'prop-types';
const ContentSection = ({  }: any) => (
  <div className="resource_section">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-12">
          <div className="secKnowledge">
           <div className="headSection">
              <h3>ความรู้</h3>
              <a href="">ดูทั้งหมด</a>
            </div>
            <div className="Knowledge">
              <div className="secArticle">
                <div className="img-article">

                </div>
                <div className="text-article">
                  <h4>ห้ามพลาด!! เทรนด์การตลาด ปี 2020</h4>
                  <p>20-04-2020</p>
                </div>
              </div>
              <div className="secArticle">
                <div className="img-article">

                </div>
                <div className="text-article">
                  <h4>ห้ามพลาด!! เทรนด์การตลาด ปี 2020</h4>
                  <p>20-04-2020</p>
                </div>
              </div>
              <div className="secArticle">
                <div className="img-article">

                </div>
                <div className="text-article">
                  <h4>ห้ามพลาด!! เทรนด์การตลาด ปี 2020</h4>
                  <p>20-04-2020</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col-lg-6 col-md-12">
          <div className="secUsecase">
            <div className="headSection">
              <h3>ตัวอย่างการใช้งาน</h3>
              <a href="">ดูทั้งหมด</a>
            </div>
            <div className="hilight">
              <div className="img-hilight">

              </div>
              <div className="text-hilight">
                <h4>ห้ามพลาด!! เทรนด์การตลาด ปี 2020</h4>
                <p>20-04-2020</p>
              </div>
            </div>
            <div className="secArticle">
               <div className="img-article">

              </div>
              <div className="text-article">
                <h4>ห้ามพลาด!! เทรนด์การตลาด ปี 2020</h4>
                <p>20-04-2020</p>
              </div>
            </div>
            <div className="secArticle">
               <div className="img-article">

              </div>
              <div className="text-article">
                <h4>ห้ามพลาด!! เทรนด์การตลาด ปี 2020</h4>
                <p>20-04-2020</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-12">
        <div className="secUsecase">
            <div className="headSection">
              <h3>เรื่องราวความสำเร็จ</h3>
              <a href="">ดูทั้งหมด</a>
            </div>
            <div className="hilight">
              <div className="img-hilight">

              </div>
              <div className="text-hilight">
                <h4>ห้ามพลาด!! เทรนด์การตลาด ปี 2020</h4>
                <p>20-04-2020</p>
              </div>
            </div>
            <div className="secArticle">
               <div className="img-article">

              </div>
              <div className="text-article">
                <h4>ห้ามพลาด!! เทรนด์การตลาด ปี 2020</h4>
                <p>20-04-2020</p>
              </div>
            </div>
            <div className="secArticle">
               <div className="img-article">

              </div>
              <div className="text-article">
                <h4>ห้ามพลาด!! เทรนด์การตลาด ปี 2020</h4>
                <p>20-04-2020</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
ContentSection.getInitialProps = async () => ({
  namespacesRequired: ['ResourceSection'],
});

ContentSection.propTypes = {
  t: PropTypes.func.isRequired,
};
export default withTranslation('ResourceSection')(ContentSection);
