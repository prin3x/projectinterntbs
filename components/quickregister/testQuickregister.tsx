import PropTypes from 'prop-types';
import React from 'react';

import { withTranslation } from '../../i18n';

import QuickRegisger from '../popup/QuickRegister';

const TestQuickregister = ({ t }: any) => {
    return (
        <>
            <div className="row">
                <div className="col-md-12">
                    <div className="sms_form">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <div className="sms_form_text">
                                    <h4>
                                        {t(
                                            'SmsSection::TestQuickregister::Try sending an SMS to your mobile phone now.'
                                        )}
                                    </h4>
                                    <p>
                                        เพียงกรอกเบอร์มือถือของคุณ
                                        และข้อความที่คุณต้องการ
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <div className="sms_form_field">
                                    <QuickRegisger />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

TestQuickregister.getInitialProps = async () => ({
    namespacesRequired: ['Home'],
});

TestQuickregister.propTypes = {
    t: PropTypes.func.isRequired,
};
export default withTranslation('Home')(TestQuickregister);
