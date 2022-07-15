import { Footer } from '../components';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
export default function Home({ UpAddress }) {
  // On mount
  useEffect(() => {
    console.log('App useEffect loaded');
    checkForExtension();
  }, []);

  return (
    <div className="App">
      <Head>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/milligram/1.2.3/milligram.min.css"
        ></link>
        <meta charset="UTF-8"></meta>
      </Head>
      <div className={styles.container}>{UpAddress}</div>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  // code goes here
  return {
    props: {
      UpAddress: '',
    },
  };
}

async function checkForExtension() {
  try {
    const accounts = await window.ethereum.request({
      method: 'eth_accounts',
    });

    // If no account was found
    if (!accounts.length) {
      console.log('user is not logged in');
      navigate('/login');
    } else {
      navigate('/dashboard');
    }
  } catch (error) {
    console.log(error);
  }
}
