import "./Slider.css"
import IconSection from './IconSection';
import { Box, Button, Container, Link, Stack, Typography, useTheme } from "@mui/material"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';

//  اوبجكت الصور
const mySlider =
  [
    { tex: "MEN", link: "/img/banner-15.jpg",href:"http://localhost:3000/Products/8"},
    { tex: "WOMEN", link: "/img/banner-25.jpg",href:"http://localhost:3000/Products/9"}
  ]


const Slider = () => {
  const theme = useTheme()

  return (

    <Container >
      <Box className="main_Slider"
        // className="MuiBox-root"
       >

        <Swiper 
          loop={true}
          pagination=
          {{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >

          {

            // map
            mySlider.map((itme) => {

              return (

                <SwiperSlide
                  key={itme.link} className="images"
                >
                  <img src={itme.link} />



                  <Box
                    //    className="border"
                    //    ليه استاك عشان اضمه الكتابه الي علي صوره في الاب واقدر احركها عن طريق بوزشن
                    sx={{ position: "absolute", top: "50%", transform: "translateY(-50%)", left: 39 }}
                  >

                    <Typography className="ee"
                      sx=
                      {{
                         color: "#222",
                         fontFamily:"monospace"
                        }}
                      variant="h5"
                    >
                      LIFESTYL COLLECTION
                    </Typography>
                    <Typography
                      sx={{
                        color: "#222",
                        fontWeight: 400,
                        fontFamily:"monospace",
                        my: 1,
                      }}
                      variant="h3">
                      {itme.tex}
                      
                    </Typography>
                    <Stack
                      sx={{
                        justifyContent: "center",
                        fontFamily:"monospace",

                      }}
                      direction={"row"}
                      alignItems={"center"}
                    >
                      <Typography fontFamily="monospace"  color={"#333"} mr={1} variant="h4"  >
                        SALE UP TO
                      </Typography>
                      <Typography fontFamily="monospace"  color={"#D23F57"} mr={1} variant="h4" >
                        35% OFF
                      </Typography>
                    </Stack>
                    <Typography
                      sx={{
                        color: "#000",
                        fontWeight: 200,
                        my: 1, 
                        fontFamily:"monospace",

                      }}
                      variant="body2"
                    >
                      Get Free shipping on orders over $66.00
                    </Typography>
                  
                      <Button  fontFamily="monospace"  className="lllll" href={itme.href}  variant="body2">  
                        SHOP NOW 
                      </Button>
                  </Box>





                </SwiperSlide>

              )
            })}

        </Swiper>






        <Box sx={{
          // 900في حاله شاشات صغير الي اقل من 

          display: {
            xs: "none",
            md: "block",
            minWidth: "26.9%"
          }
        }}
        //  صورتين الي  فوق بعض الي يمين
        >

          <Box sx={{ position: "relative" }}
          //  img1
          >
            <img className="im" width={"300px"} src="\img\child-817373_640.jpg" alt="" />

            <Stack
              //    className="border"
              //    ليه استاك عشان اضمه الكتابه الي علي صوره في الاب واقدر احركها عن طريق بوزشن
              sx={{ position: "absolute", top: "50%", transform: "translateY(-50%)", left: 39 }}
            >
              <Typography
                variant="caption"
                sx={{
                  color: "#eeee",
                  fontSize: "18px",
                  lineHeight: "16px",
                  mt: 1,
                  fontFamily:"monospace",

                }}
              >
                NEW ARRIVALS
              </Typography>


              <Typography
                variant="caption"
                sx={{
                  color: "#eeee",
                  fontSize: "18px",
                  lineHeight: "16px",
                  fontFamily:"monospace",

                  mt: 1
                }}
              >
                SUMMER
              </Typography>


              <Typography
                variant="h5"
                sx={{
                  color: "#eeee",
                  fontSize: "18px",
                  lineHeight: "16px",
                  fontFamily:"monospace",

                  mt: 1
                }}
              >
                SALE 20% OFF
              </Typography>



              <Link 
                sx={{ 

                  color: "#ec6090",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  fontFamily:"monospace",

                  transition: "0.2s",
                  ":hover": {
                  color: "#D23F57",
                  lineHeight: "16px",
                  mt: 1
                 
                  },
                }}
                href ="/Products/10"
                underline="none"
              >

                Shop Now

                <ArrowForwardIosIcon sx={{ fontSize: "13px" }} />

              </Link>

            </Stack>
          </Box>






          <Box sx={{ position: "relative"  }}
          //  img2
          >
            <img className="im" width={"300px"} src="\img\hijab-3064633_640.jpg" alt="" />


            <Stack
              //    className="border"
              //    ليه استاك عشان اضمه الكتابه الي علي صوره في الاب واقدر احركها عن طريق بوزشن
              sx={{ position: "absolute", top: "50%", transform: "translateY(-50%)", left: 39 }}
            >
              <Typography
                variant="caption"
                sx={{
                  color: "#2B3445",
                  fontSize: "18px",
                  lineHeight: "16px",
                  fontFamily:"monospace",

                  mt: 1
                }}
              >
                GAMIN 4K
              </Typography>

              <Typography
                variant="caption"
                sx={{
                  color: "#2B3445",
                  fontSize: "18px",
                  lineHeight: "16px",
                  fontFamily:"monospace",

                  mt: 1
                }}
              >
                DESKTOP &
              </Typography>

              <Typography
                variant="h5"
                sx={{
                  color: "#2B3445",
                  fontSize: "18px",
                  lineHeight: "16px",
                  fontFamily:"monospace",

                  mt: 1
                }}
              >
                LAPTOP
              </Typography>


              <Link
                sx={{
                  color: "#ec6090",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  transition: "0.2s",
                  ":hover": {
                    color: "#D23F57",
                    lineHeight: "16px",
                    fontFamily:"monospace",

                    mt: 1
                  },
                }}
                href ="/Products/9"
                underline="none"
              >
                Shop Now
                <ArrowForwardIosIcon sx={{ fontSize: "13px" }} />
              </Link>

            </Stack>

          </Box>



        </Box>


      </Box>
      <IconSection />
    </Container>
  
  )
}

export default Slider
