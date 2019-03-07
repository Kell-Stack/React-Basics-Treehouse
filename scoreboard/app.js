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
            <Counter />
        </div>
    );
} 

class Counter extends React.Component {

    state = {
        score: 0
    };

    incrementScore = () => {
        this.setState(prevState => {
            return {
                score: prevState.score + 50
            };
        });
    }
    decrementScore = () => {
        this.setState(prevState => {
            return {
                score: prevState.state.score - 50
            }
        })
    }

    render () {
        return (
            <div className="counter">
                <button className="counter-action decrement" onClick={() => this.decrementScore()}> - </button>
                <span className="counter-score">{this.state.score}</span>
                <button className="counter-action increment" onClick={() => this.incrementScore()}> + </button>
            </div>
        );
    }
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

    
    ReactDOM.render(
        <App initialPlayers={players}/>,
        document.getElementById('root')
    );       