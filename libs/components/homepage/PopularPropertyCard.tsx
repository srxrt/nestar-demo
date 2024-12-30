import { Favorite, RemoveRedEye } from "@mui/icons-material";
import { Box, Divider, IconButton, Stack, Typography } from "@mui/material";

const PopularPropertyCard = () => {
  return (
    <Stack className="popular-card-box">
      <Box
        className="card-img"
        style={{ backgroundImage: `url(/img/banner/types/apartment.webp)` }}
      >
        <div className="status">
          <img src="/img/icons/electricity.svg" alt="" />
          <span>top</span>
        </div>
        <div className="price">$5200000</div>
      </Box>
      <Box className="info">
        <strong className="title">Busan City Hall Apartments</strong>
        <p className="desc">Seoul Gangnam Apartments</p>
        <div className="options">
          <div>
            <img src="/img/icons/bed.svg" alt="" />
            <span>3 bed</span>
          </div>
          <div>
            <img src="/img/icons/room.svg" alt="" />
            <span>7 rooms</span>
          </div>
          <div>
            <img src="/img/icons/expand.svg" alt="" />
            <span>250 m2</span>
          </div>
        </div>
        <Divider sx={{ mt: "15px", mb: "17px" }} />
        <div className="bott">
          <p>Rent</p>
          <div className="view-like-box">
            <IconButton color="default">
              <RemoveRedEye />{" "}
            </IconButton>
            <Typography className="view-cnt">120</Typography>
            <IconButton color="default">
              <Favorite style={{ color: "red" }} />{" "}
            </IconButton>
            <Typography className="view-cnt">200</Typography>
          </div>
        </div>
      </Box>
    </Stack>
  );
};
export default PopularPropertyCard;
