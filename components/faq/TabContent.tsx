import { withTranslation } from '../../i18n';
import PropTypes from 'prop-types';
import React from 'react';
import ProductFaqSection from './FaqSection'

import CollapseItem from './CollapseItem';

const listItemSMS = [
  { question: 'สามารถทดลองส่ง SMS ได้หรือไม่', answer: 'เบื้องต้นลูกค้าสามารถสมัครทดลองได้ที่เว็บไซต์  <a href="https://account.thaibulksms.com/register/">https://account.thaibulksms.com/register/</a>  โดยต้องกรอกข้อมูลให้ครบถ้วนเพื่อรับฟรี SMS 20 เครดิต โดยแบ่งเป็นเครดิตประเภท Standard 10 เครดิต และเครดิตประเภท Corporate 10 เครดิต' },
  { question: 'อยากทราบจำนวนตัวอักษรและข้อกำหนด ที่สามารถพิมพ์ได้ต่อ 1 ข้อความ', answer: '<span>ภาษาไทย 70 ตัวอักษร คิด 1 เครดิต</span> (1 ข้อความ) / หมายเลข , ระหว่าง 71-134 ตัวอักษร คิด 2 เครดิต (2 ข้อความต่อกัน) / หมายเลข , ระหว่าง 135 - 201 ตัวอักษร คิด 3 เครดิต (3 ข้อความต่อกัน) / หมายเลข<br /><br /><span>ภาษาอังกฤษ 160 ตัวอักษร คิด 1 เครดิต</span> (1 ข้อความ) / หมายเลข , ระหว่าง 161 - 306 ตัวอักษร คิด 2 เครดิต (2 ข้อความ) / หมายเลข , ระหว่าง 307 - 459 ตัวอักษร คิด 3 เครดิต (3 ข้อความ) / หมายเลข<br /><br />* ในกรณีที่พิมพ์ภาษาไทยปนภาษาอังกฤษ ระบบจะใช้การนับ แบบภาษาไทย<br />* ข้อควรระวัง หากการส่งภาษาอังกฤษ ใช้อักขระพิเศษที่อยู่ในแป้นภาษาไทย เครดิตจะถูกนับเป็นแบบ ภาษาไทย' },
  { question: 'ความแตกต่างระหว่างแพ็คแกจ Standard SMS และ Corporate SMS คืออะไร', answer: '<span>Standard SMS</span>	ให้คุณได้ส่ง SMS ในราคาถูก ส่งง่าย ดูรายงานการส่งได้ และสามารถใช้งานฟีเจอร์พื้นฐานได้ครบถ้วน<br /><br /><span>Corporate SMS</span>	ส่ง SMS ด้วยฟีเจอร์ที่ตอบโจทย์ธุรกิจ พร้อมคืนเครดิตถ้าส่งไม่ถึงผู้รับ มีเครื่องมือวัดผลเคมเปญและมีรายงานการส่งได้ละเอียดยิ่งกว่า พร้อมส่ง OTP Ready to use ได้' },
  { question: 'หากต้องการใช้ Standard SMS และ Corporate SMS ควบคู่กันสามารถทำได้หรือไม่', answer: 'สามารถใช้งานพร้อมกันได้ โดยคิดเครดิตแยกกัน<br /><br /><span>สำหรับ ส่งข้อความผ่านหน้าเว็บ</span> สามารถสลับแพ็กเกจได้ตรงเมนูขวาบนในหน้า <a href="https://member.thaibulksms.com/">https://member.thaibulksms.com/</a><br /><br /><span>สำหรับ ส่งข้อความผ่าน API</span> ส่ง parameter &force=standard เพื่อบังคับให้รายการส่งนั้นให้เป็นแบบ standard และใช้ &force=premium สำหรับบังคับให้ข้อความนั้นส่งแบบ Corporate' },
  { question: 'สามารถพิมพ์ส่งได้กี่ข้อความใน 1 ครั้ง', answer: 'หากส่งผ่านหน้าเว็บไซด์จะได้สูงสุด 3 ข้อความ และส่งผ่าน API จะได้สูงสุด 5 ข้อความ' },
  { question: 'การขอ Sender Name ในนามของลูกค้าสามารถทำได้ไหม', answer: 'หากต้องการตั้ง Sender Name หรือชื่อผู้ส่งเป็นชื่อของลูกค้าเอง ลูกค้าจะต้องสั่งซื้อแพ็กเกจตั้งแต่ราคา 3,500 บาทขึ้นไป และจำนวน Sender Name จะขึ้นอยู่กับแพ็กเกจ ตามรายละเอียดดังนี้ <a href="https://www.thaibulksms.com/pricing">https://www.thaibulksms.com/pricing</a>' },
  { question: 'ระยะเวลาการขอ Sender Name  กี่วัน', answer: 'การอนุมัติการตั้งชื่อ Sender Name หรือชื่อผู้ส่ง จะมีระยะเวลา 5-7 วันทำการ ในระหว่างรอ ลูกค้าสามารถใช้ Sender Name เบื้องต้นที่ทางThaiBulkSMS มีให้ เช่น SMS. DEMO WELCOME เป็นต้น' },
  { question: 'การขอ Sender Name มีขั้นตอนอย่างไรบ้าง', answer: '1. ทำการ Login จากนั้นไปที่ชื่อผู้ส่ง<br />2. กรอกฟอร์มให้ครบถ้วน แล้วกดยืนยัน<br />**รอ 5-7 วัน เมื่อชื่อ Sender Name ของคุณได้รับการยืนยันแล้ว จะมีเจ้าหน้าที่ส่งอีเมลแจ้งคุณทันที' },
  { question: 'เงื่อนไขการตั้งชื่อ Sender Name  มีอะไรบ้าง', answer: '<span>มีเงื่อนไขดังนี้</span><br /><br />- เป็นตัวเลขหรือภาษาอังกฤษ ตั้งแต่4 ตัวอักษร รวมกันไม่เกิน 10 ตัวอักษร<br />- เป็นตัวเลข / ภาษาอังกฤษและอักขระพิเศษ ตั้งแต่4 ตัวอักษร รวมกันไม่เกิน 10 ตัวอักษร<br /><br />* อักขระพิเศษที่สามารถใช้งานได้คือ . (dot) - (Hyphen) และ _ (underscore)<br />* ไม่สามารถใช้ Spapcebar ได้<br />* ไม่สามารถใช้ ภาษาไทย ได้' },
  { question: 'หากเคยขอชื่อผู้ส่งกับผู้ให้บริการรายอื่น  ชื่อผู้ส่งนั้นจะสามารถใช้งานกับ ThaiBulkSMS ได้หรือไม่', answer: 'เบื้องต้นทางเราสามารถแจ้งขอชื่อผู้ส่งก่อนได้ แต่หากในเครือข่ายแจ้งว่าชื่อซ้ำและไม่สามารถเพิ่มเข้าระบบได้ ทางเราจะขอเอกสารยืนยันจากทางคุณลูกค้า เพื่อขอให้ทางเครือข่าย ไปยกเลิกที่เก่าเสียก่อน' },
  { question: 'สามารถตั้งชื่อผู้ส่งเองได้ไหม กรณีที่ใช้บริการ OTP', answer: 'กรณีที่ลูกค้าเขียนโปรแกรม OTP ขึ้นมาเอง จะสามารถกำหนดชื่อผู้ส่งเองได้ผ่าน API แต่หากลูกค้าใช้บริการ OTP Ready to use ของทาง ThaiBulkSMS จะไม่สามารถเปลี่ยนชื่อผู้ส่งเองได้' },
  { question: 'ทุกครั้งที่ทำ OTP Ready to use จะนับเป็น sms กี่ครั้ง', answer: 'ทุกครั้งที่ทำ OTP Ready to use จะนับเป็น 1 sms หรือ 1 เครดิต แต่ถ้าส่งไม่ถึงจะทำการคืนเครดิต' },
  { question: 'สามารถส่ง SMS ไปยังต่างประเทศได้หรือไม่', answer: 'เราให้บริการส่ง SMS ไปต่างประเทศที่ครอบคลุม 200 ประเทศ สามารถสอบถามอัตราค่าบริการหรือรายละเอียดเพิ่มเติม ได้ที่ <a href="mailto:contact@thaibulksms.com">contact@thaibulksms.com</a> หรือโทร. <a href="tel:027986000">0-2798-6000</a>' }
]

