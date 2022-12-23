import { useState } from "react"
import { useDispatch } from "react-redux"
import { IconButton, Box, Typography, useTheme, Button} from "@mui/material"
import AddIcon from "@mui/material/Add"
import RemoveIcon from "@mui/icons-material/Remove"
import { shades} from "../theme"
import { addToCart } from "../state"
import { useNavigate } from "react-router-dom"

const Item = ({ item, width}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [count, setCount] = useState(1);
    const [isHovered, setIsHovered] = useState(false)
    const {
        palette: { neutral },
    } = useTheme()

    const { category, price, name, image } = item.attributes;
    const {
        data: {
            attributes: {
                formats: {
                    medium: { url },
                }
            }
        }
    } = image;

    return (
        <Box width={width}>
            <Box 
                position="relative"
                onMouseOver={() => setIsHovered(true)} 
                onMouseOut={() => setIsHovered(false)}
            >
                <img
                    alt={item.name}
                    width="300px"
                    height="400px"
                    src={`http:localhost:3000${url}`}
                    onClick={() => navigate(`/item/${item.id}`)}
                />

            </Box>
        </Box>
    )
}

export default Item;