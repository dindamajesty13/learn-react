//new component stateless (child component)
const Introduction = () => {
    return(
        <div>
            <p>My name is Iteung</p>
            <p>I'm from Bandung</p>
        </div>
    )
}

//new component stateless (parent component)
const Greeting = () => {
    return (
        <div>
            <Introduction/>
            <p> Nice to see you! </p>
        </div>
        
    )
}

//variable
const myName = 'Dinda';

//stateless component (root component)
function Stateless(){
    return(
        <div>
            <p>Hi {myName}</p>
            <Greeting/>
        </div>
    );
}

export default Stateless;