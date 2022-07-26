import { useState } from 'react'
import Car from './Car'

export default function CarList() {
    const [cars, setCars] = useState([
        {
            id: 0,
            Car: 'Toyota',
            Make: 'Carolla',
            Year: 2005
        },
        {   
            id: 1,
            Car: 'Nissan',
            Make: 'Altima',
            Year: 2010
        },
        {   
            id: 2,
            Car: 'Dodge',
            Make: 'Charger',
            Year: 2021
        }
    ])

    return (
        <>
            {/* { 
                posts.map(post => {
                    return (
                        <div className="card">
                            <h2>{ post.title }</h2>
                            <p>{ post.text }</p>
                        </div>
                    )
                }) 
            } */}
            { 
                cars.map(car => <Car car={car} key={ car.id } />)
            }
        </>
    )
}