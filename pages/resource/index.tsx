import React from 'react';
import Head from 'next/head';
import { NextSeo } from 'next-seo';
import Help from '../../components/Help';
import BacktoTop from '../../components/BacktoTop';
import Layout from '../../components/Layout';
// import { withTranslation } from '../../i18n';
import { seo } from '../../components/seo/resource';
import HeroSection from '../../components/resource/HeroSection';
import ContentSection from '../../components/resource/ContentSection';
import CtaSection from '../../components/resource/CtaSection';
import * as BlogService from '../../services/blog/blog.service';
import { useRouter } from 'next/router';
import th from '../../public/locales/th/Resource.json'
import en from '../../public/locales/en/Resource.json'

const Resource = ({ posts }: any) => {
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'th' ? th : en;

    return (
        <Layout>
            <Head>
                <meta name="keywords" content={t.meta.keywords} />
                <meta name="author" content="" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <meta name="twitter:title" content={seo.openGraph.title} />
                <meta
                    name="twitter:description"
                    content={seo.openGraph.description}
                />
                <meta
                    name="twitter:image:src"
                    content={seo.openGraph.images[0].url}
                />
            </Head>
            <NextSeo
                openGraph={seo.openGraph}
                title={t.meta.title}
                description={t.meta.description}
                twitter={{
                    site: seo.openGraph.site_name,
                    cardType: seo.openGraph.type,
                }}
            />
    
            <div className="page_wrapper">
                <HeroSection Posts={posts} />
                <ContentSection Posts={posts} />
                <CtaSection />
                <Help />
            </div>
    
            <BacktoTop />
        </Layout>
    );
}

export default Resource;
export const getStaticProps = async () => {
    let LandingPage;
    try {
        LandingPage = await BlogService.GetLandingPage();
    } catch (error) {
        console.error(error);
    }
    const highligth = LandingPage.PostHighligth
        ? LandingPage.PostHighligth.filter((post) => post.highlight)
        : [];
    const example = LandingPage.PostExample
        ? LandingPage.PostExample.filter((post) => post.ExampleOfUse)
        : [];
    const knowledge = LandingPage.PostKnowledge
        ? LandingPage.PostKnowledge.filter((post) => post.Knowledge)
        : [];
    const successStory = LandingPage.PostSuccessStory
        ? LandingPage.PostSuccessStory.filter((post) => post.SuccessStory)
        : [];
    return {
        props: {
            posts: {
                highligth: highligth.map((post) => post.highlight),
                example: example.map((post) => post.ExampleOfUse),
                knowledge: knowledge.map((post) => post.Knowledge),
                successStory: successStory.map((post) => post.SuccessStory),
            },
            namespacesRequired: ['Resource'],
        },
    };
};
