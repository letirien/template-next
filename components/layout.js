import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
const name = 'Template Home';
export const siteTitle = 'Next.js Sample Website';


export default function Layout({ children, home }) {
    
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                name="description"
                content="template Next.js"
                />
                <meta
                property="og:image"
                content={`https://og-image.vercel.app/${encodeURI(
                    siteTitle,
                )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <header className={styles.header}>
                {home ? (
                <>
                    <h1 className={utilStyles.heading2Xl}>{name}</h1>
                    <Link href="/projects/first-project">
                        Go Visit
                    </Link>
                </>
                ) : (
                <>
                    <h1 className={utilStyles.heading2Xl}>Template Other Page</h1>
                    <Link href="/">
                        Go Back Home
                    </Link>
                </>
                )}
            </header>
            <main style={{flex: 1}}>
                {children}
            </main>
            <footer>
                Made by Titien SCHOTT
                <p style={{fontSize: 12 + 'px'}}>Reminder : enable scss or sass by just changing extension of stylesheets</p>
            </footer>
        </div>
    )
  }