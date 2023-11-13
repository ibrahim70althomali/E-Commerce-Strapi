import { Box, Container, Divider, Stack, Typography } from "@mui/material";
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import CreditScoreOutlinedIcon from '@mui/icons-material/CreditScoreOutlined';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import "./IconSection.css"
const IconSection = () => {
  return (
    <Container className="IconSection" sx={{mt:1,background:"#27292a",fontFamily:"monospace",  }}>
      
        <Stack 
        //  Divider تصميم جاهز عشان يحط خط عمودي 
        divider={<Divider orientation="vertical" flexItem />}
        
        direction={"row"} 
        alignItems={"center"} 
        sx={{flexWrap:"wrap",borderradius:"12px",                        fontFamily:"monospace",
      }}
        >
         <MyBox fontFamily="monospace" icon={ <ElectricBoltIcon fontSize="large" className="icon_IconSection" />}  title={"Fast Delivery"} supTitle={"Start form $10"} />
         <MyBox fontFamily="monospace" icon={ < AccessTimeOutlinedIcon fontSize="large" className="icon_IconSection"/> } title={"Money Guarantee"} supTitle={"  7 Days Back"}/>
         <MyBox fontFamily="monospace"  icon={ <WorkspacePremiumOutlinedIcon fontSize="large"className="icon_IconSection"/> } title={"365 Days"} supTitle={" For Free Return"}/>
         <MyBox fontFamily="monospace"  icon={ < CreditScoreOutlinedIcon fontSize="large" className="icon_IconSection" /> } title={"payment"} supTitle={" Secure System"}/>
         
          </Stack>
    </Container>
    
  )
}

export default IconSection






// eslint-disable-next-line react/prop-types
const MyBox = ({icon,title,supTitle}) => {
  return (
    <Box  
    sx={{width:250,display:"flex",flexGrow:1,alignItems:"center",gap:3,justifyContent:"center",py:2}}>
    {icon}

    <Box>
    <Typography fontFamily="monospace" color={"#eeee"}  variant="h6">{title}</Typography>
    
    <Typography 
    sx={{fontWeight:300}}
    variant="body1"
    fontFamily="monospace" 
    color={"#eeee"}
    >
    {supTitle}
    </Typography>

    </Box>
    </Box>
  )
}

