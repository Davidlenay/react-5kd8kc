import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

const Contact = (props) => {
  console.log(props);
  return (
    <div className="friend-item">
      <h3>{props.name}</h3>
      <h4>
        {props.email}
        <br />
        {props.phone}
      </h4>
      <button>Delete</button>
    </div>
  );
};

export const App = (
  // write your HTML code here

  <div>
    <h1 className="text-center">My contacts list 📱</h1>

    <div>
      <Contact
        name="Cupidon"
        email="secrétariatdupèrenoël@noel2022.fi"
        phone="08 36 65 65 65"
      />
      <Contact
        name="Furie"
        email="secrétariatdupèrenoëlf@noel2022.fi"
        phone="08 36 65 65 66"
      />
      <Contact
        name="Fringan"
        email="secrétariatdupèrenoëfrl@noel2022.fi"
        phone="08 36 65 65 67"
      />
      <Contact
        name="Comète"
        email="secrétariatdupèrenoëlc@noel2022.fi"
        phone="08 36 65 65 68"
      />
      <Contact
        name="Cupidon ❤️"
        email="secrétariatdupèrenoëlt@noel2022.fi"
        phone="08 36 65 65 69"
      />
    </div>
  </div>
);

ReactDOM.render(App, document.getElementById('root'));
