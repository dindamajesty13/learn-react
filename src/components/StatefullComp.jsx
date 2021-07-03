import { Component } from "react";

//statefull component (child component)
class Introduction extends Component{
    render(){
        return(
            <div>
                <p>My name is Iteung</p>
                <p>I'm from Bandung</p>
            </div>
        );
    }
}

//statefull component (parent component)
class Greeting extends Component{
    render(){
        return(
            <div>
                <Introduction/>
                <p>Nice to see you!</p>
            </div>
        );
    }
}

//variabel
const myName = 'Dinda';

//statefull component (root component)
class Statefull extends Component{
    render(){
        return(
            <div>
                <p>Hi {myName}</p>
                <Greeting/>
            </div>
        );
    }

}

export default Statefull;