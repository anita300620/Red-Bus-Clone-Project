import React, { useRef, useState } from 'react'
import '../styles/buslistcard.css'


function BusListCards({buses, setbuses}) {
    console.log(buses);

    function sortDeparture(){
        const departure = [...buses];
        let result1 = departure.sort((a, b) => {
            if (a.ticketPrice < b.ticketPrice) {
              return -1;
            }
            return 1;
        });
        setbuses(result1);
    }

    function sortArrival(){
        const arrival = [...buses];
        let result2 = arrival.sort((a, b) => {
            if (a.arrivalTime < b.arrivalTime) {
              return -1;
            }
            return 1;
        });
        setbuses(result2);
    }

    function sortPrice(){
        const price = [...buses];
        let result3 = price.sort((a, b) => {
            if (a.ticketPrice < b.ticketPrice) {
              return -1;
            }
            return 1;
        });
        setbuses(result3);
    }
    return (
        <>
            
            <div className='sorting'>
                    <div className='sorting-btns'>
                        <h3>SORT BY :</h3>
                        <button className='btn-sort' onClick={sortDeparture}>Departure</button>
                        <button className='btn-sort' onClick={sortArrival}>Arrival</button>
                        <button className='btn-sort' >Rating</button>
                        <button className='btn-sort' onClick={sortPrice}>Price</button>
                    </div>
            </div>
            
            {buses.map((bus,index) => {
                return (
                    <div key={index} className='buslist-div'>
                        <div  className="bus-home">
                            <h4 className='bus-home__name'>{bus.busName}</h4>
                            <div>
                                <div>DEPARTURE</div>
                                <h4>{bus.departureTime}</h4>
                            </div>
                            <div>
                                <div>ARRIVAL</div>
                                <h4>{bus.arrivalTime}</h4>
                            </div>
                            <h4 className='rating'>9/10</h4>
                            <h4>{bus.ticketPrice}/-</h4>
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default BusListCards