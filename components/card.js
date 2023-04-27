import React from 'react'


export default function Card(props){
    console.log(props)
    return (
        <div className="card">
        <img src={props.imageUrl}/>
        <div className="card-inner">
            <div className="top">
            <p><i className="fa-sharp fa-solid fa-location-dot"></i> {props.location.toUpperCase()}</p>
            <a href={props.googleMapsUrl}>View on Google maps</a>
            </div>
            <h2>{props.title}</h2>
            <p className="date">{props.startDate } - {props.endDate}</p>
            <p className="description">{ props.description}</p>
             
        </div>
        </div>
    )
}