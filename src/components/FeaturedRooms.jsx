import React, { Component } from 'react';
import {RoomsContext} from '../context';
import Title from './Title';
import Room from './Room';
import Loading from './Loading';

export default class FeaturedRooms extends Component {
    static contextType = RoomsContext
    render() {
        let {loading,featureRooms:rooms} = this.context;
        rooms = rooms.map(room=>{
            return <Room key={room.id} {...room} />
        })
        return(
            <section className="featured-rooms">
                <Title title='featured rooms' />
                <div className="featured-rooms-center">
                    {loading? <Loading />:rooms}
                </div>
            </section>
        )
    }
}
