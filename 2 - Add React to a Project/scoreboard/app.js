const title = 'My First React Element!!!';   

const desc = 'I just learned how react works!';

const myTitleID = 'main-title';     //JSX Expression: the value of an attribute in the JSX tag

const name = "Kellay";

const header = (
    <header>
        <h1 id = {myTitleID} > {name}'s First React Element' </h1>      {/* JSX Expression: the value of an attribute in the JSX tag */}
        <p className = ""> {desc} </p>
    
    </header>
);

ReactDOM.render( //connects React to the DOM. the function that actually does the creating and updating of the DOM. accepts two args
    header, //first arg: the React element or JS object that describes the element you'd like to render
    document.getElementById('root') //second arg: the actual HTML element you want to update or render to
);      