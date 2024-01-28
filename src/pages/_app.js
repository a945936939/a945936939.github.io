import "@/styles/globals.css";
import { Roboto } from "next/font/google";
import Script from "next/script";
import "./slider.css";
const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});
export default function App({ Component, pageProps }) {
  return (
    <div className={roboto.className}>
      <Script
        strategy="beforeInteractive"
        src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"
      />
      <Component {...pageProps} />
    </div>
  );
}
