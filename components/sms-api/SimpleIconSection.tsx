import PropTypes from 'prop-types'
import { withTranslation } from '../../i18n'

const SimpleIconSection = ({ t }: any) => (
    <div className="simple_icon_section v2">
        <div className="container">
            <div className="row">
                <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1 col-md-12">
                    <div className="simple_icon_title">
                        <h3>
                            {t('simpleIconSection::SMS API Connection Manual')}
                        </h3>
                    </div>
                </div>
            </div>
            <div className="row m-40">
                <div className="col-lg-6">
                    <div className="track_box apipage">
                        <img
                            className="lazyload"
                            data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icn-aw-api01.png`}
                            alt="Image"
                        />
                        <p>{t('simpleIconSection::SMS API Manual')}</p>
                        <h4>{t('simpleIconSection::Thai Version')}</h4>
                        <a
                            target="_blank"
                            href={`${process.env.NEXT_PUBLIC_BASE_ASSET}/documents/ThaibulksmsAPIDocument_V2.0_TH.pdf`}
                        >
                            {t('simpleIconSection::[Download]')}
                        </a>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="track_box apipage v2">
                        <img
                            className="lazyload"
                            data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icn-aw-api02.png`}
                            alt="Image"
                        />
                        <p>{t('simpleIconSection::SMS API Manual')}</p>
                        <h4>{t('simpleIconSection::English Version')}</h4>
                        <a
                            target="_blank"
                            href={`${process.env.NEXT_PUBLIC_BASE_ASSET}/documents/ThaibulksmsAPIDocument_V2.0_EN.pdf`}
                        >
                            {t('simpleIconSection::[Download]')}
                        </a>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1 col-md-12">
                    <div className="simple_icon_title">
                        <h3>
                            {t(
                                'simpleIconSection::Connect to SMS API in a variety of languages.'
                            )}
                        </h3>
                        <p>
                            {t(
                                'simpleIconSection::Download the SDK example in the language that you require.'
                            )}
                        </p>
                    </div>
                </div>
            </div>
            <div className="row single_lang_wrap">
                <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
                    <div className="row ">
                        <div className="col-lg-4 col-md-4 col-4">
                            <div className="single_lang">
                                <img
                                    className="lazyload"
                                    data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icn-api01.svg`}
                                    alt="Image"
                                />
                            </div>
                        </div>
                        {/* <div className="col-lg-4 col-md-4 col-4">
              <div className="single_lang">
                <img
                  className="lazyload"
                  data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icn-api02.svg`}
                  alt="Image"
                />
              </div>
            </div> */}
                        <div className="col-lg-4 col-md-4 col-4">
                            <div className="single_lang">
                                <img
                                    className="lazyload"
                                    data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icn-api03.svg`}
                                    alt="Image"
                                />
                            </div>
                        </div>
                        {/* <div className="col-lg-4 col-md-4 col-4">
              <div className="single_lang">
                <img
                  className="lazyload"
                  data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icn-api04.svg`}
                  alt="Image"
                />
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-4">
              <div className="single_lang">
                <img
                  className="lazyload"
                  data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icn-api05.svg`}
                  alt="Image"
                />
              </div>
            </div> */}
                        <div className="col-lg-4 col-md-4 col-4">
                            <div className="single_lang">
                                <img
                                    className="lazyload"
                                    data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icn-api06.svg`}
                                    alt="Image"
                                />
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-4">
                            <div className="single_lang">
                                <img
                                    className="lazyload"
                                    data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icn-api07.svg`}
                                    alt="Image"
                                />
                            </div>
                        </div>
                        {/* <div className="col-lg-4 col-md-4 col-4">
              <div className="single_lang">
                <img
                  className="lazyload"
                  data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icn-api08.svg`}
                  alt="Image"
                />
              </div>
            </div> */}
                        <div className="col-lg-4 col-md-4 col-4">
                            <div className="single_lang">
                                <img
                                    className="lazyload"
                                    data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icon-langGO.svg`}
                                    alt="Image"
                                />
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-4">
                            <div className="single_lang">
                                <img
                                    className="lazyload"
                                    data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icon-lang11.svg`}
                                    alt="Image"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-12 text-center">
                    <a
                        className="lang_link"
                        target="_blank"
                        href="/developer/#ex_sdk"
                    >
                        {t(
                            'simpleIconSection::Download an additional code example'
                        )}
                        <img
                            className="lazyload"
                            data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/arrow_5.png`}
                            alt="Image"
                        />
                    </a>
                </div>
            </div>
        </div>
    </div>
)

SimpleIconSection.getInitialProps = async () => ({
    namespacesRequired: ['SMSAPIPage'],
})

SimpleIconSection.propTypes = {
    t: PropTypes.func.isRequired,
}

export default withTranslation('SMSAPIPage')(SimpleIconSection)
