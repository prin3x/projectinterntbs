import PropTypes from 'prop-types';
import { withTranslation } from '../../i18n';
const SimpleIconSection = ({ t }: any) => (
    <div className="simple_icon_section v2">
        <div className="container">
            <div className="row">
                <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1 col-md-12">
                    <div className="simple_icon_title">
                        <h3>{t('DesSection::mardessec1')}</h3>
                    </div>
                </div>
            </div>
            <div className="row m-80">
                <div className="col-lg-3">
                    <div className="track_box productBox">
                        <img
                            className="lazyload col4"
                            data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icn-market01.png`}
                            alt="Image"
                        />
                        <p className="col4">{t('DesSection::mardessec2')}</p>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="track_box productBox v2">
                        <img
                            className="lazyload col4"
                            data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icn-market02.png`}
                            alt="Image"
                        />
                        <p className="col4">{t('DesSection::mardessec3')}</p>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="track_box productBox">
                        <img
                            className="lazyload col4"
                            data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icn-market03.png`}
                            alt="Image"
                        />
                        <p className="col4">{t('DesSection::mardessec4')}</p>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="track_box productBox v2">
                        <img
                            className="lazyload col4"
                            data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icn-market04.png`}
                            alt="Image"
                        />
                        <p className="col4">{t('DesSection::mardessec5')}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
SimpleIconSection.getInitialProps = async () => ({
    namespacesRequired: ['Sms-marketing'],
});

SimpleIconSection.propTypes = {
    t: PropTypes.func.isRequired,
};
export default withTranslation('Sms-marketing')(SimpleIconSection);
