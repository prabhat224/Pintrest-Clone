import React from 'react'
import styled from 'styled-components'
import Pins from './Pins';
import './pinboard.css'

function PinBoard({pins}) {
  return (
    <>
      <Wrapper>
        <Container className='container'>
        {
          pins.map((pin,indx)=>{
              let url=pin.urls.regular;
             return <Pins key={indx} url={url}/>
          })
        }
        </Container>
      </Wrapper>
    </>
  )
}

export default PinBoard;


const Wrapper=styled.div`
width:100%;
height:100%;
display:flex;
flex-direction:row;
justify-content:center;
background-color:white;
margin-top:50px;`

const Container=styled.div`
margin:0 auto;
column-gap:5px;
flex-direction:row;
background-color:white;`