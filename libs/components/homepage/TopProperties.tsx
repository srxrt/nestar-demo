import { East, West } from "@mui/icons-material";
import { Box, Stack } from "@mui/material";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import TrendPropertyCard from "./TrendPropertyCard";

const TopProperties = () => {
  const [trendProperties, setTrendProperties] = useState<number[]>([
    1, 2, 3, 4, 5, 6, 7,
  ]);

  return (
    <Stack className="popular-properties">
      <Stack className="container">
        <Stack className="info-box">
          <Box className="left">
            <span>Popular Properties</span> <p>Popularity is based on views</p>
          </Box>
          <Box className="right">
            <div className="pagination-box">
              <West className="swiper-trend-prev" />
              <div className="swiper-trend-pagination"></div>
              <East className="swiper-trend-next" />
            </div>
          </Box>
        </Stack>
        <Stack className="card-box">
          {trendProperties.length === 0 ? (
            <Box className="empty-list">Trends Empty</Box>
          ) : (
            <Swiper
              className="trend-property-swiper"
              slidesPerView={"auto"}
              spaceBetween={15}
              navigation={{
                nextEl: ".swiper-trend-next",
                prevEl: ".swiper-trend-prev",
              }}
              pagination={{
                el: ".swiper-trend-pagination",
              }}
            >
              {trendProperties.map((property, index) => {
                return (
                  <SwiperSlide key={index} className="trend-property-slide">
                    <TrendPropertyCard />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          )}
        </Stack>
      </Stack>
    </Stack>
  );
};
export default TopProperties;
