import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import iconMas from '/images/icon-plus.svg';
import iconMenos from '/images/icon-minus.svg';

export default function CardImg() {
    return (
        <Card sx={{
            width: {
                xs:'100%', sm:'80%'},
            display: {
                sx:'block', sm:'flex'},
            flexDirection: 'row',
            padding:{xs: 0, sm: '4rem'},
            boxShadow: 'none',
            gap: '2rem',
           
        }}>
            <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '1rem'}} >
                <CardMedia
                    component="img"
                    alt="green iguana"
                    sx={{objectFit:'cover',borderRadius:'20px'}}
                    image="/images/image-product-1.jpg"
                />
                <Box sx={{ display:{
                    xs:'none', sm:'flex'
                } , flexDirection: 'row', gap: '1rem'}}>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        image="/images/image-product-1-thumbnail.jpg"
                        sx={{objectFit:'cover',width:'100px',borderRadius:'20px'}}
                    /><CardMedia
                        component="img"
                        alt="green iguana"
                        sx={{objectFit:'cover',width:'100px',borderRadius:'20px'}}
                        image="/images/image-product-2-thumbnail.jpg"
                    /><CardMedia
                        component="img"
                        alt="green iguana"
                        sx={{objectFit:'cover',width:'100px',borderRadius:'20px'}}
                        image="/images/image-product-3-thumbnail.jpg"
                    /><CardMedia
                        component="img"
                        alt="green iguana"
                        sx={{objectFit:'cover',width:'100px',borderRadius:'20px'}}
                        image="/images/image-product-4-thumbnail.jpg"
                    />
                </Box>
            </Box>

            <CardContent >
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    marginBlock: '1rem',
                    gap: '1rem',
                    fontWeight:'bold' 
                }}>
                    <Typography gutterBottom variant="h5" component="span" sx={{fontWeight:'bold',color:'#858687'}}>
                        Sneaker Company
                    </Typography>
                    <Typography gutterBottom variant="h3" component="span" sx={{fontWeight:'bold'}} >
                        Fall Limited Edition Sneakers
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        These low-profile sneakers are your perfect casual wear companion. Featuring a
                        durable rubber outer sole, they’ll withstand everything the weather can offer.
                    </Typography>
                    <Box sx={{display:{xs:'flex', sm:'block'} , justifyContent:'space-between'}}>
                    <Box sx={{display:'flex', gap:'2rem',alignItems:'center'}}>
                    <Typography variant="h4" component="span" sx={{fontWeight:'bold'}}>
                        $125.00
                    </Typography>
                    <Typography variant="h6" component="span" sx={{fontWeight:'bold',bgcolor:'black', color:'white',borderRadius:'5px',width:'60px', height:'30px',alignContent:'center', textAlign:'center'}}>
                       50%
                    </Typography>

                    </Box>
                    <Typography variant="h6" component="span" sx={{ textDecoration: 'line-through' ,fontWeight:'bold',color:'#858687'}}>
                        $250.00 
                    </Typography>
                    </Box>
                    <CardActions sx={{gap:'1rem',flexDirection:{xs:'column', sm:'row'}}}>
                        <Box sx={{ display: 'flex', flexDirection: 'row', bgcolor: '#F7F8FD', alignItems: 'center', height:'50px',width:{xs:'100%', sm:'140px'}, justifyContent:'space-evenly'  }}>
                                <Button variant="contained" sx={{bgcolor:'transparent',boxShadow:'none', "&:hover":{bgcolor:'transparent',boxShadow:'none'}}}
                                    startIcon={<img src={iconMenos} alt="icon plus" 
                                    style={{ width: 14,
                                        height: 6 ,
                                        }} />}
                                >
                                </Button>
                            <Typography variant="h6" size='medium' component="span">
                                0
                            </Typography>
                            <Button variant="contained" sx={{bgcolor:'transparent',boxShadow:'none', "&:hover":{bgcolor:'transparent',boxShadow:'none'}}}
                                startIcon={<img src={iconMas} alt="icon plus" 
                                style={{ width: 14,
                                    height: 14 ,
                                    }} />}
                            >
                            </Button>
                        </Box>

                        <Button sx={{ bgcolor: '#FF7D1B', color: 'black', gap: '1rem', width:{xs:'100%',sm: '220px'}, height:'50px' }}> <ShoppingCartOutlinedIcon />Add to cart</Button>
                    </CardActions>
                </Box>
            </CardContent>



        </Card >
    );
}
