function Card(props){
    return(
            <div className="card">
                <div className="card-bg"style={{ backgroundImage: `url(${props.bgImage})`}}>
                </div>
                <div className="card-content">
                    <img className='card-image' src={props.image} alt="Its me)"></img>
                    <h1 className='card-Name'>{props.name}</h1>
                    <p className='card-desc'>{props.desc}</p>
                </div>
            </div>
    );
};

export default Card;