import { withTranslation } from '../../i18n';
import PropTypes from 'prop-types';
import React from 'react';
import ProductFaqSection from './FaqSection'

import CollapseItem from './CollapseItem';

const listItemSMS = [
  { question: 'เครดิตที่มีสามารถเลือกส่งทั้ง Standard SMS และ Corporate SMS ได้หรือไม่', answer: 'การสั่งซื้อจะแยกประเภทกันค่ะ' },
  { question: 'Standard SMS และ Corporate SMS แตกต่างกันอย่างไร ?', answer: 'Standard SMS จะสามารถตรวจสอบการส่งข้อความได้ถึงผู้ให้บริการเครือข่าย เท่านั้น จะไม่คิดเครดิตในกรณีที่ส่งไม่ถึงผู้ให้บริการเครือข่ายเท่านั้น<br><br>Corporate SMS จะสามารถตรวจสอบได้ถึงมือถือปลายทาง ว่าข้อความดังกล่าว ส่งถึงมือถือหรือไม่ หากส่งข้อความไม่ถึง เช่น ปิดเครื่อง ,โทรศัพท์ข้อมูลเต็ม , ฯลฯ ทางเราจะไม่คิดเครดิตของท่าน' },
  { question: 'SMS แบบใด เหมาะกับใคร หรือการใช้งานประเภทใด', answer: 'Standard SMS เหมาะสำหรับการส่งข้อความทั่วไป ข่าวสาร ประชาสัมพันธ์ ที่ไม่จำเป็นต้องทราบผลการส่งว่าปลายทางได้รับหรือไม่หรือเน้นการส่งปริมาณมาก ใช้ทดแทนการส่งข้อความจากโทรศัพท์เคลื่อนที่ทั่วไป<br><br>Corporate SMS เหมาะสำหรับการส่งข้อความสำคัญ แจ้งเตือน หรือข้อความยืนยันต่างๆ ซึ่งจำเป็นต้องรับทราบผลการส่งข้อความ เป็นที่นิยมในหน่วยงานราชการ และใช้ในการเชื่อมต่อระบบแจ้งเตือนต่างๆ' },
  { question: 'โอนเครดิต SMS ไปอีกประเภทได้หรือไม่', answer: 'การสั่งซื้อทั้งสองประเภท จะแยกกัน ไม่สามารถโอนเครดิตการใช้งานไปอีกประเภทได้ แต่สามารถสั่งซื้อและใช้งานพร้อมกันได้ทั้งสองประเภท' }
]

