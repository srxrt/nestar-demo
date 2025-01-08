import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import useDeviceDetect from "@/libs/hooks/useDeviceDetect";
import { Container, Stack } from "@mui/material";
import { NextPage } from "next";

const CS: NextPage = () => {
  const device = useDeviceDetect();

  if (device === "mobile") {
    return (
      <>
        <Container>CUSTOMER SUPPORT MOBILE</Container>
      </>
    );
  } else {
    return (
      <>
        <Container>CUSTOMER SUPPORT </Container>
      </>
    );
  }
};
export default withLayoutBasic(CS);
