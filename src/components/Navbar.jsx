import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
height:60px;
background-color:white;

`;
const Wrapper = styled.div`
padding 10px 20px;
display:flex;
justify-content:space-between;
`;
const Left=styled.div`
flex:1;
`;
const Center=styled.div`
flex:1;
text-align:center`;
const Right=styled.div`
flex:1;
display:flex;
align-items:center;
justify-content:flex-end;
`;
const Language=styled.span`
font-size:14px;
cursor:pointer;
`;
const SearchContainer=styled.div`
    border:0.1px solid lightgray;
    display :flex;
    align-items:center;
    margin-left:25px;
    padding :5px;
`;
const Input=styled.input`
border:none;
`;
const Logo=styled.h1`
font-weight:bold;
`;
const MenuItems=styled.div`
font-size:14px;
cursor:pointer;
margin-Left:25px;
`

const Navbar = () => {
    return (
    <Container>
        <Wrapper>
        <Left><Language>English</Language></Left>
        <SearchContainer>
            <input></input>
            <Search style={{color:"gray",fontSize:16}}></Search>
        </SearchContainer>
        <Center><Logo>CustomClothing</Logo></Center>
        <Right>
        <MenuItems>REGISTER</MenuItems>
        <MenuItems>SignIn</MenuItems>
        <MenuItems>
        <Badge badgeContent={4} color="primary">
      <ShoppingCartOutlined color="action" />
    </Badge>
        </MenuItems>
        </Right>
        </Wrapper>
    </Container>
    );
};

export default Navbar;