const listItemNorm = [
  { question: 'จะรู้ได้อย่างไรว่าข้อความที่ส่งไปใช้กี่เครดิต', answer: 'หากเป็นการส่งผ่านหน้าเว็บไซต์ ใต้กล่องข้อความจะมีตัวนับให้ค่ะ แต่ถ้าหากเป็นการส่งประเภทอื่น รบกวนศึกษาวิธีการคิดเครดิตในหน้า ข้อมูลด้านเทคนิค ค่ะ' },
  { question: 'จะรู้ได้อย่างไรว่าข้อความที่ส่งไปนั้นส่งถึงปลายทางหรือไม่ ?', answer: 'หากท่านใช้ Corporate SMS ท่านสามารถตรวจสอบได้ที่รายงานการใช้งานค่ะ แต่ถ้าหากเป็น Standard SMS จะไม่สามารถตรวจสอบได้' },
  { question: 'ความยาวของข้อความในการส่ง SMS พิมพ์ได้เยอะขนาดไหน', answer: '- ภาษาไทย 70 ตัวอักษร คิด 1 เครดิต/หมายเลข , ระหว่าง 71-134 ตัวอักษร คิด 2 เครดิต/หมายเลข , ระหว่าง 135 - 201 ตัวอักษร คิด 3 เครดิต/หมายเลข<br><br>- ภาษาอังกฤษ 160 ตัวอักษร คิด 1 เครดิต/หมายเลข , ระหว่าง 161 - 306 ตัวอักษร คิด 2 เครดิต/หมายเลข , ระหว่าง 307 - 459 ตัวอักษร คิด 3 เครดิต/หมายเลข<br><br> * ในกรณีที่พิมพ์ภาษาไทยปนภาษาอังกฤษ ระบบจะใช้การนับ แบบภาษาไทย ค่ะ<br>* ข้อควรระวัง หากการส่ง ภาษาอังกฤษ ใช้อักขระพิเศษ ที่อยู่ในแป้นภาษาไทย เครดิตจะถูกนับเป็นแบบ ภาษาไทย ค่ะ' },
  { question: 'ผู้ให้บริการเชื่อมต่อตรงไปยัง SMS-Gateway ของ Operator ในไทยโดยไม่ผ่านระบบคนกลางใดๆดีกว่าอย่างไร', answer: 'ปัจจุบัน ThaiBulkSMS.com เชื่อมต่อระบบหลักไปยังเครือข่ายหลักของประเทศไทย คือ AIS และ Dtacทำให้สามารถดำเนินการจัดส่งข้อความได้อย่างรวดเร็ว และตรวจสอบปัญหาได้อย่างรวดเร็ว การที่ระบบหลักของทางเรามิได้ทำการเชื่อมต่อผ่านคนกลาง หรือบริษัทอื่นๆ ก่อนไปถึง Network Operator นั้นทำให้มั่นใจได้ว่าข้อความที่คุณส่งจะไม่ถูกบุคคลที่ 3 อ่านข้อความ หรือสูญหายของข้อมูลได้ ThaiBulkSMS.com ได้มุ่งมั่นถึงการพัฒนาประสิทธิภาพ และความคุ้มค่าในการใช้งานกับลูกค้าของเราทุกราย การเชื่อมต่อตรงกับเครือข่ายในประเทศไทย หมายถึง ระบบการส่ง SMS ปัจจุบัน ผู้ให้บริการสามารถส่งจากต่างประเทศเข้ามายังไทย หรือส่งจากในประเทศไทยหาภายในประเทศไทย รวมถึงส่งจากประเทศไทยออกไปยังต่างประเทศได้<br><br>ข้อแตกต่างระหว่างการส่ง SMS จากในประเทศไทย และการส่งจากต่างประเทศเข้ามายังประเทศไทยคือ<br>1. ข้อความ SMS จะถูกส่งต่อผ่านหลายระบบก่อนจะถึงผู้ใช้บริการปลายทาง ซึ่งทำให้อาจจะไม่สามารถส่งได้ถึงปลายทาง และผู้ใช้บริการยังคงถูกเรียกเก็บค่าบริการตามปกติ<br>2. ช่องทางการสื่อสารสำหรับจากต่างประเทศเข้ามาในไทยมีไว้สำหรับการรับส่งธรรมดา ทั่วๆไป สำหรับการส่ง SMS จำนวนมากๆ อาจทำให้ถูกบล๊อค ทำให้ไม่สามารถส่งได้ หรือถูกจำกัดปริมาณการส่งในช่วงเวลาต่างๆได้<br>3. การส่ง SMS จากในประเทศไทยโดยตรงนั้น เป็นการส่งเข้าไปยัง Operator โดยตรงซึ่งหมายถึง AIS ,Dtac , TrueMoveทำให้ระบบสามารถดำเนินการจัดส่งข้อความได้อย่างทันท่วงที ซึ่งทำให้ไม่ผ่านระบบกลางใดๆ<br>4. การส่ง SMS จากในไทย เป็นไปตามกฏระเบียบข้อบังคับของ Operator และ/หรือ กระทรวง ICT ดังนั้นการส่งจากต่างประเทศเข้ามาในประเทศไทย จึงไม่สามารถควบคุมได้ ซึ่งทำให้เป็นการระเมิดกฏระเบียบ/ข้อบังคับ/นโยบาย Blocklist/Anti Spam Policy ซึ่งเป็นมาตราการในการยับยั้งการส่งข้อความไม่เหมาะสม หรือบรรเทาความรำคาญของประชาชน<br><br>หมายเหตุ :<br>1. ผู้ใช้งานสามารถสังเกตุ และเลือกผู้ให้บริการได้โดยส่วนใหญ่แล้วการส่งจากต่างประเทศเข้ามายังไทยส่วนใหญ่จะสามารถทำ Unlimited Sender Name ได้ หรือให้กำหนด Sender Name ได้เองซึ่งหากส่งไปยังผู้ที่ไม่ประสงค์ต้องการจะรับข้อความอยู่แล้วนั้นมีสิทธิถูกฟ้องร้องทั้งผู้ส่ง และผู้ให้บริการได้<br>2.ตัวอย่างหน้าจอ ผู้ให้บริการระบบจากต่างประเทศ ซึ่งจะมีหน้าตาระบบการเข้าใช้งานเหมือนๆกัน เพียงแต่เปลี่ยน แบนเนอร์เป็นชื่อผู้ให้บริการตนเอง' },
  { question: 'ส่งข้อความไปยังระบบใดได้บ้าง สามารถส่งออกไป ต่างประเทศได้หรือไม่', answer: 'สามารถส่งออกไปยังทุกเครือข่ายในประเทศไทยค่ะ แต่ไม่สามารถส่งข้อความไปยังต่างประเทศได้นะค่ะ' },
  { question: 'วิธีการคำนวนเครดิต', answer: 'ข้อมูลทางเทคนิคในการใช้คิดคำนวนจำนวนตัวอักษรในการส่งข้อความ ตามหลักสากล.<br><br>1. เมื่อ 1 SMS = 140 Byte<br>1 Byte = 8 bit<br>(หน่วย Byte, bit เป็นหน่วยทางคอมพิวเตอร์สากล)<br>โดยภาษา Eng ใช้ 7 bit ต่อ 1 ตัวอักษร ( 1 ตัวอักษร Eng = 7 bit )<br>และภาษา Thai ใช้ 2 Byte ต่อ 1 ตัวอักษร ( 1 ตัวอักษร Thai = 2 Byte )<br>จากการคำนวณแล้วจะได้ข้อความที่เป็น Eng = 160 ตัวอักษรต่อข้อความ, Thai = 70 ตัวอักษรต่อข้อความ.<br><br>2. ในการทำ Long Text ( LUNICODE , LTEXT ) หรือที่เข้าใจกันในชื่อ Long SMS ซึ่งจะต้องมีส่วนของ Header มาด้วย เพื่อที่จะทำให้รู้ว่าเป็นข้อความเดียวกัน Header นี้มีขนาด 6 byte เพราะฉะนั้น<br>กรณีภาษา Thai 1SMS = (140 Byte - 6 Byte) / 2 Byte = 67 ตัวอักษร ต่อข้อความ<br>ดังนั้นกรณีส่ง 2 ข้อความให้รวมเป็น 1 หรือ LongSMSจะได้ว่า 1SMS = 2 ข้อความ = 67 ตัวอักษร * 2 ข้อความ = 134 ตัวอักษร<br>กรณีภาษา Eng 1SMS = [(140 Byte - 6 Byte) * 8 bit ] / 7 bit = 153 ตัวอักษร<br>ดังนั้นกรณีส่ง 2 ข้อความให้รวมเป็น 1 หรือ LongSMSจะได้ว่า 1SMS = 2 ข้อความ = 153 ตัวอักษร * 2 ข้อความ = 306 ตัวอักษร<br><br>สรุปการใช้งาน<br>1 SMS Thai = 70 ตัวอักษร( UNICODE ) = 1 ข้อความ<br>1 SMS Eng = 160 ตัวอักษร( TEXT ) = 1 ข้อความ<br>การใช้ภาษา Thai ใน 1 SMS ที่เกิน 70 ตัวอักษร( LUNICODE / LongSMS) = 134 ตัวอักษร (2ข้อความต่อกัน), 201 ตัวอักษร (3ข้อความต่อกัน)<br>การใช้ภาษา Eng ใน 1 SMS ที่เกิน 160 ตัวอักษร( LTEXT / LongSMS) = 306 ตัวอักษร (2ข้อความต่อกัน), 459 ตัวอักษร (3ข้อความต่อกัน)' },
  { question: 'ระบบ Blocklist คืออะไร ?', answer: 'เป็นระบบที่ทาง ThaiBulkSMS.com ใช้พัฒนาให้แก่ลูกค้า เพื่อความง่ายในการส่งข้อความไปยังปลายทาง โดยหมายเลขที่ทางลูกค้าใส่เข้าไปในระบบ Blocklist นี้ เมื่อมีการส่งข้อความออก ทางระบบจะตรวจสอบว่ามีหมายเลขดังกล่าวหรือไม่ หากมีก็จะทำการ ยกเลิกการส่งข้อความไปยังหมายเลขนั้นๆ และ ไม่คิดเครดิตในการส่ง ตัวอย่างประโยชน์ที่ใช้งาน เช่น ในกลุ่มฐานลูกค้าที่ท่านส่งข้อความหา อาจมีบางท่านเปลี่ยนแปลงหมายเลขโทรศัพท์ไปแล้ว ท่านไม่จำเป็นต้องไปลบในฐานข้อมูลของท่าน เพียงใส่หมายเลขดังกล่าวเข้าสู่ระบบ Blocklist ทางเราจะกรองหมายเลขดังกล่าวออกให้ทันที' },
  { question: 'AntiSpam Policy คืออะไร ?', answer: 'เนื่องด้วยปัจจุบันลูกค้าที่ใช้บริการมือถือต่างได้รับข้อความโฆษณา เป็นจำนวนมากซึ่งก่อให้ความรำคาญ ทาง Operator ผู้ให้บริการ จึงมีบริการ งดรับข้อความประชาสัมพันธ์ ให้แก่เจ้าของมือถือ แจ้งความประสงค์การใช้งาน ทั้งนี้หากเจ้าของมือถือดังกล่าว สมัครบริการดังกล่าวอยู่ จะมีผลทำให้เว็บไซต์ของเราไม่สามารถส่ง SMS ไปถึงหมายเลขดังกล่าวด้วยเช่นกัน' },
  { question: 'สามารถส่งข้อความพร้อมกันหลายหมายเลขหรือไม่', answer: 'ได้ค่ะ โดยท่านส่งพร้อมกันสูงสุด ได้ตามจำนวนเครดิตที่ท่านมีอยู่ค่ะ' },
  { question: 'บริการแบบใดที่สามารถตั้งชื่อผู้ส่ง ( Sendername ) ได้', answer: 'สำหรับยอดการสั่งซื้อมากกว่า 5,350 บาท ขึ้นไป ได้แก่ Corporate SMS Hot Promotion , Corporate SMS Package B และ Standards SMS Hot Promotion' }
]

