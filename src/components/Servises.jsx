import React, { Component } from 'react'
import Title from './Title';
import { FaCocktail,FaHiking,FaShuttleVan,FaBeer } from 'react-icons/fa'

export default class Servises extends Component {
    state={
        services:[
            {
                icon: <FaCocktail/>,
                title:'free coctails',
                info:'Lorem ipsum dolor sit amet adipisicing elit consectetur, adipisicing elit.'
            },
            {
                icon: <FaHiking/>,
                title:'free coctails',
                info:'Lorem ipsum dolor sit amet adipisicing elit consectetur, adipisicing elit.'
            },
            {
                icon: <FaShuttleVan/>,
                title:'hello world',
                info:'Lorem ipsum dolor sit amet adipisicing elit consectetur, adipisicing elit.'
            },
            {
                icon: <FaBeer/>,
                title:'last summer',
                info:'Lorem ipsum dolor sit amet adipisicing elit consectetur, adipisicing elit.'
            }
        ]
    }
    render() {
        const {services} = this.state
        return (
            <div className="services">
                <Title title="services" />
                <div className="services-center">
                    {
                        services.map(({icon,title,info},index)=>{
                            return(
                                <article key={index+title.split(' ')[0]} 
                                data-id={index+title.split(' ')[0]}
                                className='service'
                                >
                                    <span>{icon}</span>
                                    <h6>{title}</h6>
                                    <p>{info}</p>
                                </article>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}
