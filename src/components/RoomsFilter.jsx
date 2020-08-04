import React from 'react';
import { useContext } from 'react';
import { RoomsContext } from '../context';
import Title from './Title';

const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))]
}

export default function RoomsFilter({ rooms }) {
    const context = useContext(RoomsContext);
    const { handlerChange, type, capacity, price, minPrice, maxPrice, minSize, maxSize, breakfast, pets } = context;

    let types = getUnique(rooms, 'type')
    types = ['all', ...types]
    types = types.map((item, index) => <option value={item} key={index}>{item}</option>)

    let people = getUnique(rooms, 'capacity')
    people = people.map((item, index) => <option value={item} key={index}>{item}</option>)


    return (
        <section className="filter-container">
            <Title title='Serach rooms' />
            <form action="" className="filter-form">

                {/* select-type */}
                <div className="form-group">
                    <label htmlFor="type">room type</label>
                    <select
                        name="type"
                        id="type"
                        value={type}
                        className="form-control"
                        onChange={handlerChange}>{types}</select>
                </div>

                {/* gest-select */}
                <div className="form-group">
                    <label htmlFor="capacity">guest</label>
                    <select
                        name="capacity"
                        id="capacity"
                        value={capacity}
                        className="form-control"
                        onChange={handlerChange}>{people}</select>
                </div>

                {/* room price */}
                <div className="form-group">
                    <label htmlFor="price">price rooms ${price}</label>
                    <input type="range" name="price" min={minPrice} max={maxPrice} id="price" value={price} onChange={handlerChange} className="form-control" />
                </div>
                {/* size */}
                <div className="form-group">
                    <label htmlFor="price">room size </label>
                    <div className="size-inputs">
                        <input
                            type="number"
                            name="minSize"
                            value={minSize}
                            onChange={handlerChange}
                            className="size-input"
                        />
                        <input
                            type="number"
                            name="maxSize"
                            value={maxSize}
                            onChange={handlerChange}
                            className="size-input"
                        />
                    </div>
                </div>
                {/* end of select type */}

                <div className="form-group">
                    <div className="single-extra">
                        <input type="checkbox" name="breakfast" checked={breakfast} onChange={handlerChange} />
                        <label htmlFor="breakfast">breakfast</label>
                    </div>
                    <div className="single-extra">
                        <input type="checkbox" name="pets" checked={pets} onChange={handlerChange} />
                        <label htmlFor="breakfast">pets</label>
                    </div>
                </div>

            </form>
        </section>
    )
}
