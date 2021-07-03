//props atau properties
//mengirimkan data dari parent ke child
const User = (props) => {
    const { name } = props; // access name properties from props object using destructuring
    return (
      <div>
        <h2>Hello {name}</h2>
      </div>
    );
  };
  export default function StateProps() {
    return (
      <div>
        <User name="Dinda" />
      </div>
    );
  }

  //state digunakan untuk menghandle data di dalam component yang terus berubah.
  //state untuk menyimpan data, setState berguna untuk mengubah data
  export default function StateProps() {
      const [state, setstate] = useState('Dinda');

      const handleChange = () => {
          setstate('Angga');
      }
      return (
          <div>
              <h1>Hello</h1>
              <p>My name is {state}</p>
              <button onClick={handleChange}>Change Name</button>
          </div>
      )
  }

  //send data from child to parent
  //this is child
  const User = (props) => {
    const { send } = props;
    const sendDataToParent = () => {
      send('Dinda');
    };
    return (
      <div>
        <button onClick={sendDataToParent}>Get Name from Child</button>
      </div>
    );
  };
  //this is parent, getName from child
  export default function App() {
    const [state, setState] = useState('');
    const getName = (name) => {
      setState(name);
    };
    return (
      <div>
        <h1>Hello Devsaurus</h1>
        <User send={getName} />
        <p>My Name is {state}</p>
      </div>
    );
  }