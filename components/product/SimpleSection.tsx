import { withTranslation } from '../../i18n';
import PropTypes from 'prop-types';
const SimpleSection = ({ t }: any) => (
    <div
        className="simple_section lazyload"
        data-bgset={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/bg_4.png`}
    >
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h2 className="simple_title">
                        {t(
                            'SimpleSection::Complete set of basic features for SMS sending'
                        )}
                    </h2>
                </div>
                <div className="col-md-12">
                    <ul className="simple_feature_list">
                        <li>
                            <i className="far fa-check-circle"></i>
                            <p>
                                {t(
                                    'SimpleSection::Sending results can be checked instantly.'
                                )}
                            </p>
                        </li>
                        <li>
                            <i className="far fa-check-circle"></i>
                            <p>
                                {t(
                                    'SimpleSection::Maximum allowance of 5 messages being sent consecutively'
                                )}
                            </p>
                        </li>
                        <li>
                            <i className="far fa-check-circle"></i>
                            <p>
                                {t(
                                    'SimpleSection::Various ways of setting the time of sending'
                                )}
                            </p>
                        </li>
                        <li>
                            <i className="far fa-check-circle"></i>
                            <p>
                                {t(
                                    'SimpleSection::Detailed reports of sending are provided.'
                                )}
                            </p>
                        </li>
                        <li>
                            <i className="far fa-check-circle"></i>
                            <p>
                                {t(
                                    'SimpleSection::The sender’s name can be specified.'
                                )}
                            </p>
                        </li>
                        <li>
                            <i className="far fa-check-circle"></i>
                            <p>
                                {t(
                                    'SimpleSection::The sending status is clearly specified.'
                                )}
                            </p>
                        </li>
                        <li>
                            <i className="far fa-check-circle"></i>
                            <p>{t('SimpleSection::Block list system')}</p>
                        </li>
                        <li>
                            <i className="far fa-check-circle"></i>
                            <p>{t('SimpleSection::Phonebook')}</p>
                        </li>
                        <li>
                            <i className="far fa-check-circle"></i>
                            <p>{t('SimpleSection::Templates are provided.')}</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
);
SimpleSection.getInitialProps = async () => ({
    namespacesRequired: ['Product'],
});

SimpleSection.propTypes = {
    t: PropTypes.func.isRequired,
};
export default withTranslation('Product')(SimpleSection);
