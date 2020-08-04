import React, { Component } from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import Servises from '../components/Servises';
import FeaturedRooms from '../components/FeaturedRooms';


export default class Home extends Component {
    render() {
        return (
            <React.Fragment>

                <Hero>
                    <Banner title='luxury rooms' subtitle="deluxe rooms starting at $299">
                        <Link to="/rooms" className="btn-primary">our rooms</Link>
                    </Banner>
                </Hero>
                <Servises />
                <FeaturedRooms />
                
            </React.Fragment>
        )
    }
}
 