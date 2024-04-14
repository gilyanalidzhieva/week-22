function Heroes(props) {
    return (
        <div className="hero">
            <div className="hero-body">
                <h4 className="hero-name">{props.name}</h4>
                <p className="hero-universe">{props.universe}</p>
                <p className="hero-alterego">{props.alterego}</p>
                <p className="hero-occupation">{props.occupation}</p>
                <p className="hero-friends">{props.friends}</p>
                <p className="hero-superpowers">{props.superpowers}</p>
                <p className="hero-info">{props.info}</p>
            </div>
        </div>
    );
}

export default Heroes;