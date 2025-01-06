import { Stack } from "@mui/material";
import Head from "next/head";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Footer from "../Footer";
import HeaderFilter from "../homepage/HeaderFilter";
import Top from "../Top";

const withLayoutMain = (Component: any) => {
  return (props: any) => {
    return (
      <>
        <Head>
          <title>Nestar</title>
        </Head>
        <Stack id="pc-wrap">
          <Stack id="top">
            <Top />
          </Stack>
          <Stack className="header-main">
            <Stack className="container">
              <HeaderFilter />
            </Stack>
          </Stack>
          <Stack id="main">
            <Component {...props} />
          </Stack>
          <Stack id="footer">
            <Footer />
          </Stack>
        </Stack>
      </>
    );
  };
};
export default withLayoutMain;
