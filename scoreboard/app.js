function Header(props){     //props are used to customize our components and pass dynamic data into them. componenets are customized and made reusable with props
    return (                
        <header>
            <h1>{props.title}</h1>
            <span className="stats"> Players: {props.totalPlayers}  </span>
        </header>
    )
}

const Player = () => {
    return (
        <div className="player">
            <span className="player-name">
                Kelly
            </span>
            <Counter />
        </div>
    );
} 

const Counter = () => {
    return (
        <div className="counter">
            <button className="counter-action decrement"> - </button>
            <span className="counter-score">100</span>
            <button className="counter-action increment"> + </button>
        </div>
    );
}

const App = () => {
    return(
        <div className="scoreboard">
        <Header title="Scoreboard" totalPlayers= {1}/>          {/*pass props to a component via the component's JSX tag at the place where it's used*/}

    {/*Players list*/}
    <Player />
        </div>
    )
}

    
    ReactDOM.render(                    //connects React to the DOM. the function that actually does the creating and updating of the DOM. accepts two args
        <App />,
        document.getElementById('root')
    );       