const listItemshopping = [
  { question: 'แพ็กเกจของ ThaiBulkSMS มีแบบไหนบ้าง', answer: 'แพ็กเกจมีทั้งหมด 2 แบบ คือ Standard SMS และ Corporate SMS ลูกค้าสามารถเลือกได้ตามการใช้งาน ซึ่งราคาแพ็กเกจจะเริ่มต้นที่ 1,500 บาท สามารถดูรายละเอียดแพ็กเกจทั้งหมดได้ ตามลิ้งนี้  <a href="http://thaibulksms.com/pricing">http://thaibulksms.com/pricing</a>' },
  { question: 'สามารถชำระเงินได้ด้วยวิธีใดบ้าง', answer: '<span>การชำระเงินสามารถทำง่าย ๆ เพียง</span><br />1. เลือกแพ็กเกจได้ที่หน้าราคา  <a href="https://www.thaibulksms.com/pricing">https://www.thaibulksms.com/pricing</a><br />2. เลือกช่องทางการชำระเงิน โอนเงินผ่านทางบัญชีธนาคาร ชำระออนไลน์ด้วยการตัดบัตรเครดิต หรือแสกน QR Code<br /><br />** ในกรณีที่โอนเงินผ่านทางบัญชีธนาคาร จะต้องทำการยืนยันการโอนเงินที่หน้าเว็บด้วยทุกครั้ง' },
  { question: 'หลังจากโอนเงินชำระค่าบริการเรียบร้อยแล้ว สามารถแจ้งหลักฐานการโอนเงินผ่านช่องทางใดได้บ้าง', answer: 'ลูกค้าสามารถแจ้งผ่านทางหน้าเว็บไซต์ได้ทันที หลังจาก log in จะมีแถบบาร์ด้านบนที่ขึ้นว่า <span>"การเติมเครดิต"</span> ให้เอาเมาส์ไปวาง จะมีขึ้นว่า <span>"แจ้งยืนยันการชำระเงิน"</span><br /><br />กดเข้าไปแจ้งหลักหลักฐาน พร้อมแนบสลิปหลักฐานการโอนเข้ามา รอประมาณ 1 ชม. ระบบจะทำการเติมเครดิตให้ทันที' },
  { question: 'ต้องการขอใบกำกับภาษี ต้องทำอย่างไร', answer: 'สามารถทำได้ โดยการส่ง ชื่อ Username และรายละเอียดบริษัท พร้อม ชื่อ ที่อยู่ หมายเลขประจำตัวผู้เสียภาษีที่ต้องการ จัดส่งมาทาง E-mail : <a href="mailto:contact@thaibulksms.com">contact@thaibulksms.com</a>' }
]

