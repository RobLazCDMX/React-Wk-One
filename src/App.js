import React, {Component} from 'react';
import './App.css';
import BasicInfo from './BasicInfo/BasicInfo'

class App extends Component {
  state = {
    person:[
      {id: 'y7',
      firstName: "Roberto",
      lastName: "Lazcano",
      dob: "8-25-98",
      phone: "(773) 345-8976",
      job: "Software Engineer"},

      {id: 'r8',
      firstName:"John",
      lastName: "Doe",
      dob: "4-23-78",
      phone: "(980) 346-8766",
      job:"Full Stack Developer"},

      {id: 'l2',
      firstName:"Karla",
      lastName:"Will",
      dob:"11-29-00",
      phone:"(704) 098-4567",
      job:"Senior Engineer"}
    ]
  };
  

  render() {

    return (
      <div className='App'>
       {this.state.person.map((person) => {
          return (
            <BasicInfo 
              key={person.id}
              firstName={person.firstName}
              lastName={person.lastName} 
              dob={person.dob}
              phone={person.phone}
              job={person.job} 
            />)
          })
        } 
      </div>
    )
  }
}

export default App;
