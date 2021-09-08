import PropTypes from 'prop-types';
import { withTranslation } from '../../i18n';
import axios from 'axios';
import appConfig from '../../appConfig';
import { useEffect, useState } from 'react';

interface thumbnailsType {
    url: string;
    width: number;
    height: number;
}

interface videoType {
    title: string;
    thumbnails: {
        default: thumbnailsType;
        high: thumbnailsType;
        medium: thumbnailsType;
        standard: thumbnailsType;
    };
    resourceId: {
        kind: string;
        videoId: string;
    };
}

const SimpleIconSection = ({ t }: any) => {
    const [playlist, setPlaylist] = useState<videoType[]>([]);

    useEffect(() => {
        fetchVideo();
    }, []);

    const fetchVideo = async () => {
        const YOUTUBE_PLAYLIST_ITEMS_API =
            'https://www.googleapis.com/youtube/v3/playlistItems';
        const id = 'PL-GJzmQoXm4gx1QyWKwc8E34lVtNmCFPA';
        const endpoint = `${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&playlistId=${id}&key=${appConfig.YOUTUBE_API_KEY}&maxResults=50`;

        try {
            const chunkRes = await axios.get(endpoint);
            const playlist: videoType[] = [];
            chunkRes.data.items.map((item) => {
                const { title, thumbnails, resourceId } = item.snippet;
                playlist.push({ title, thumbnails, resourceId });
            });

            setPlaylist(playlist);
        } catch (error) {
            console.log(error);
        }
    };

    const renderVideo = () => {
        return playlist.map(({ resourceId, thumbnails, title }) => {
            return (
                <div className="col-lg-4 col-md-6 col-xs-12">
                    <div className="track_box apipage">
                        <div className="VdoPlay">
                            <img
                                className="lazyload thumbYoutube"
                                // data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/thumbImage.webp`}
                                data-src={`${thumbnails.medium.url}`}
                                alt="Image"
                            />
                            <a
                                href={`https://www.youtube.com/watch?v=${resourceId.videoId}`}
                                className="btnPlay"
                                target="_blank"
                            >
                                <img
                                    className="lazyload thumbYoutube"
                                    data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/play-button.svg`}
                                    alt="Image"
                                />
                            </a>
                        </div>
                        <p>วิดีโอสอนใช้งาน</p>
                        <h4>{title}</h4>
                        <a
                            target="_blank"
                            href={`https://www.youtube.com/watch?v=${resourceId.videoId}`}
                        >
                            [ดูวีดีโอการสอน]
                        </a>
                    </div>
                </div>
            );
        });
    };

    return (
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
                                            {t(
                                                'SimpleIconSection::Thai Manual'
                                            )}
                                        </h4>
                                        <a
                                            target="_blank"
                                            href={`${process.env.NEXT_PUBLIC_BASE_ASSET}/documents/ThaibulkSMSApiManual.pdf`}
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
                            <h2 className="edit_text_seo">วิดีโอสอนใช้งาน</h2>
                            <div className="row m-40 justify-content-start">
                                {renderVideo()}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1 col-md-12">
                        <div className="simple_icon_title dev-page edit_seo">
                            <h2 className="edit_text_seo">
                                ต้องการคู่มือ SMS API สำหรับนักพัฒนา?
                            </h2>
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
};

SimpleIconSection.getInitialProps = async () => ({
    namespacesRequired: ['Developer'],
});

SimpleIconSection.propTypes = {
    t: PropTypes.func.isRequired,
};

export default withTranslation('Developer')(SimpleIconSection);