const listItemAPI = [
  { question: 'การใช้งาน SMS กับ ThaiBulkSMS สามารถรองรับได้กี่ภาษา', answer: 'สามารถรองรับได้ทุกภาษา เช่น PHP Javascript Python และอื่น ๆ ตามละเอียดดังนี้ <a href="https://developer.thaibulksms.com/reference" target="_blank">https://developer.thaibulksms.com/reference</a>' },
  { question: 'การใช้งาน OTP Ready to use มีขั้นตอนยังไงบ้าง', answer: 'สามารถรองรับได้ทุกภาษา เช่น PHP Javascript Python และอื่น ๆ ตามละเอียดดังนี้ <a href="https://developer.thaibulksms.com/reference" target="_blank">https://developer.thaibulksms.com/reference</a>' },
  { question: 'ความเร็ว Success Rate ทั้ง Standard SMS กับ Corporate SMS ต่างกันหรือไม่', answer: 'ไม่แตกต่างกัน โดยจะเป็นการส่งข้อความด้วย Gateway ที่ดีที่สุดของเราเหมือนกัน' },
  { question: 'OTP จะสามารถส่งเข้าทุกเบอร์หรือไม่ แม้กระทั่งผู้ใช้งานมีการบล็อค SMS ไว้', answer: 'ถ้าลูกค้าใช้งาน <span>OTP Ready to use</span>  สามารถส่งไปยังทุกเบอร์ได้ เพราะทางเราได้เปิดบริการ <span>Whitelist</span> ไว้ให้อัตโนมัติแล้ว แต่ถ้าส่งผ่านการเขียนโปรแกรม OTP ของทางลูกค้าเอง ชื่อ sender name ของทางลูกค้าจะต้องแจ้งขอ <span>Whitelist</span> เพิ่มเติมก่อน เพื่อให้ส่งผ่านไปยังเบอร์ที่แจ้งบล็อคไว้ได้' },
  { question: 'กรณีเจอ Anti-Spam หมายเลขปลายทางได้แจ้งเครือข่ายงดรับข้อความผ่านช่องทางนี้ สามารถแก้ไขปัญหาอย่างไรได้บ้าง', answer: 'ท่านสามารถติดต่อขอรับแบบฟอร์มขอชื่อผู้ส่ง <span>Whitelist</span> เพื่อให้ทางเราประสานกับทางเครือข่ายให้ได้ ทั้งนี้เครือข่ายจะเป็นผู้พิจารณา ว่าชื่อดังกล่าวสามารถใช้งานแบบ <span>Whitelist</span> ได้หรือไม่' },
  { question: 'ในกรณีที่ปลายทางปิดเครื่อง ข้อความจะถูกส่งไปหรือไม่', answer: 'ระบบจะมีบริการ<span>ส่งข้อความซ้ำอัตโนมัติ (Auto Resend)</span> ให้จนกว่าเครื่องปลายทางจะทำการเปิดเครื่อง แต่ถ้าสถานะการส่งได้ขึ้นในรายงานแล้วนั้นจะหมายความว่าระบบได้สิ้นสุดการ Resend แล้ว แต่ถ้าใช้แพ็กเกจแบบ Standard SMS จะไม่สามารถตรวจสอบตรงนี้ได้ ' },
]

