import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
const Container=styled.div`
flex:1;
margin:5px;
height:350px;
min-width:280px;
align-items:center;
display:flex;
justify-content:center;
position:relative;`;
const Image=styled.img`
height:75%;
z-index:2;`

const Circle=styled.div`
width:200px;
height:200px;
border-radius:50%;
background-color:white;
position:absolute;


`;
const Info=styled.div`
width:100%;
height:100%;
top:0;
left:0;
position:absolute;
background-color:rgbba(0,0,0,0.2);
z-index:3;
display:flex;
align-items:center;
justify-content:center;
cursor:pointer;
`;
const Icon =styled.div`
width:40px;
height:40px;
border-radius:50%;
background-color:white;
display:flex;
align-items:center;
justify-content:center;
margin:10px;
transition:all 0.5s ease;

&:hover{
  background-color:lightblue;
  transform:scale(1.1);

}`;
const Product = ({item}) => {
  return <Container>
      <Circle/>
      <Image src={item.img}/>
      <Info>
          <Icon>
          <ShoppingCartOutlined/>
          </Icon>
          <Icon>
          <SearchOutlined/>
          </Icon>
          <Icon>
          <FavoriteBorderOutlined/>
          </Icon>
          
      </Info>
      
  </Container>;
};

export default Product;
