import { withTranslation } from '../../i18n';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Constant from './constants';
const TestCountSection = ({}: any) => {
    const [msgCount, setMsgCount] = useState(0);
    // const [textSms, settextSms] = useState('');
    const [isUnicode, setIsUnicode] = useState<boolean>(false);
    const [charMaxLength, setCharMaxLength] = useState(
        Constant.MAX_CHAR_LENGTH_ASC
    );
    const unicodeRegex = new RegExp(/[^\x00-\x7F]+/g);
    const [previewMessage, setPreviewMessage] = useState<string>('');
    const [maxMsgLengthPerCopy, setMaxMsgLengthPerCopy] = useState<number>(160);
    const [creditUsage, setCreditUsage] = useState<number>(0);
    function calculateCredit(msg) {
        if (msg !== '') {
            let msgLength = msg.length;
            let totalCredits = 0;
            const pattern = new RegExp('[^\u0020-\u007F\u00A0-\u00BF]');
            const patternDouble = new RegExp(
                '[^\u005B-\u005E\u007B-\u007E\u20AC]'
            );
            let rtn = {
                isUnicode: false,
                msgPerCredit: 160,
                msgLength: msg.length ? msg.length : 0,
                msg: msg,
                credit: 1,
            };
            console.log(pattern.test(msg));
            if (pattern.test(msg)) {
                rtn.isUnicode = true;
                rtn.msgPerCredit = 70;

                if (msgLength > 70) rtn.msgPerCredit = 67;
            } else {
                rtn.isUnicode = false;
                if (msgLength > 160) rtn.msgPerCredit = 153;
            }

            rtn.credit = Math.ceil(msgLength / rtn.msgPerCredit);
            totalCredits = totalCredits + rtn.credit;

            // Add doublebyte
            if (rtn.isUnicode === false) {
                rtn.msgLength = rtn.msgLength + msg.match(patternDouble).length;
            }

            console.log(rtn);
            return rtn;
        }
    }

    function addNewChar(v) {
        // settextSms(v);
        let count: number = 0;
        // let current_C: number = 0;
        if (v !== '') {
            console.log(calculateCredit(v));
            for (let i = 0; i < v.length; i++) {
                if (
                    Constant.DOUBLE_BYTES_CHAR.includes(v.charCodeAt(i)) &&
                    !isUnicode
                ) {
                    count += 2;
                    // current_C++;
                } else {
                    count++;
                    // current_C++;
                }

                if (count >= charMaxLength) {
                    setMsgCount(charMaxLength);
                    setPreviewMessage(v.slice(0, i + 1));
                    return;
                } else {
                    setMsgCount(count);
                    setPreviewMessage(v);
                }
            }
        } else {
            setMsgCount(0);
        }
    }

    function alterMaxMsgLenth() {
        let creditUsed: number = msgCount > 0 ? 1 : 0;

        if (!unicodeRegex.test(previewMessage)) {
            console.log('th');

            setIsUnicode(() => {
                setCharMaxLength(Constant.MAX_CHAR_LENGTH_UNI);
                return false;
            });
        } else {
            console.log('eng');

            setIsUnicode(() => {
                setCharMaxLength(Constant.MAX_CHAR_LENGTH_ASC);
                return true;
            });
        }

        const maxMsgPerCopy: number = isUnicode
            ? Constant.TH_MSG_DEFAULT_CHAR_LENGTH
            : Constant.ENG_MSG_DEFAULT_CHAR_LENGTH;

        const isMoreThanOneCopy: boolean = msgCount > maxMsgPerCopy;

        const nextMsgLengthPerCopy: number = isUnicode
            ? Constant.TH_NEXT_CHAR_LENGTH
            : Constant.ENG_NEXT_CHAR_LENGTH;

        setMaxMsgLengthPerCopy(maxMsgPerCopy);

        if (isMoreThanOneCopy) {
            creditUsed = Math.ceil(msgCount / nextMsgLengthPerCopy);
            let newLength: number = nextMsgLengthPerCopy * creditUsed;

            setCreditUsage(creditUsed);

            setMaxMsgLengthPerCopy(newLength);
            console.log('toon' + creditUsage, maxMsgLengthPerCopy);
        }

        setCreditUsage(creditUsed);
    }
    useEffect(() => {
        alterMaxMsgLenth();
    });

    return (
        <div
            className="sms_section productsms CalCredit lazyload"
            data-bgset={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/promo_bg.png`}
        >
            <div className="container">
                <div className="row">
                    <div className="col-xl-10 offset-xl-1 col-lg-10 offset-lg-1 col-md-12 ">
                        <div className="sms_text">
                            <h3>ทดลองคำนวณเครดิตด้วยข้อความของคุณ</h3>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-6 col-sm-12 spaceCount">
                                <div className="secCountCredits">
                                    <textarea
                                        className="areaCount"
                                        onChange={(e) => {
                                            if (e.target.value === '') {
                                                e.target.value = '';
                                                addNewChar('');
                                            } else {
                                                addNewChar(e.target.value);
                                            }
                                        }}
                                    ></textarea>
                                    <p className="textMessage">ข้อความ</p>
                                    <p className="textCount">
                                        {msgCount}/{maxMsgLengthPerCopy}
                                    </p>
                                    <div className="countCredit">
                                        คิดเป็น{' '}
                                        <span>{creditUsage} เครดิต</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-12 spaceRegis">
                                <a href="" className="linkRegis">
                                    สมัครสมาชิก
                                </a>
                                <br />
                                <p className="freeCredit">
                                    เพื่อ รับเครดิตฟรี สำหรับทดลองส่ง
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
TestCountSection.getInitialProps = async () => ({
    namespacesRequired: ['credit-calculation'],
});

TestCountSection.propTypes = {
    t: PropTypes.func.isRequired,
};
export default withTranslation('credit-calculation')(TestCountSection);
