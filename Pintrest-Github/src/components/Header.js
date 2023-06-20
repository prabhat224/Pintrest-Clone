import React, { useState } from 'react'
import PinterestIcon from '@mui/icons-material/Pinterest';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import TextsmsRoundedIcon from '@mui/icons-material/TextsmsRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import './header.css'

import styled from 'styled-components';

function Header({onSearchSubmit}) {
  const [input,setInput]=useState("")
  const searchSubmit=(e)=>{
    e.preventDefault();
    onSearchSubmit(input);
  }

  // const initial=(e)=>{
  //   e.preventDefault()
  //   console.log("reachable")
  //   initialize();
  // }

  return (
      <>

    <Wrapper >
      <div className='main'>
      <div className='flex'>
    <LogoWrapper>
    <Icon>
    <PinterestIcon/>
    </Icon>
    </LogoWrapper>

    <Home>
    <a href='/'>Home</a>
    </Home>

    <Explore>
    <a href='/'>Explore</a>
    </Explore>
    <Create>
      Create
      <Iconbtndown>
      <KeyboardArrowDownIcon/>
      </Iconbtndown>
    </Create>
    </div>
    <div className='flex'>
    <SearchWrapper className='input' >
        <SearchBarWrapper >
            <IconButton>
              <SearchIcon/>
            </IconButton>
            <form>
              <input  type='text' placeholder='Search' onChange={(e)=>setInput(e.target.value)}/>
              <button type='submit' onClick={searchSubmit}/>
            </form>
        </SearchBarWrapper>
    </SearchWrapper>
    
    <IconWrapper >
      <div className='icon '>
      <Iconbtn >
          <NotificationsIcon />
        </Iconbtn>
        <Iconbtn >
          <TextsmsRoundedIcon />
        </Iconbtn>
        <Iconbtn>
          <PersonRoundedIcon/>
        </Iconbtn>
       
      </div>
    </IconWrapper>
    </div>
      </div>
    </Wrapper>
    </>
  )
}

export default Header;

const Wrapper=styled.div`
display:flex;
align-items:centre;
justify-content:centre;
height:60px;
paddin:12px 4px 4px 16px;
background-color:white;
color:black`

const LogoWrapper=styled.div`
.MuiSvgIcon-root{
    color:#e60023;
    font-size:38px;
    cursor:pointer;
}`

const Icon =styled.div`
backgroundcolor:aqua`

const Home =styled.div`
display:flex;
align-items:center;
justify-content:center;
background-color:rgb(17,17,17);
min-width:100px;
height:45px;
cursor:pointer;
border-radius:24px;
margin-left:10px;
a{
text-decoration:none;
color:white;
font-weight:700;
}`


const Explore =styled.div`
display:flex;
align-items:center;
justify-content:center;
background-color:white;
min-width:100px;
height:45px;
cursor:pointer;
border-radius:24px;
margin-left:10px;
&:hover{
    background-color:#e1e1e1;
  }
a{
  text-decoration:none;
  font-weight:700;
  color:black;

}
`


const SearchWrapper=styled.div`
flex:1;
`
const SearchBarWrapper=styled.div`
background-color:#efefef;
color:#606060;
display:flex;
height:45px;
width:100%;
border-radius:50px;

form{
display:flex;
flex:1;
}
form > input{
  background-color:transparent;
  width:100%;
  border:none;
  margin-left:20px;
  font-size:16px;
  font-weight:500;
}
form > button{
  display:none;
}
input:focus
{
  outline:none;
}
`

const IconButton=styled.div`
display:flex;
padding-left:30px;
align-items:center;
justify-content:center;`

const Iconbtn=styled.div`
font-size:1px;
padding: 15px;
display:flex;
align-items:center;
justify-content:center;
cursor:pointer;
&:hover{
  background-color:#e1e1e1;
  border-radius:50%;
}`

const IconWrapper=styled.div`
display:flex;
flex-direction:row;
justify-content:center;
align-item:center;
color:#606060;`

const Iconbtndown=styled(Iconbtn)
`
  margin:0px 10px 0px 10px;
`


const Create=styled.div`
display:flex;
align-items:center;
justify-content:center;
background-color:white;
font-weight:700;
color:black;
min-width:100px;
height:45px;
cursor:pointer;
border-radius:24px;
margin-left:20px;`