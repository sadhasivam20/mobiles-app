import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <PhoneList />
    </div>
  );
}

function PhoneList() {

  const [mobiles, setMobiles] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/mobiles")
      .then((data) => data.json())
      .then((mbs) => setMobiles(mbs));
  }, []);

  return (
    <div className="phone-list-container">
      {mobiles.map((mc) => (
        <Phone mobile={mc} />
      ))}
      console.log(mobile);
    </div>
  );
}
function Phone({ mobile }) {
  return (
    <div className="phone-container">
      <img src={mobile.img} className="phone-picture" />
      <h2 className="phone-name">{mobile.model}</h2>
      <p className="phone-company">{mobile.company}</p>
    </div>
  );
}

export default App;
