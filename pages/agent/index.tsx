import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import useDeviceDetect from "@/libs/hooks/useDeviceDetect";
import { Container, Stack } from "@mui/material";
import { NextPage } from "next";

const AgentList: NextPage = () => {
  const device = useDeviceDetect();

  if (device === "mobile") {
    return (
      <>
        <Container> AGENTLIST MOBILE</Container>
      </>
    );
  } else {
    return (
      <div style={{ margin: "20px 0" }}>
        <Stack>AGENTLIST </Stack>
      </div>
    );
  }
};
export default withLayoutBasic(AgentList);
