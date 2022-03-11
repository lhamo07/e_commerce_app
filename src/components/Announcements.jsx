import styled from "styled-components";

// import React from 'react';
const Container =styled.div`
height :30px;
background-color:teal;
color:white;
display:flex;
align-items:center;
justify-content:center;
fontSize:14px;
font-weight:500;
`
const Announcements = () => {
  return <div>
      <Container>Super Deal! Free Shipping on order over $50</Container>
  </div>;
};

export default Announcements;

