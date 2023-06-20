import React from 'react'
import styled from 'styled-components'

function Pins({url,indx}) {
  console.log({url});
  return (
    <Wrapper>
        <Container>
        <img src={url} />
        </Container>
    </Wrapper>
  )
}

export default Pins;
const Wrapper=styled.div`
diaplay:flex;
`

const Container=styled.div`
diaplay:flex;
align-items:center;
padding:10px;
width:260px;
box-sizing:border-box;
cursor:pointer;

img{
  border-radius:30px;
  width:100%;
  cursor:zoom-in;
}
`