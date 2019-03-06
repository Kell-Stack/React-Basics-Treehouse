const players =     [
{
    name:"Kelly", score:1000, id:1
},
{
    name:"Johnny", score:500, id:2
},
{
    name:"Bill", score:-250, id:3
},
{
    name:"Lil", score:750, id:4
},
{
    name:"Bianca", score:500, id:5
},
{
    name:"Bryan", score:650, id:6
}
]

function Header(props){     //props are used to customize our components and pass dynamic data into them. componenets are customized and made reusable with props
    return (                
        <header>
            <h1>{props.title}</h1>
            <span className="stats"> Players: {props.totalPlayers}  </span>
        </header>
    )
}

const Player = (props) => {
    return (
        <div className="player">
            <span className="player-name">
                {props.name}
            </span>
            <Counter 
            score ={props.score}
            />
        </div>
    );
} 

const Counter = (props) => {
    return (
        <div className="counter">
            <button className="counter-action decrement"> - </button>
            <span className="counter-score">{props.score}</span>
            <button className="counter-action increment"> + </button>
        </div>
    );
}

const App = (props) => {
    return(
        <div className="scoreboard">
        <Header 
        title="Scoreboard" 
        totalPlayers= {props.initialPlayers.length}
        />                                       
  
    {/*Players list*/}
    {props.initialPlayers.map(player =>
        <Player 
        name ={player.name} 
        score={player.score}
        key={player.id.toString}
        />
    )}
        </div>
    )
}

    
    ReactDOM.render(                    //connects React to the DOM. the function that actually does the creating and updating of the DOM. accepts two args
        <App initialPlayers={players}/>,
        document.getElementById('root')
    );       