function Header(){                                      //define the component as either a JavaScript function or class. our Header function is defining a component
    return (                                            //note: React components are required to begin with an upper case letter
        <header>
            <h1>Scoreboard</h1>
            <span className="stats"> Players: 1 </span>
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
        <Header />

    {/*Players list*/}
    <Player />
        </div>
    )
}

    
    ReactDOM.render(                    //connects React to the DOM. the function that actually does the creating and updating of the DOM. accepts two args
        <App />,
        document.getElementById('root')
    );       