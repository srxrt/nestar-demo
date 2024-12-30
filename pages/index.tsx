import withLayoutMain from "@/libs/components/layout/LayoutHome";
import { Stack } from "@mui/material";
import { NextPage } from "next";
import TrendProperties from "@/libs/components/homepage/TrendProperties";
import TopProperties from "@/libs/components/homepage/TopProperties";
import PopularProperties from "@/libs/components/homepage/PopularProperties";
import Advertisement from "@/libs/components/homepage/Advertisement";

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
            <Advertisement />
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
