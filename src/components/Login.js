import styled from 'styled-components'

function Login(props) {
    return(
    <Container>
        <Content>
            <Hero>
                <HeroOne src="/images/cta-logo-one.svg" alt="" />
                <SignUp>GET ALL THERE</SignUp>
                <Description>
            Get Premier Access to Raya and the Last Dragon for an additional fee
            with a Disney+ subscription. As of 03/26/21, the price of Disney+
            and The Disney Bundle will increase by $1.
          </Description>
          <HeroTwo src="/images/cta-logo-two.png" alt="" />
            </Hero>
            <BackgroundImage />
        </Content>
    </Container>
    )

    
}
const Container= styled.section`
overflow:hidden;
dispaly:flex;
flex-direction:column;
text-align:center;
height:100vh;
`;

const Content=styled.div`
margin-bottom:10vw;
width:100%;
position:relative;
min-height:100vh;
box-sizing:border-box;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
padding: 80px 40px;
height: 100%;
`;

const BackgroundImage= styled.div`
background-image:url("/images/login-background.jpg");
background-repeat:no-repeat;
background-size:cover;
background-position:top;
height:100%;
position: absolute;
top: 0;
right: 0;
left: 0;
z-index: -1000;
`;

const Hero =styled.div`
max-width: 650px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-item:center;
   transition-timing-function:ease-out;
   transition :opacity 0.2s;  
`;

const HeroOne = styled.img`
margin-bottom: 12px;
  max-width: 600px;
  min-height: 1px;
  display: block;
  width: 100%;
`;

const SignUp= styled.a`
font-weight:bold;
color:#f9f9f9;
background-color:#0063e5;
margin-bottom:12px;
width:100%;
letter-spacing:1.5px;
font-size:18px;
padding:16px 0;
border:1px solid transparent;
border-radius:5px;
&:hover{
  background-color:#0483ee;
}
`;


const Description = styled.p`
color: hsla(0,0%,95.3%,1);
font-size:11px;
margin: 0 0 24px;
line-height:1.5;
letter-spacing:1.5px;
`;


const HeroTwo = styled.img`
 max-width:600px;
 margin-bottom:20px;
 display:inline-block;
 vertical-align:bottom;
 width:100%;

`;
export default Login