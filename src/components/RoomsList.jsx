import React from 'react';
import Room from './Room'

export default function RoomsList({rooms}) {
    if(rooms.length === 0){
        return(
            <div className="empty-search">
                <h3>Not rooms not found </h3>
            </div>
        )
    }
    return (
        <div className="roomslist">
            <div className="roomslist-center">
                {
                    rooms.map((item,index)=><Room key={index} {...item} />)
                }
            </div>
        </div>
    )
}