const listItemFeature = [
  { question: 'หากพบปัญหาในการใช้งานจะแก้ไขได้อย่างไร ?', answer: 'ท่านสามารถติดต่อสอบถามได้ 3 ช่องทางดังต่อไปนี้<br>1. CallCenterในวันทำการ ( จ. - ศ. : เวลา 08.30 - 12.00 , 13.00 - 17.30 )<br>2. LiveSupportในวันทำการ ( จ. - ศ. : เวลา 08.30 - 12.00 , 13.00 - 17.30 )<br>3. Email : contact@thaibulksms.com ได้ตลอด 24 ชั่วโมง ทางเราจะรีบตอบกลับให้เร็วที่สุดค่ะ' },
  { question: 'สามารถตรวจสอบรายการต่างๆ ย้อนหลังได้หรือไม่', answer: 'ได้ค่ะ และยังสามารถดาวน์โหลดรายงานในรูปแบบ Excel ออกไปได้ด้วยค่ะ' },
  { question: 'ส่งข้อความไปยังระบบใดได้บ้าง สามารถส่งออกไป ต่างประเทศได้หรือไม่', answer: 'สามารถส่งออกไปยังทุกเครือข่ายในประเทศไทยค่ะ แต่ไม่สามารถส่งข้อความไปยังต่างประเทศได้นะค่ะ' },
  { question: 'สามารถส่ง SMS ผ่านไฟล์ Excel ได้หรือไม่ ?', answer: 'ได้ค่ะ รบกวนศึกษาข้อมูลได้ที่ คู่มือการใช้งาน ค่ะ (คู่มือการใช้งาน)' },
  { question: 'สามารถส่ง SMS ผ่านไฟล์ CSV ได้หรือไม่', answer: 'ได้ค่ะ รบกวนศึกษาข้อมูลได้ที่ คู่มือการใช้งาน ค่ะ (คู่มือการใช้งาน)' }
]

