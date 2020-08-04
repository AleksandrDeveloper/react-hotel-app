import React, { Component } from 'react';
import defImg from '../images/room-1.jpeg';
import { RoomsContext } from '../context'
import Error from './Error';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';

export default class SingleRooms extends Component {
    constructor(props) {
        super(props)
        this.state = {
            slug: this.props.match.params.slug,
            defImg
        }
    }
    static contextType = RoomsContext

    render() {
        const getRoom = this.context.getRoom;
        const room = getRoom(this.state.slug);
        if (!room) {
            return <Error />
        }
        const {
            name,
            description,
            capacity,
            size,
            price,
            extras,
            breakfast,
            pets,
            images
        } = room;
        return (
            <>
                <Hero hero="roomsHero" >
                    <Banner title={`${name} room`}>
                        <Link to='/rooms' className='btn-primary'>Back to rooms</Link>
                    </Banner>
                </Hero>
                <section className="single-room">
                    <div className="single-room-images">
                        {images.map((img, index) => {
                            return <img src={img} alt="img" key={index} />
                        })}
                    </div>
                    <div className="single-room-info">
                        <article className="desc">
                            <h3>details</h3>
                            <p>{description}</p>
                        </article>
                        <article className="info">
                            <h3>info</h3>
                            <h6>price : ${price}</h6>
                            <h6>size : {size} SQFT</h6>
                            <h6>max capacity :{capacity > 1 ? `${capacity} people` : `${capacity} person`}</h6>
                            <h6>{pets ? "pets allowed" : "no pets allowed"}</h6>
                            <h6>{breakfast && "free breakfast included"}</h6>
                        </article>
                    </div>
                </section>
                <section className="room-extras">
                    <h6>extras </h6>
                    <ul className="extras">
                        {extras.map((item, index) => (<li key={index}>- {item}</li>))}
                    </ul>
                </section>
            </>
        )
    }
}
