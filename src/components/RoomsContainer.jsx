import React from 'react'
import RoomsFilter from './RoomsFilter'
import RoomsList from './RoomsList';
import Loading from './Loading'

import { withConsumerRooms } from '../context';




function RoomsContainer({ context }) {
    const { loading, sortingRooms, rooms } = context;
    if(loading){
        return <Loading />
    }
    return (
        <div>
            <RoomsFilter rooms={rooms} />
            <RoomsList rooms={sortingRooms} />
        </div>
    )
}


export default withConsumerRooms(RoomsContainer)













// import React, { Component } from 'react'
// import RoomsFilter from './RoomsFilter'
// import RoomsList from './RoomsList';
// import RoomConsumer from '../context';
// import Loading from './Loading'

// export default class RoomsContainer extends Component {
//     render() {
//         return (
//             <RoomConsumer>
//                 {value => {
//                     const {loading,sortedRooms,rooms} = value;
//                     if(loading){
//                         return <Loading />
//                     }
//                         return(
//                             <div>
//                                 Hello from rooms RoomsContainer
//                                 <RoomsFilter rooms={rooms} />
//                                 <RoomsList rooms={sortedRooms} />
//                             </div>
//                         )
//                     }}
//             </RoomConsumer>
//         )
//     }
// }
