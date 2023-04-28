import "../styles/globals.css";
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar data-cy="header-title" />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
