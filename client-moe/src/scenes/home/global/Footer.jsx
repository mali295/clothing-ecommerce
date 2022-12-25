import {useTheme} from "@mui/material"
import {Box, Typography} from "@mui/material"
import { shades} from "../../theme"


const Footer = () => {
    const { palette: {neutral}} = useTheme();
    return (
        <Box mt="70px" p="40px 0" backgroundColor={neutral.light}>
            <Box 
                width="80%"
                margin="auto"
                display="flex"
                justifyContent="-between"
                flexWrap="wrap"
                rowGap="30px"
                columnGap="clap(20px,30px,40px)"
            >
                <Box width="clamp(20%,30%,40%">
                    <Typography variant="h4" fontWeight="bold" mb="30px" color={shades.secondary[500]}>
                        ECOMMER
                    </Typography>
                    <div>
                        Dictumst suspendisse quas laoreet nam temporibus, sed facilis bibendum
                        voluptas perferendis hic, parturient. Deleniti excepturi tenetur! Aptent 
                        dignissim, quas nam, consequatur assumenda ultrices! Id! Tempora aspernatur ipsum tellus, gravida id, libero maecenas et quae vestibulum tempus? Dictum molestiae phasellus! Sociosqu diam, donec, quidem incidunt libero
                    </div>
                </Box>

                <Box>
                    <Typography variant="h4" fontWeight="bold" mb="30px">
                        About Us
                    </Typography>
                    <Typography mb="30px">Careers</Typography>
                    <Typography mb="30px">Our Stores</Typography>
                    <Typography mb="30px">Terms & Conditions</Typography>
                    <Typography mb="30px">Privacy Policy</Typography>
                </Box>

                <Box>
                    <Typography variant="h4" fontWeight="bold" mb="30px">
                        Customer Care
                    </Typography>
                    <Typography mb="30px">Help Center</Typography>
                    <Typography mb="30px">Track Your Order</Typography>
                    <Typography mb="30px">Corporate & Buil Purchasing</Typography>
                    <Typography mb="30px">Return & Refunds</Typography>
                </Box>

                <Box width="clamp(20%,25%,30%">
                    <Typography variant="h4" fontWeight="bold" mb="30px">
                        Contact Us
                    </Typography>
                    <Typography mb="30px">50 north Blvd, Washington, DC 10501</Typography>
                    <Typography mb="30px">Email: somethingsomething@gmail.com</Typography>
                    <Typography mb="30px">(222)333-4444</Typography>
                
                    
                </Box>
            </Box>
        </Box>
    )
}

export default Footer