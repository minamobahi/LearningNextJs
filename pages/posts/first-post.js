import Link from 'next/link';
import Head from "next/head";
import Layout from "../../components/layout";

export default function FirstPost() {
    return (
        <Layout>
            <Head>
                <title>عنوان دلخواه من</title>
            </Head>
            <h1>First Post</h1>
            <h2>
                <Link href="/">
                    Back to home and test git
                </Link>
            </h2>
        </Layout>
    )
}