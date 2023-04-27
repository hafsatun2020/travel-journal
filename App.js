import React from "react"
import Header from './components/header.js'
import Card from './components/card.js'
import data from './data.js'

export default function App(){
    const travelCard = data.map((item) => {
       return  <Card
       key={item.id}
       {...item}
         />
    })
    
    return (
        <div className="container">
        <Header />
        
         {travelCard}
         
        </div>
    )
}