import React, { useEffect, useState } from 'react';
import Events from '../Event/Events';


// const events = [
//     {
//         name: 'Child Support',
//         imgUrl: 'childSupport.png'
//     },
//     {
//         name: 'Animal Shelter',
//         imgUrl: 'animalShelter.png'
//     },
//     {
//         name: 'Bird House',
//         imgUrl: 'birdHouse.png'
//     },
//     {
//         name: 'Child Support',
//         imgUrl: 'childSupport.png'
//     },
//     {
//         name: 'Good Student',
//         imgUrl: 'goodEducation.png'
//     },
//     {
//         name: 'Child Support',
//         imgUrl: 'childSupport.png'
//     },
//     {
//         name: 'Child Support',
//         imgUrl: 'childSupport.png'
//     },
//     {
//         name: 'Child Support',
//         imgUrl: 'childSupport.png'
//     },
//     {
//         name: 'Child Support',
//         imgUrl: 'childSupport.png'
//     },
//     {
//         name: 'Child Support',
//         imgUrl: 'childSupport.png'
//     }
// ]


const Home = () => {
    const [events, setEvents] = useState([])

    useEffect(() => {
        fetch('http://localhost:5055/events')
            .then(res => res.json())
            .then(data => setEvents(data))
    })
    return (
        <div className="row">
            {
                events.map(event => <Events event={event}></Events>)
            }

        </div>
    );
};

export default Home;