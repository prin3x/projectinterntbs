import PropTypes from 'prop-types';
import * as React from 'react';
import { withTranslation } from '../../i18n';

const HeroSection = ({ t }: any) => {
    React.useEffect(() => {}, []);
    return (
        <div className="container condition-wrap">
            <h1 className="condition-header textHeadCondition">
                {t('cookiepolicyhero::header')}{' '}
                <span style={{ display: 'none' }}>....</span>
            </h1>

            <div className="col-lg-12">
                <div className="condition-text">
                    <span
                        style={{
                            display: 'block',
                            textIndent: '24px',
                            marginBottom: '14px',
                        }}
                        dangerouslySetInnerHTML={{
                            __html: t('cookiepolicyhero::section_1::content_1'),
                        }}
                    ></span>
                    <span
                        style={{
                            display: 'block',
                            textIndent: '24px',
                            marginBottom: '14px',
                        }}
                        dangerouslySetInnerHTML={{
                            __html: t('cookiepolicyhero::section_1::content_2'),
                        }}
                    ></span>
                    <span
                        style={{
                            display: 'block',
                            textIndent: '24px',
                            marginBottom: '14px',
                        }}
                        dangerouslySetInnerHTML={{
                            __html: t('cookiepolicyhero::section_1::content_3'),
                        }}
                    ></span>
                </div>
            </div>
        </div>
    );
};

HeroSection.getInitialProps = async () => ({
    namespacesRequired: ['CookiePolicy'],
});

HeroSection.propTypes = {
    t: PropTypes.func.isRequired,
};
export default withTranslation('CookiePolicy')(HeroSection);
