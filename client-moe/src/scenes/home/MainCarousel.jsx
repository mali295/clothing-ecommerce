import {Box, Typography, IconButton, useMediaQuery} from '@mui/material';
import { Carousel} from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { NavigateBefore } from '@mui/icons-material/NavigateBefore';
import { NavigateNext } from '@mui/icons-material/NavigateNext';
import { shades } from "../../theme";
import { $CombinedState } from '@reduxjs/toolkit';

// import all images from assets folder
const importAll = (r) => 
    r.keys().reduce((acc,item) => {
        acc[item.replace("./", "")] = r(item);
        return acc;
    }, {});

export const heroTextureImports = importAll(
    require.context("../../assets", false, /\.(png|jpg?g|svg)$/)
);

const MainCarousel = () => {
    const isNonMobile = useMediaQuery("(min-width:600px");

    return (
        <Carousel
            infiniteLoop={true}
            showThumbs={false}
            showIndicators={false}
            showStatus={false}
            renderArrowPrev={(onClickHandler, hasPrev, label) => (
                <IconButton
                    onClick={onClickHandler}
                    sx = {{
                        position: "absolute",
                        top: "0",
                        color: "white",
                        padding: "5px",
                        zIndex: "10",
                    }}
                >

                    <NavigateBefore sx={{fontSize: 40}} />
                </IconButton>
            )}
        >
        
        </Carousel>
    )
};

export default MainCarousel