import styled from 'styled-components'
import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons'

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;

`




const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #ffffff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props=>props.direction === "left" && "10px" };
    right: ${props=>props.direction === "right" && "10px" };
    cursor: pointer;
    opacity: 0.5;
    margin: auto;

`

const Wrapper = styled.div`
    height: 100%;
`
const Slide = styled.div`
display: flex;
align-items:center ;
`
const ImgContainer = styled.div`
 flex: 1;
 `;
 const Image = styled.img`
 
 `


const InfoContainer = styled.div`
flex: 1;
`

const Slider = () => {
  return (
    <Container>
        <Arrow direction="left" >
            <ArrowLeftOutlined/>
        </Arrow>
        <Wrapper>
            <Slide>

            </Slide>
            <ImgContainer>
                    <Image src="https://www.kindpng.com/picc/m/788-7889882_fashon-shopping-png-clipart-shopping-fashion-girl-png.png"/>
            </ImgContainer>
            <InfoContainer></InfoContainer>
        </Wrapper>
        <Arrow  direction="right" >
            <ArrowRightOutlined/>
        </Arrow>
    </Container>
  )
}

export default Slider