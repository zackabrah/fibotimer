import "~/styles/globals.css";
import "toastify-js/src/toastify.css";
import "~/styles/animation.css";

import { type AppType } from "next/dist/shared/lib/utils";

const MyApp: AppType = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default MyApp;
