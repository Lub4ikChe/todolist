import React from 'react';
import './List.scss';
import Badge from '../../Badge/Badge';


function List() {

    let lists = [{ id: 1, name: "Продажи", color: "green" },
    { id: 2, name: "Фронтенд", color: "blue" },
    { id: 3, name: "Фильмы и сериалы", color: "red" }];


    return (
        <ul className="list">

            {lists.map(e => {
                return (
                    <li key={e.id} className={''}><Badge color={e.color} /> <span>{e.name}</span></li>
                )
            })}


        </ul>
    );
}

export default List;
