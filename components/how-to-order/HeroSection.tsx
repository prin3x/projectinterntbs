import { withTranslation } from '../../i18n'
import PropTypes from 'prop-types'
import * as React from 'react'
import { useRouter } from 'next/router'

const classnames = require('classnames')

const HeroSection = ({ t }: any) => {
    const router = useRouter()
    const [defaultTab, setDefaultTab] = React.useState('pills-home')

    React.useEffect(() => {
        if (!router.query.tab) {
            console.warn('have not tab')
            return
        }

        setDefaultTab(`${router.query.tab}`)
        // const params = new URLSearchParams();
        // console.log(defaultTab)
    }, [router, setDefaultTab])
    return (
        <div className="hero_section hero_section_2">
            <div className="container">
                <div className="row justify-content-center hero_top_one">
                    <div className="col-12 text-center">
                        <h1 className="section__title">
                            {t('HeroSection::How to order a package')}
                        </h1>

                        <ul
                            className="nav nav-pills tab__toggle"
                            id="pills-tab"
                            role="tablist"
                        >
                            <li className="nav-item" role="presentation">
                                <a
                                    className={classnames('nav-link', {
                                        active: defaultTab === 'pills-home',
                                    })}
                                    id="pills-home-tab"
                                    data-toggle="pill"
                                    href="#pills-home"
                                    role="tab"
                                    aria-controls="pills-home"
                                    aria-selected={defaultTab === 'pills-home'}
                                >
                                    <img
                                        className="lazyload"
                                        data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/main_3.png`}
                                        alt=""
                                    />
                                    <span>
                                        {t(
                                            'HeroSection::Follow these steps to place an order'
                                        )}
                                    </span>
                                </a>
                            </li>
                            <li className="nav-item" role="presentation">
                                <a
                                    className={classnames('nav-link', {
                                        active: defaultTab === 'pills-profile',
                                    })}
                                    id="pills-profile-tab"
                                    data-toggle="pill"
                                    href="#pills-profile"
                                    role="tab"
                                    aria-controls="pills-profile"
                                    aria-selected={
                                        defaultTab === 'pills-profile'
                                    }
                                >
                                    <img
                                        className="lazyload"
                                        data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/dollar.png`}
                                        alt=""
                                    />
                                    <span>
                                        {t('HeroSection::Payment methods')}
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

HeroSection.getInitialProps = async () => ({
    namespacesRequired: ['How-to-order'],
})

HeroSection.propTypes = {
    t: PropTypes.func.isRequired,
}
export default withTranslation('How-to-order')(HeroSection)
