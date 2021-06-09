import styled from "styled-components"
import React,{useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'
import { auth,provider } from "../firebase"
import {selectUserName,
    selectUserPhoto,
    setUserLoginDetails,
    setSignOutState} 
    from '../features/user/userSlice'


function Header(props) {
const dispatch= useDispatch();
const history=useHistory();
const userName= useSelector(selectUserName);
const userPhoto=useSelector(selectUserPhoto);

useEffect(()=>{
    console.log("laxmi Narayan")
    auth.onAuthStateChanged(async (user)=>{
        if(user){
            setUser(user);
            history.push("/home");
        }
    });
},[userName])


const handleAuth= () =>{
   if(!userName){
    auth.signInWithPopup(provider).then(result =>{
        setUser(result.user)
    }).catch(error =>{
        alert(error.message);
    })
}else if(userName){
    auth.signOut().then(()=>{
        dispatch(setSignOutState())
        history.push("/")
    }).catch((error)=>{
        alert(error.message)
    });
}
};

const setUser = (user)=>{
   dispatch(
       setUserLoginDetails({
           name:user.displayName,
           email:user.email,
           photo:user.photoURL,
       })
   ); 
};
    return (
        <Nav>
        <Logo>
            <img src="/images/logo.svg" alt=""/>
        </Logo>
        {
            !userName ?
            <Login onClick={handleAuth}>Login</Login>
             :(
                 <>
        <Menu>
         <a href="/home">
             <img src="/images/home-icon.svg" alt="home"/>
             <span>Home</span>
         </a>
         <a>
             <img src="/images/search-icon.svg" alt="SEARCH"/>
             <span>SEARCH</span>
         </a>
         <a>
             <img src="/images/watchlist-icon.svg" alt="WATCHLIST"/>
             <span>WATCHLIST</span>
         </a>
         <a>
             <img src="/images/original-icon.svg" alt="ORIGINALS"/>
             <span>ORIGINALS</span>
         </a>
         <a>
             <img src="/images/movie-icon.svg" alt="movie"/>
             <span>MOVIE</span>
         </a>
         <a>
             <img src="/images/series-icon.svg" alt="series"/>
             <span>SERIES</span>
         </a>
        </Menu>
         <SignOut>
        <UserImg src={userPhoto} alt={userName}/>
        <DropDown>
            <span onClick={handleAuth}>Sign out</span>
        </DropDown>
        </SignOut>  
        </>
             )
}
        </Nav>
        
    )
}
const Nav=styled.nav`
position:fixed;
top:0;
right:0;
left:0; 
height:70px;
background-color:#090b13;
display:flex;
justify-content:space-between;
align-items:center; 
padding:0 36px;
letter-spacing:16px;
z-index:10;
`;

const Logo =styled.a`
padding:0;
width:80px;
margin-top:4px;
max-height:70px;
font-size:0;
display:inline-block;
img{
    display:block;
    width:100%;
}
`;

const Menu= styled.div`
align-items:center;
display:flex;
flex-flow:row nowrap;
height:100%;
justify-content:flex-end;
margin:0px;
padding:0px;
position:relative;
margin-right:auto;
margin-left:25px;
a{
    display:flex;
    align-items:center;
    padding:0 12px;

img{
    height:20px;
    min-width:20px;
    width:20px;
    z-index:auto;
}
span{
    color:rgb(249,249,249);
    font-size:13pz;
    letter-spacing:1.42px;
    line-height:1.08;
    white-space:nowrap;
    position:relative;

&:before{
    background-color:rgb(249,249,249);
    border-radius: 0 0 4px 4px;
    bottom:-6px;
    content:"";
    height:2px;
    left:0px;
    opacity:0;
    position:absolute;
    right:0;
    transform-origin:left center;
    transform: scaleX(0);
    transition: all 250ms cubic-bezier(0.25,0.46,0.94) 0s;
    visibility:hidden;
    width:auto;
 }
}
&:hover{
    span:before{
        transform:scaleX(1);
        visibility:visible;
        opacity:1 !important;
    }
}
}

 @media (max-width: 760px){
     display:none;
 }
`;
const Login= styled.a`
background-color:rgba(0,0,0,0.8);
padding:8px 16px;
text-transform:uppercase;
letter-spacing:1.5px;
border:1px solid #f9f9f9;
border-radius:4px;
transition:all 0.2s ease 0s;
&:hover{
    background-color:#f9f9f9;
    color:#000;
    border-color:transparent;
}
`;

const UserImg= styled.img`
height:100%; 
`;

const DropDown = styled.div`
  position: absolute;
  top: 48px;
  right: 0px;
  background: rgb(19, 19, 19);
  border: 1px solid rgba(151, 151, 151, 0.34);
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
  padding: 10px;
  font-size: 14px;
  letter-spacing: 3px;
  width: 100px;
  opacity: 0;
`;

const SignOut = styled.div`
  position: relative;
  height: 48px;
  width: 48px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  ${UserImg} {
    border-radius: 50%;
    width: 100%;
    height: 100%;
  }
  &:hover {
    ${DropDown} {
      opacity: 1;
      transition-duration: 1s;
    }
  }
`;
export default Header