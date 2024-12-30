import withLayoutMain from "@/libs/components/layout/LayoutHome";
import { Stack } from "@mui/material";
import { NextPage } from "next";
import TrendProperties from "@/libs/components/homepage/TrendProperties";
import TopProperties from "@/libs/components/homepage/TopProperties";
import PopularProperties from "@/libs/components/homepage/PopularProperties";

const Home: NextPage = () => {
  return (
    <>
      <Stack>
        <Stack className={"home-page"}>
          <Stack>
            <TrendProperties />
          </Stack>
          <Stack>
            <PopularProperties />
          </Stack>
          <Stack>
            <Stack className="container">Advertisement</Stack>
          </Stack>
          <Stack>
            <TopProperties />
          </Stack>
          <Stack>
            <Stack className="container">Top Agents</Stack>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};
export default withLayoutMain(Home);
