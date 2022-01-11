import './styles/Card.scss';


let cards = {
    gillian: {
        name: "Gillian Seed",
        image: 'gillian.jpg',
        hp: 400,
        abilities: [
            'investigate',
            'shoot'
        ]
    }
}

export default function Card(props){
    return(
      
        <div className="cardBox">
            <div className="boxCol1">
                <h1>{cards.gillian.name}</h1>
                <p>Life: {cards.gillian.hp}</p>
            </div>
            <div className="boxCol2">
                <img src={cards.gillian.image} alt={cards.gillian.name}/>
            </div>
     
            <div className="abilityBox">
                    {cards.gillian.abilities.map(e=>{
                            return(
                                <div className="abilityBox" key={e.toString()}>
                                <button>{e}</button>
                                </div>
                            )
                    })}
            </div>   
        </div>
      
    )
}