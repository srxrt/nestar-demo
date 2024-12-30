import { East, West } from "@mui/icons-material";
import { Box, Stack } from "@mui/material";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import TopPropertyCard from "./TopPropertiesCard";

const TopProperties = ({ initialInput, ...props }: any) => {
  const [topProperties, setTopProperties] = useState<number[]>(initialInput);

  return (
    <Stack className="top-properties">
      <Stack className="container">
        <Stack className="info-box">
          <Box className="left">
            <span>Top Properties</span> <p>Check out our Top Properties</p>
          </Box>
          <Box className="right">
            <div className="pagination-box">
              <West className="swiper-top-prev" />
              <div className="swiper-top-pagination"></div>
              <East className="swiper-top-next" />
            </div>
          </Box>
        </Stack>
        <Stack className="card-box">
          <Swiper
            className="top-property-swiper"
            slidesPerView={"auto"}
            spaceBetween={15}
            navigation={{
              nextEl: ".swiper-top-next",
              prevEl: ".swiper-top-prev",
            }}
            pagination={{
              el: ".swiper-top-pagination",
            }}
          >
            {topProperties.map((property, index) => {
              return (
                <SwiperSlide key={index} className="top-property-slide">
                  <TopPropertyCard />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Stack>
      </Stack>
    </Stack>
  );
};

TopProperties.defaultProps = { initialInput: [1, 2, 3, 4, 5, 6, 7] };
export default TopProperties;
