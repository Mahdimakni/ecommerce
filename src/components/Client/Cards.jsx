import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useShoppingCart} from 'use-shopping-cart';
import React from 'react';


const Cards = ({article}) => {
  const { addItem } = useShoppingCart();
  const addToCart = (product) => {
    const produit = {
    id : product._id,
    title : product.designation,
    image : product.imageart,
    price : product.prix,
    qtestock : product.qtestock,
    quantity : 1
    };
    addItem(produit);
    console.log('Item added to cart:', produit);
    };
  return (
    <div>
        <Card sx={{ maxWidth: 'auto',margin: 1 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={article.imageart}
        title={article.reference}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {article.prix}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        {article.designation.substr(0,20)}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="large" variant="contained" color="secondary" onClick={() => addToCart(article)}><i class="fa-solid fa-cart-shopping"></i>add to cart</Button>
        
      </CardActions>
    </Card>
      
    </div>
  )
}

export default Cards