import React from 'react';
import './Card.css';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Image } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import mint01 from "../assets/01.png"
import mint02 from "../assets/02.png"
import mint03 from "../assets/03.png"
import mint04 from "../assets/04.png"
import mint05 from "../assets/05.png"

function Card () {
    return(
        <div>
            <h2>What are <span className='turks'>TURKS</span>?</h2>
            <h4 className='description'>
                Turks are randomly generated 3D models who will serve as your avatar in the game 'Turk'   
            </h4>

            <div className='slider'>
                <CarouselProvider
                naturalSlideWidth={70}
                naturalSlideHeight={105}
                totalSlides={5}
                >
                    <div>
                    <Slider>
                    <Slide index={0}><Image hasMasterSpinner='yes'><img alt='turk1'src={mint01}/></Image></Slide>
                        <Slide index={1}><img alt='turk2'src={mint02}/></Slide>
                        <Slide index={2}><img alt='turk3'src={mint03}/></Slide>
                        <Slide index={3}><img alt='turk4'src={mint04}/></Slide>
                        <Slide index={4}><img alt='turk5'src={mint05}/></Slide>
                    </Slider>
                    <ButtonBack className='btnStyle'>Back</ButtonBack>
                    <ButtonNext className='btnStyle'>Next</ButtonNext>
                    </div>
                </CarouselProvider>
            </div>
            {/* create way to detect device to change slider height for mobile */}
            
        </div>
        
    )
}

export default Card;