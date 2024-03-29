import * as React from 'react';
import { withTranslation } from '../../i18n';
import PropTypes from 'prop-types';

const CollapseItem = (props: any) => {
    const { item } = props;
    return (
        <div className="card">
            <div
                className="card-header"
                role="tab"
                id={`headingOne${item.type}${item.index}`}
            >
                <a
                    data-toggle="collapse"
                    data-parent={item.keyId}
                    href={`#collapseOne${item.type}${item.index}`}
                    aria-expanded="false"
                    aria-controls={`collapseOne${item.type}${item.index}`}
                >
                    <span className="close ion-ios-arrow-down"></span>
                    <span className="open ion-ios-arrow-up"></span>
                    <h5 className="mb-0 faq_header">{item.question}</h5>
                </a>
            </div>
            <div
                id={`collapseOne${item.type}${item.index}`}
                className="collapse"
                role="tabpanel"
                aria-labelledby={`headingOne${item.type}${item.index}`}
                data-parent={item.keyId}
            >
                <div className="card-body faqAnswer">
                    <p
                        dangerouslySetInnerHTML={{ __html: item.answer }}
                        className="txtFAQ"
                    ></p>
                </div>
            </div>
        </div>
    );
};
CollapseItem.getInitialProps = async () => ({
    namespacesRequired: ['FAQcallap'],
});

CollapseItem.propTypes = {
    t: PropTypes.func.isRequired,
};
export default withTranslation('FAQcallap')(CollapseItem);
