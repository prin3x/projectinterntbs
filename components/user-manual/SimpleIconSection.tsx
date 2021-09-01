import PropTypes from 'prop-types';
import { withTranslation } from '../../i18n';

const SimpleIconSection = ({ t }: any) => (
    <div
        className="hero_section v3 lazyload"
        data-bgset={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/bg_11.png`}
    >
        <div className="container">
            <div className="row mt-80">
                <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1 col-md-12">
                    <div className="simple_icon_title dev-page edit_seo">
                        <h1 className="edit_text_seo">
                            คู่มือการใช้งาน Web Console
                        </h1>
                        <div className="row mt40-mb20 justify-content-center">
                            <div className="col-lg-4 col-md-6">
                                <div className="track_box apipage">
                                    <img
                                        className="lazyload"
                                        data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icn-aw-userManual02.svg`}
                                        alt="Image"
                                    />
                                    <p>
                                        {/* {t(
                      'SimpleIconSection::Thai Manual'
                    )} */}
                                        Web Console Manual
                                    </p>
                                    <h4>
                                        {t('SimpleIconSection::Thai Manual')}
                                    </h4>
                                    <a
                                        target="_blank"
                                        href={`https://drive.google.com/drive/folders/1BhubCJb1RTzHPz3bp_At5MEkMOpVEwtR?usp=sharing`}
                                    >
                                        {t('SimpleIconSection::[Download]')}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1 col-md-12 m-40">
                    <div className="simple_icon_title dev-page edit_seo">
                        <h1 className="edit_text_seo">
                            วิดีโอสอนใช้งาน
                        </h1>
                        <div className="row m-40 justify-content-start">
                            <div className="col-lg-4 col-md-6 col-xs-12">
                                <div className="track_box apipage">
                                    <div className="VdoPlay">
                                        <img
                                            className="lazyload thumbYoutube"
                                            data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/thumbImage.webp`}
                                            alt="Image"
                                        />
                                        <a href="" className="btnPlay">
                                            <img
                                                className="lazyload thumbYoutube"
                                                data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/play-button.svg`}
                                                alt="Image"
                                            />                                        
                                        </a>
                                    </div>
                                    <p>วิดีโอสอนใช้งาน</p>
                                    <h4>
                                        ส่งข้อความแบบ Excel
                                    </h4>
                                    <a
                                        target="_blank"
                                        href={`https://www.youtube.com/watch?v=LxbxhcxUgUo`}
                                    >
                                        [ดูวีดีโอการสอน]
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-xs-12">
                                <div className="track_box apipage">
                                    <div className="VdoPlay">
                                        <img
                                            className="lazyload thumbYoutube"
                                            data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/thumbImage.webp`}
                                            alt="Image"
                                        />
                                        <a href="" className="btnPlay">
                                            <img
                                                className="lazyload thumbYoutube"
                                                data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/play-button.svg`}
                                                alt="Image"
                                            />                                        
                                        </a>
                                    </div>
                                    <p>วิดีโอสอนใช้งาน</p>
                                    <h4>
                                        วิธีนับเครดิตการใช้งาน
                                    </h4>
                                    <a
                                        target="_blank"
                                        href={`https://www.youtube.com/watch?v=yeBLXOpO4Mc&t=14s`}
                                    >
                                        [ดูวีดีโอการสอน]
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-xs-12">
                                <div className="track_box apipage">
                                    <div className="VdoPlay">
                                        <img
                                            className="lazyload thumbYoutube"
                                            data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/thumbImage.webp`}
                                            alt="Image"
                                        />
                                        <a href="" className="btnPlay">
                                            <img
                                                className="lazyload thumbYoutube"
                                                data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/play-button.svg`}
                                                alt="Image"
                                            />                                        
                                        </a>
                                    </div>
                                    <p>วิดีโอสอนใช้งาน</p>
                                    <h4>
                                        วิธีการชำระเงิน
                                    </h4>
                                    <a
                                        target="_blank"
                                        href={`https://www.youtube.com/watch?v=up5fok4BKmU`}
                                    >
                                        [ดูวีดีโอการสอน]
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-xs-12">
                                <div className="track_box apipage">
                                    <div className="VdoPlay">
                                        <img
                                            className="lazyload thumbYoutube"
                                            data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/thumbImage.webp`}
                                            alt="Image"
                                        />
                                        <a href="" className="btnPlay">
                                            <img
                                                className="lazyload thumbYoutube"
                                                data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/play-button.svg`}
                                                alt="Image"
                                            />                                        
                                        </a>
                                    </div>
                                    <p>วิดีโอสอนใช้งาน</p>
                                    <h4>
                                        วิธีสมัครใช้งาน ThaiBulkSMS
                                    </h4>
                                    <a
                                        target="_blank"
                                        href={`https://www.youtube.com/watch?v=LSEETNZ2kqU`}
                                    >
                                        [ดูวีดีโอการสอน]
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1 col-md-12">
                    <div className="simple_icon_title dev-page edit_seo">
                        <h1 className="edit_text_seo">
                            ต้องการคู่มือ SMS API สำหรับนักพัฒนา?
                        </h1>
                    </div>
                </div>
            </div>
            <div className="row" id="ex_sdk">
                <div className="col-xl-12 btn-api-ref">
                    <a
                        className="btn v3"
                        target="_blank"
                        href={`${process.env.NEXT_PUBLIC_WEB_URL_DEVELOPER}/`}
                    >
                        ดูคู่มือ API
                    </a>
                </div>
            </div>
        </div>
    </div>
);

SimpleIconSection.getInitialProps = async () => ({
    namespacesRequired: ['Developer'],
});

SimpleIconSection.propTypes = {
    t: PropTypes.func.isRequired,
};

export default withTranslation('Developer')(SimpleIconSection);
