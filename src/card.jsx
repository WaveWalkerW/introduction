
function Card(props){
    return(
        <div className="card">
            <img className='card-image' src={props.image} alt="It`s me)"></img>
            <h1 className='card-Name'>{props.name}</h1>
            <p className='card-desc'>{props.desc}</p>
        </div>
    );
};

export default Card;