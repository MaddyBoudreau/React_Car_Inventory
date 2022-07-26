export default function Car(props) {
    console.log(props)

    return (
        <div className="card">
            <h2>{ props.car.Car }</h2>
            <p>{ props.car.Make }</p>
            <p>{ props.car.Year }</p>
        </div>
    )
}