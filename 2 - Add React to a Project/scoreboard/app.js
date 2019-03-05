// import { DESTRUCTION } from "dns";

const title = React.createElement (     //createElements accepts three arguments that define the element you want to create
    'h1',       //the first argument is the type of argument you want to create (this could also be div, span, p, and so on.)
    {id: 'main-title', title: 'This is a title.'},      //the second argument you pass to React.createElement is an object containing any attribute and value you want to give the element
    'My First React Element!!!'     //the third argument you pass to React.createElement, is the contents or children of the element you're creating.
);

const desc = React.createElement(
    'p',        //type element
    null,       //type object
    'I just learned how react works!'       //type children
);

const header = React.createElement(
    'header',       //element
    null,       //object
    title,      //child
    desc        //child
);

ReactDOM.render(        //connects React to the DOM. the function that actually does the creating and updating of the DOM. accepts two args
    header,     //first arg: the React element or JS object that describes the element you'd like to render
    document.getElementById('root')     //second arg: the actual HTML element you want to update or render to
);