const listItemshopping = [
  { question: 'เมื่อชำระเงินเรียบร้อยแล้ว สามารถใช้งานเลยได้หรือไม่', answer: 'ในวันเวลาทำการปกติ ท่านจะได้รับเครดิตภายใน 30 นาที แต่หากเป็นนอกเวลาทำการ ทางเราจะพยายามเพิ่มเครดิตให้แก่ท่านโดยเร็วที่สุดค่ะ' },
  { question: 'ผู้ให้บริการเชื่อมต่อตรงไปยัง SMS-Gateway ของ Operator ในไทยโดยไม่ผ่านระบบคนกลางใดๆดีกว่าอย่างไร', answer: 'ปัจจุบัน ThaiBulkSMS.com เชื่อมต่อระบบหลักไปยังเครือข่ายหลักของประเทศไทย คือ AIS และ Dtacทำให้สามารถดำเนินการจัดส่งข้อความได้อย่างรวดเร็ว และตรวจสอบปัญหาได้อย่างรวดเร็ว การที่ระบบหลักของทางเรามิได้ทำการเชื่อมต่อผ่านคนกลาง หรือบริษัทอื่นๆ ก่อนไปถึง Network Operator นั้นทำให้มั่นใจได้ว่าข้อความที่คุณส่งจะไม่ถูกบุคคลที่ 3 อ่านข้อความ หรือสูญหายของข้อมูลได้ ThaiBulkSMS.com ได้มุ่งมั่นถึงการพัฒนาประสิทธิภาพ และความคุ้มค่าในการใช้งานกับลูกค้าของเราทุกราย<br>การเชื่อมต่อตรงกับเครือข่ายในประเทศไทย หมายถึง ระบบการส่ง SMS ปัจจุบัน ผู้ให้บริการสามารถส่งจากต่างประเทศเข้ามายังไทย หรือส่งจากในประเทศไทยหาภายในประเทศไทย รวมถึงส่งจากประเทศไทยออกไปยังต่างประเทศได้<br><br>ข้อแตกต่างระหว่างการส่ง SMS จากในประเทศไทย และการส่งจากต่างประเทศเข้ามายังประเทศไทยคือ<br>1. ข้อความ SMS จะถูกส่งต่อผ่านหลายระบบก่อนจะถึงผู้ใช้บริการปลายทาง ซึ่งทำให้อาจจะไม่สามารถส่งได้ถึงปลายทาง และผู้ใช้บริการยังคงถูกเรียกเก็บค่าบริการตามปกติ<br>2. ช่องทางการสื่อสารสำหรับจากต่างประเทศเข้ามาในไทยมีไว้สำหรับการรับส่งธรรมดา ทั่วๆไป สำหรับการส่ง SMS จำนวนมากๆ อาจทำให้ถูกบล๊อค ทำให้ไม่สามารถส่งได้ หรือถูกจำกัดปริมาณการส่งในช่วงเวลาต่างๆได้<br>3. การส่ง SMS จากในประเทศไทยโดยตรงนั้น เป็นการส่งเข้าไปยัง Operator โดยตรงซึ่งหมายถึง AIS ,Dtac , TrueMoveทำให้ระบบสามารถดำเนินการจัดส่งข้อความได้อย่างทันท่วงที ซึ่งทำให้ไม่ผ่านระบบกลางใดๆ<br>4. การส่ง SMS จากในไทย เป็นไปตามกฏระเบียบข้อบังคับของ Operator และ/หรือ กระทรวง ICT ดังนั้นการส่งจากต่างประเทศเข้ามาในประเทศไทย จึงไม่สามารถควบคุมได้ ซึ่งทำให้เป็นการระเมิดกฏระเบียบ/ข้อบังคับ/นโยบาย Blocklist/Anti Spam Policy ซึ่งเป็นมาตราการในการยับยั้งการส่งข้อความไม่เหมาะสม หรือบรรเทาความรำคาญของประชาชน<br><br>หมายเหตุ :<br>1. ผู้ใช้งานสามารถสังเกตุ และเลือกผู้ให้บริการได้โดยส่วนใหญ่แล้วการส่งจากต่างประเทศเข้ามายังไทยส่วนใหญ่จะสามารถทำ Unlimited Sender Name ได้ หรือให้กำหนด Sender Name ได้เองซึ่งหากส่งไปยังผู้ที่ไม่ประสงค์ต้องการจะรับข้อความอยู่แล้วนั้นมีสิทธิถูกฟ้องร้องทั้งผู้ส่ง และผู้ให้บริการได้<br>2.ตัวอย่างหน้าจอ ผู้ให้บริการระบบจากต่างประเทศ ซึ่งจะมีหน้าตาระบบการเข้าใช้งานเหมือนๆกัน เพียงแต่เปลี่ยน แบนเนอร์เป็นชื่อผู้ให้บริการตนเอง' },
  { question: 'บริการแบบใดที่สามารถตั้งชื่อผู้ส่ง ( Sendername ) ได้', answer: 'สำหรับยอดการสั่งซื้อมากกว่า 5,350 บาท ขึ้นไป ได้แก่ Corporate SMS Hot Promotion , Corporate SMS Package B และ Standards SMS Hot Promotion' },
  { question: 'ปัญหาภาษาไม่ถูกต้องเมื่อส่งผ่านทาง API', answer: 'Encoding ต้องกำหนดเป็น UTF-8 เท่านั้นหาก Encoding ไม่ถูกต้อง เมื่อส่งข้อความที่มีอักขระ unicode จะไม่สามารถอ่านได้' },
  { question: 'สามารถออกใบเสร็จรับเงิน/ใบกำกับภาษีได้หรือไม่', answer: 'ได้ค่ะ โดยหลังจากการสั่งซื้อครั้งแรกเรียบร้อย ท่านสามารถส่งรายละเอียด ชื่อ / ที่อยู่ บริษัทเพื่อออกใบกำกับภาษีของท่านมาได้ที่ contact@thaibulksms.com และการสั่งซื้อในครั้งต่อไป ทางระบบเราจะออกใบกำกับภาษีให้อัตโนมัติแล้วค่ะ' }
]

