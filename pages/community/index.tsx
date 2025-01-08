import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import useDeviceDetect from "@/libs/hooks/useDeviceDetect";
import { Container, Stack } from "@mui/material";
import { NextPage } from "next";

const Community: NextPage = () => {
  const device = useDeviceDetect();

  if (device === "mobile") {
    return (
      <>
        <Container> COMMUNITY MOBILE</Container>
      </>
    );
  } else {
    return (
      <>
        <Container>COMMUNITY </Container>
      </>
    );
  }
};
export default withLayoutBasic(Community);
