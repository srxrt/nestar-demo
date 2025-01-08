import withLayoutMain from "@/libs/components/layout/LayoutHome";
import { Stack } from "@mui/material";
import { NextPage } from "next";
import TrendProperties from "@/libs/components/homepage/TrendProperties";
import TopProperties from "@/libs/components/homepage/TopProperties";
import PopularProperties from "@/libs/components/homepage/PopularProperties";
import Advertisement from "@/libs/components/homepage/Advertisement";
import TopAgents from "@/libs/components/homepage/TopAgents";
import useDeviceDetect from "@/libs/hooks/useDeviceDetect";
import { useQuery } from "@apollo/client";
import { GET_PROPERTIES } from "@/apollo/user/query";

const Home: NextPage = () => {
  const device = useDeviceDetect();

  const {
    loading: getPropertiesLoading,
    data: getPropertiesData,
    error: getPropertiesError,
    refetch: getPropertiesRefetch,
  } = useQuery(GET_PROPERTIES, {
    fetchPolicy: "network-only",
    variables: {
      input: {
        page: 1,
        limit: 5,
        direction: "DESC",
        sort: "createdAt",
        search: {
          pricesRange: { start: 230000, end: 250000 },
        },
      },
    },
  });

  console.log("GET_PROPERTIES_DATA", getPropertiesData);

  if (device === "mobile") {
    return (
      <>
        <Stack>Homepage Mobile</Stack>
      </>
    );
  } else {
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
              <TopAgents />
            </Stack>
          </Stack>
        </Stack>
      </>
    );
  }
};
export default withLayoutMain(Home);
