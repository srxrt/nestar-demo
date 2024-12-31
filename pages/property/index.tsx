import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import Filter from "@/libs/components/property/Filter";
import { KeyboardArrowDownRounded } from "@mui/icons-material";
import { Box, Button, Container, Stack } from "@mui/material";
import { NextPage } from "next";

const PropertyList: NextPage = () => {
  return (
    <div id="property-list-page" style={{ position: "relative" }}>
      <Stack className="container">
        <Box className="right">
          <span>Sort By</span>
          <div>
            <Button endIcon={<KeyboardArrowDownRounded />}>New</Button>
          </div>
        </Box>
        <Stack className="property-page">
          <Stack className="filter-config">
            <Filter />
          </Stack>
          <Stack className="main-config"></Stack>
        </Stack>
      </Stack>
    </div>
  );
};
export default withLayoutBasic(PropertyList);
