import React, { Component } from 'react';
import items from './data';

const RoomsContext = React.createContext()
const RoomsConsumer = RoomsContext.Consumer;

class RoomsProvider extends Component {
    state = {
        rooms: [],
        sortingRooms: [],
        featureRooms: [],
        loading: true,
        type:'all',
        capacity:1,
        price:0,
        minPrice:0,
        maxPrice:0,
        minSize:0,
        maxSize:0,
        pets: false,
        breakfast: false,
    }

    componentDidMount() {
        let rooms = this.formatData(items)

        let featureRooms = rooms.filter(room => room.featured === true);
        let maxPrice = Math.max(...rooms.map(i=>i.price))
        let maxSize = Math.max(...rooms.map(i=>i.size))

        this.setState({
            rooms,
            featureRooms,
            sortingRooms: rooms,
            loading: false,
            price: maxPrice,
            maxPrice,
            maxSize,
        });
    }

    formatData(items) {
        return items.map(item => {
            let id = item.sys.id;
            let images = item.fields.images.map(img =>img.fields.file.url);
            return { ...item.fields, images, id };
        })
    }

    getRoom=slug=>[...this.state.rooms].find(room=>room.slug === slug)
    
    handlerChange = event=>{
        const target = event.target;
        
        const value = target.type === 'checkbox'? target.checked : target.value ,
              name = target.name;

        this.setState({
            [name]:value
        },this.filterRooms);
    }


    filterRooms = ()=>{
        let {rooms,capacity,type,price,minSize,maxSize,breakfast,pets} = this.state;

        let tempRooms = [...rooms];
        capacity = parseInt(capacity);
        price = parseInt(price);


        if(type !== 'all'){
            tempRooms = tempRooms.filter(item=>item.type === type)
        }
        if(capacity !== 1){
            tempRooms = tempRooms.filter(item=>item.capacity >= capacity)
        }
        tempRooms = tempRooms.filter(item=>item.price <= price)
        tempRooms = tempRooms.filter(item=>item.size >= minSize&& item.size <= maxSize)
        if(breakfast){
            tempRooms = tempRooms.filter(item=>item.breakfast === breakfast)
        }
        if(pets){
            tempRooms = tempRooms.filter(item=>item.pets === pets)
        }


        this.setState({
            sortingRooms:tempRooms
        });
    }

    render() {
        return (
            <RoomsContext.Provider value={{ 
                ...this.state,
                getRoom:this.getRoom,
                handlerChange:this.handlerChange
             }}>
                {this.props.children}
            </RoomsContext.Provider>
        )
    }
}


export function withConsumerRooms(Component){
    return (props)=>{
        return <RoomsConsumer>
            {value=><Component {...props} context={value} />}
        </RoomsConsumer>
    }
}

export { RoomsProvider, RoomsConsumer, RoomsContext };

