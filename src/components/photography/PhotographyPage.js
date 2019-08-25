import React, { Component } from 'react';
import './photographyPage.css';
import PhotoSquare from './PhotoSquare';
import Footer from '../Footer';

import redsky from './photos/redsky.jpg';
// import kathleen from './photos/kathleen.jpg';
import dohyun from './photos/dohyun.jpg';
import antelope from './photos/antelope.jpg';
import lion from './photos/Lion.jpg';
import elephant from './photos/elephant.jpg';
import oregon from './photos/oregon.jpg'
import oregonFull from './photos/oregonFull.jpg'
import chicago from './photos/chicago.jpg';
import sf from './photos/sf.jpg';
import been from './photos/been.jpg';



export default class PhotographyPage extends Component{
    render(){
        const text = {
            oregon: {
                header: 'All the Time in the World',
                place: 'Diamond Lake, Oregon 2018',
                body: 'My friends and I spent the afternoon chilling around Diamond Lake in Oregon on our way back from Crater Lake. We had no agenda, no set time to leave, which led to them just sitting on a bench talking. To me this photo will always represent a time in my life in which I had the most freedom. We laughed together with no responsibilities and no stress just enjoying the beautiful landscape and the silence that our voices filled.',
            },
            lion: {
                header: 'Sleepy Afternoon',
                place: 'Murchison Falls National Park, Uganada 2018',
                body: 'This was the very end of our safari in the park and our guide was driving around devoting all his effort to finding some lions for us to see. He spotted this lioness with her two cubs sleeping in the grass. Our small group of three was filled with unbelievable excitment, disbelief, and a little fear and seeing these powerful, majestic creatures in their natural environment without any walls to separate us. The two cubs were active, bothering their mother as she atempted to rest. That was until a group of other people on safaris gathered disturbing her from her slumber, upon which she rolled over, yawned then stalked off into the grass leaving behind the brief bit of noisiness brought into her home.',
            },
            // kathleen: {
            //     header: 'In the King\'s Capital',
            //     place: 'Kamapala, Uganda 2018',
            //     body: 'This is my friend Kathleen. I took this after we and a group of my friends had attended the 25th anniversary of the Ugandan King\'s Coronation. We were back at the room after the hot day looking over the city of Kamapala.',
            // },
            dohyun: {
                header: 'Winter Walking',
                place: 'Crater Lake National Park, Oregon 2018',
                body: 'We were hiking around Crater Lake with no snowshoes in thigh high snow. I was lagging behind as me and my friends spread further and further apart. As my friend Dylan walked further and further up the hill blazing a path through the deep snow I snapped this photo.',
            },

            elephant: {
                header: 'Small Grass Breakfast',
                place: 'Murchison Falls National Park, Uganada 2018',
                body: 'At the very beginning of our safari, in the early morning, we stumbled across this lone elephant eating grass in a field. The elephant quietly enjoyed his meal as our group stared at the massive animal. We must have made some noise as we marvelled because the elephant turned to stare at our group curious to the small creatures watching it.',
            },
            sf: {
                header: 'Snapshot of the City',
                place: 'San Francisco, California 2017',
                body: 'After a day long hike with my friends in SF, during Spring Break of Freshmen Year, we were driving out of the city, stuck in traffic. I was tired and bored as we were literally not moving in the center of the street. I turned my head to the side and say this picturesque view of the skyscrapers and the cars. I turned snapped a photo then resumed my loafing in the car. ',
            },
            been: {
                header: 'Broken Down Fences',
                place: 'Mulnomah Falls, Oregon 2019',
                body: 'While my sister and I were driving her up to Seattle, we stopped near Portland and the parks nearby to take photos. After unsuccessfully trying to find parking near Multnomah Falls, we stopped at an overpass. This was the first trip my sister and I had taken by ourselves, after mostly ignoring each other during our childhood. I am going to remember this photo hopefully as the start or a little after the start of me and my sister getting to know each other and growing a lot closer as sibling and friends.',
            },

            redsky: {
                header: 'Sunrise in the Plains',
                place: 'Murchison Falls National Park, Uganada 2018',
                body: 'The early morning sun rose red, as we sleepy drove into the park for our one day safari. As I looked around me, I was struck how similar the trees and the plains looked so similar to movies like Lion King. I look around and took a photo of the silhouetted trees agains the red sky. ',
            },
            antelope: {
                header: 'A Solitary Antelope',
                place: 'Murchison Falls National Park, Uganada 2018',
                body: 'This photo was about midway through out safari. This antelope was hiding in the tall grass by itself away from its herd. The tall plain grass framed it beautifully.',
            },
            chicago: {
                header: 'Reflective Sky Scrapers',
                place: 'Chicago, Illinois 2016',
                body: 'After High School, a couple friends and I took a cross country road trip from SF to New York. We were stoping in Chicago for the day, walking by the water as the sun perfectly glanced off the buildings.',
            },
        }
        return(
            <div className="page" style={{"justifyContent": "center"}}>
                <br/>
                <h1 className="pageHeader"> Photography </h1>
                <p className="greyCaption">[ Click a Photo ]</p>
                <p className="greyCaption">I currently shoot on a Sony A7r mark II, normally with my Tamron 28-75mm F/2.8 lens. <br/>
                These photos are a small sample of some of the diverse places I have travelled to and shot at!</p>
                <div style={{"max-width": "1199px", "margin-left": "auto", "margin-right": "auto"}}>
                    
                    <PhotoSquare img={oregon} imgFull={oregonFull} name='oregon' text={text.oregon} offset={-75}/>
                    <PhotoSquare img={lion} name='lion' text={text.lion} offset={0}/>
                    <PhotoSquare img={been} name='been'  text={text.been} offset={20}/>
                    {/* <PhotoSquare img={kathleen} name='kathleen' text={text.kathleen} offset={70}/> */}

                    <PhotoSquare img={elephant} name='elephant' text={text.elephant} offset={0}/>
                    <PhotoSquare img={sf} name='sf' text={text.sf} offset={0}/>
                    <PhotoSquare img={dohyun} name='dohyun' text={text.dohyun} offset={-10}/>
                    
                    <PhotoSquare img={redsky} name='redsky' text={text.redsky} offset={30}/>
                    <PhotoSquare img={antelope} name='antelope' text={text.antelope} offset={-10}/>
                    <PhotoSquare img={chicago} name='chicago' text={text.chicago} offset={-20}/>
                    
                </div>
                <Footer />
            </div>
        );
    }
}