const TabContent = ({ t }: any) => {
  const [, setTab] = React.useState<any>();
  React.useEffect(() => {
    setTab($('#pills-profile-tab'));
    // }, [tab]);
  }, []);

  return (
    <div
      className="tab__content faq_section lazyload"
      data-bgset={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/bg_3.png`}
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="tab-content" id="pills-tabContent">
              <div
                className="tab-pane fade show active second__tab"
                id="pills-sms"
                role="tabpanel"
              >
                <div className="row">
                  <div className="col-lg-12">
                    <h3 className="faqHead">{t('คำถามทั่วไป')}</h3>
                    <div
                      className="accordion md-accordion"
                      id="accordionEx1"
                      role="tablist"
                      aria-multiselectable="true"
                    >

                      {listItemSMS.map((value, key) => {
                        return <CollapseItem item={{ ...value, index: key + 1, type: "typeSms", keyId: '#accordionEx1' }} key={key + 1} />
                      })}
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade second__tab"
                id="pills-shopping"
                role="tabpanel"
              >
                <div className="row">
                  <div className="col-lg-12">
                    <h3 className="faqHead">การซื้อและการชำระเงิน</h3>
                    <div
                      className="accordion md-accordion"
                      id="accordionEx4"
                      role="tablist"
                      aria-multiselectable="true"
                    >

                      {listItemshopping.map((value, key) => {
                        return <CollapseItem item={{ ...value, index: key + 1, type: "shopping", keyId: '#accordionEx4' }} key={key + 1} />
                      })}
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade show second__tab"
                id="pills-api"
                role="tabpanel"
              >
                <div className="row">
                  <div className="col-lg-12">
                    <h3 className="faqHead">ปัญหาทางเทคนิค</h3>
                    <div
                      className="accordion md-accordion"
                      id="accordionEx5"
                      role="tablist"
                      aria-multiselectable="true"
                    >

                      {listItemAPI.map((value, key) => {
                        return <CollapseItem item={{ ...value, index: key + 1, type: "APIDev", keyId: '#accordionEx5' }} key={key + 1} />
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ProductFaqSection />

        {/* <div className="row align-items-center link__box">
          <div className="col-xl-5 col-lg-12">
            <div className="faq_bottom_text">
              <h3>{t('howtoordertabcontent.question')}</h3>
              <p>{t('howtoordertabcontent.questiontitle')}</p>
            </div>
          </div>
          <div className="col-xl-7 col-12-7">
            <div className="row">
              <div className="col-md-4 col-12">
                <div className="service_feature_item">
                  <img
                    className="lazyload"
                    data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/img_1.png`}
                    alt="Image"
                  />
                  <a href="tel:027986000" className="btn v4">
                    {t('howtoordertabcontent.telBtn')}
                  </a>
                </div>
              </div>
              <div className="col-md-4 col-12">
                <div className="service_feature_item">
                  <img
                    className="lazyload"
                    data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/img_2.png`}
                    alt="Image"
                  />
                  <Link href="/contact">
                    <a className="btn v4">
                      {t('howtoordertabcontent.contactBtn')}
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-md-4 col-12">
                <div className="service_feature_item">
                  <img
                    className="lazyload"
                    data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/img_3.png`}
                    alt="Image"
                  />
                  <a href="mailto:contact@thaibulksms.com" className="btn v4">
                    {t('howtoordertabcontent.fbBrn')}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>

    </div>
  );
};

TabContent.getInitialProps = async () => ({
  namespacesRequired: [
    'FAQHeroSection',
  ],
});

TabContent.propTypes = {
  t: PropTypes.func.isRequired,
};
export default withTranslation([
  'FAQHeroSection',
])(TabContent);
