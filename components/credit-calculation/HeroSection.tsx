import { withTranslation } from '../../i18n';
import PropTypes from 'prop-types';
import * as React from 'react';

const CalCreditSection = ({ }: any) => {
    React.useEffect(() => {}, []);
    return (

        <div
            className="pricing-section position-relative bgCalCredit-top lazyload"
            data-bgset={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/bg-CalCredit.png`}
        >
            <div className="container pricing">
                <h1 className="headPricing">การคำนวณเครดิต</h1>
                <p className="subPricingB calCredit">ThaiBulkSMS คำนวณเครดิตจาก จำนวนตัวอักษร ในข้อความที่ส่งไปหาแต่ละเบอร์ผู้รับ<br />โดยข้อความภาษาไทยและภาษาอังกฤษ จะมีข้อกำหนดที่แตกต่างกัน</p>
                <div className="secCaltext">
                    <div className="caltextTH">
                        <p>ข้อความภาษาไทย</p>
                        <p className="textCount">70 ตัวอักษร</p>
                        <p>คิดเป็น 1 เครดิต</p>
                    </div>
                    <div className="caltextEN">
                        <p>ข้อความภาษาอังกฤษ</p>
                        <p className="textCount">160 ตัวอักษร</p>
                        <p>คิดเป็น 1 เครดิต</p>
                    </div>
                </div>
                
                <div className="textNote">
                    <p>หมายเหตุและข้อควรระวัง</p>
                    <ul>
                        <li>ในกรณีที่พิมพ์ภาษาไทยปนภาษาอังกฤษ ระบบจะใช้การนับแบบภาษาไทย</li>
                        <li>หากใช้อักขระพิเศษที่อยู่ในแป้นภาษาไทย เครดิตจะถูกนับแบบภาษาไทย</li>
                    </ul>
                </div>
            </div>

            <img
                className="img-fluid bg__img img__1 lazyload"
                data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/img_25.png`}
                alt=""
            />
            <img
                className="img-fluid bg__img img__2 lazyload"
                data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/img__11.png`}
                alt=""
            />
        </div>
    );
};

CalCreditSection.getInitialProps = async () => ({
    namespacesRequired: ['CalCredit'],
});

CalCreditSection.propTypes = {
    t: PropTypes.func.isRequired,
};
export default withTranslation('CalCredit')(CalCreditSection);