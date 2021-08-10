import { withTranslation, Link } from '../../i18n';
import PropTypes from 'prop-types';
import * as React from 'react';

const PricingSection = ({ }: any) => {
    React.useEffect(() => {}, []);
    return (

        <div
            className="pricing-section position-relative pricingB__top lazyload"
            data-bgset={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/bg-pricingB.png`}
        >
            <div className="container pricing">
                <h1 className="headPricing">บริการส่ง SMS ออนไลน์ ราคาถูก<br/><br/>เพียง <span>0.21 บาท/ข้อความ</span></h1>
                <p className="subPricingB">บริการส่งข้อความ SMS ทั้งผ่านเว็บไซต์และ API รองรับครบวงจร<br />ส่งไว มั่นใจได้ในความเสถียร พร้อมให้คำปรึกษาทุกขั้นตอน</p>
                <ul className="btnPriceT">
                    <li>
                        <a
                            href={`${process.env.NEXT_PUBLIC_WEB_URL_ACCOUNT}/register`}
                            className="btn v3"
                        >
                           ทดลองส่งฟรี
                        </a>
                    </li>
                    <li>
                        <Link href="/pricing">
                            <a className="btn v5">
                                ดูราคาแพ็กเกจ
                            </a>
                        </Link>
                    </li>
                </ul>
                <div  className="brandPrice">
                    <div className="imgBrandPrice">
                        <img
                            className="lazyload"
                            data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/logo-brand09.png`}
                            alt="Image"
                        />
                    </div>
                    <div className="imgBrandPrice">
                        <img
                            className="lazyload"
                            data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/logo-brand10.png`}
                            alt="Image"
                        />
                    </div>
                    <div className="imgBrandPrice">
                        <img
                            className="lazyload"
                            data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/logo-brand11.png`}
                            alt="Image"
                        />
                    </div>
                    <div className="imgBrandPrice">
                        <img
                            className="lazyload"
                            data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/logo-brand08.png`}
                            alt="Image"
                        />
                    </div>
                    <div className="imgBrandPrice">
                        <img
                            className="lazyload"
                            data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/logo-brand12.png`}
                            alt="Image"
                        />
                    </div>
                </div>
                <div className="textScroll">
                    <p>ทำไมถึงควรใช้ ThaiBulkSMS</p>
                    <a href="">
                        <img
                            className="lazyload"
                            data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/btnScrollDown.png`}
                            alt="Image"
                        />
                    </a>
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

PricingSection.getInitialProps = async () => ({
    namespacesRequired: ['Pricing'],
});

PricingSection.propTypes = {
    t: PropTypes.func.isRequired,
};
export default withTranslation('Pricing')(PricingSection);
