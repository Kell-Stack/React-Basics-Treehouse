function Header(){                                      //define the component as either a JavaScript function or class. our Header function is defining a component
    return (                                            //note: React components are required to begin with an upper case letter
        <header>
            <h1>Scoreboard</h1>
            <span className="stats"> Players: 1 </span>
        </header>
    )
}
    
    ReactDOM.render(                    //connects React to the DOM. the function that actually does the creating and updating of the DOM. accepts two args
        <Header />,                     //first arg: the React element or JS object that describes the element you'd like to render
        document.getElementById('root') //second arg: the actual HTML element you want to update or render to
    );       