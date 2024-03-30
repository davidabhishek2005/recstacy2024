import React, { lazy, Suspense } from 'react'
import styled from 'styled-components'
// import Banner from './Banner'
import Logo from './Logo'
import './Footer.css';
import footer_img from './footer_img.png'
import recstacytext from '../assets/recstacytext.png'
import twitter from '../assets/twitter.png';
import facebook from '../assets/facebook.png';
import linkedin from '../assets/linkedin.png';
import instagram from '../assets/instagram.png';

import Loading from './Loading'

const Banner = lazy(() => import("./Banner"));


const Section = styled.section`
min-height: 100vh;
width: 100vw;
background-color: ${props => props.theme.body};
position: relative;
color: ${(props) => props.theme.text};

display: flex;
/* justify-content: center; */
/* align-items: center; */
flex-direction: column;
`

const Container = styled.div`
width: 75%;
margin: 2rem auto;
display: flex;
justify-content: space-between;
align-items: center;

border-bottom: 1px solid ${(props) => props.theme.text};

@media (max-width: 48em) {
width: 90%;

h1{
font-size: ${props => props.theme.fontxxxl};

}
}
`
const Left = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

@media (max-width: 48em) {
width: 100%;
}
`

const IconList = styled.div`
display: flex;
align-items: center;
margin: 1rem auto;

&>*{
  padding-right: 0.5rem;
  transition: all 0.2s ease;

  &:hover{
    transform: scale(1.2);
  }
}
`
const MenuItems = styled.ul`
list-style:none;
width: 50%;
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-template-rows: repeat(3, 1fr);
grid-gap: 1rem;

@media (max-width: 48em) {
display: none;
}
`
const Item = styled.li`
width: fit-content;
cursor: pointer;

&::after{
  content: ' ';
  display: block;
  width: 0%;
  height: 2px;
  background: ${props => props.theme.text};
  transition: width 0.3s ease;
}
&:hover::after{
  width: 100%;
}
`

const Bottom = styled.div`
width: 75%;
margin: 0 auto;
display: flex;
justify-content: space-between;
align-items: center;

a{
  text-decoration:underline;
}
@media (max-width: 48em) {
flex-direction: column;
width: 100%;

span{
  margin-bottom: 1rem;
}
}
`

const Footer = () => {

  const scrollTo = (id) => {

    let element = document.getElementById(id);
  
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    })
  }
  
  return (
    <Section>

<div  class="section section-newfooter">
            <div class="footer-top">
                <div class="main-container">
                    <div class="container-text-newfooter">
                        {/* <img src={footer_img} loading="lazy" alt="" class="newfooter-phone-right"/> */}
                        <img src={footer_img}  loading="lazy" alt="" class="image-26"/>
                        <h1 class="titre-footer">
                            Journey beyond<br/>paracosm
                        </h1>
                        <div>
                            <p class="description big wide text-white description-footer text-center">Fun is just an event away!</p>
                        </div>
                        <div class="newfooter-btn-box">

                        </div>
                        <div class="footer-recrutement-bloc-wrapper">
                            <p class="description text-white text-center">
                                You want to join the vibes?<br/>Check out Events page for more info.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="large-container">
                <div class="footer-bloc">
                    <img src={recstacytext} loading="lazy" alt="Recstacy Logo" class="image-7"/>
                    <div class="footer-bloc-right-section">
                        <div class="footer-rs-container">
                            <a href="https://www.linkedin.com/" target="_blank" class="w-inline-block">
                                <img src={linkedin} loading="lazy" width="150" sizes="24px" alt=""  class="img-lien-sociaux"/>
                            </a>
                            <a href="https://twitter.com/" class="w-inline-block">
                                <img src={twitter} loading="lazy" width="150" alt="" class="img-lien-sociaux"/>
                            </a>
                            <a href="https://facebook.com/" class="w-inline-block">
                                <img src={facebook} loading="lazy" width="150" alt="" class="img-lien-sociaux"/>
                            </a>
                            <a href="https://www.instagram.com/" class="w-inline-block">
                                <img src={instagram} loading="lazy" width="150" alt="" class="img-lien-sociaux"/>
                            </a>
                        </div>
                        <div class="div-block-14">
                            <div class="little-divider-ball first-hide"></div>
                            <h6 class="footer-bloc-wording">
                           NIT DURGAPUR
                            </h6>
                            <div class="little-divider-ball"></div>
                            <h6 class="footer-bloc-wording">2024</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Section>
  )
}

export default Footer