const listItemAPI = [
  { question: 'สามารถส่ง SMS โดยการพัฒนา Code ส่วนตัวได้หรือไม่', answer: 'คุณสามารถศึกษารายละเอียดเพิ่มเติมได้ในส่วน ข้อมูล API ค่ะ' },
  { question: 'ยกตัวอย่างรูปแบบการส่งข้อความผ่านทาง API', answer: 'ตัวอย่างประโยชน์ของการใช้งาน API เช่น ยืนยันการสั่งซื้ออัตโนมัติ จากลูกค้าเว็บไซต์ , ส่ง SMS แจ้งสาขาร้านอาหาร เมื่อมีแขกกดจองผ่านหน้าเว็บไซต์ เป็นต้น' },
  { question: 'รองรับภาษาใดบ้าง', answer: 'รองรับทุกภาษา เพราะเป็นการเชื่อมต่อผ่าน HTTP และ HTTPS ซึ่งเรามี Example Code ภาษาต่างๆให้ Download คลิกที่นี่' },
  { question: 'รูปแบบการเชื่อมต่อมีแบบใดบ้าง', answer: 'แบบ HTTP ผ่านช่องทาง HTTP หรือ HTTPS (Secure) และ FTP ( กรณีพิเศษ )' },
  { question: 'ความปลอดภัยในการใช้งานผ่านทาง API', answer: 'มีความปลอดภัยขั้นสูงสุด เนื่องจากใช้ระบบ SSL ซึ่งเป็นมาตรฐานเดียวกับ Internet Banking' },
  { question: 'ข้อจำกัดการใช้งานผ่านทาง API', answer: 'ใช้ได้ทาง HTTP และ HTTPS เท่านั้น' },
  { question: 'ปัญหาภาษาไม่ถูกต้องเมื่อส่งผ่านทาง API', answer: 'Encoding ต้องกำหนดเป็น UTF-8 เท่านั้นหาก Encoding ไม่ถูกต้อง เมื่อส่งข้อความที่มีอักขระ unicode จะไม่สามารถอ่านได้' }
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
                    <h3 className="faqHead">{t('ประเภทข้อความ')}</h3>
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
                    <h3 className="faqHead spaceTop">คำถามทั่วไป</h3>
                    <div
                      className="accordion md-accordion"
                      id="accordionEx2"
                      role="tablist"
                      aria-multiselectable="true"
                    >

                      {listItemNorm.map((value, key) => {
                        return <CollapseItem item={{ ...value, index: key + 1, type: "SmsNorm", keyId: '#accordionEx2' }} key={key + 1} />
                      })}
                    </div>
                    <h3 className="faqHead spaceTop">ฟีเจอร์ของข้อความ</h3>
                    <div
                      className="accordion md-accordion"
                      id="accordionEx3"
                      role="tablist"
                      aria-multiselectable="true"
                    >

                      {listItemFeature.map((value, key) => {
                        return <CollapseItem item={{ ...value, index: key + 1, type: "SmsFeature", keyId: '#accordionEx3' }} key={key + 1} />
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
                    <h3 className="faqHead">คำถามทั่วไป</h3>
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
                    <h3 className="faqHead">คำถามทั่วไป</h3>
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
