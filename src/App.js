import React from 'react'

import Card from './components/profile';
import Nav from './components/navbar';
import Projects from './components/curriculum';

import me from './imgs/me.JPG';
import ws from './imgs/ws.jpg';
import cb from './imgs/cerberus.jpg';


class App extends React.Component{
  state = {
    profile: {id: 0, 
            img: me,
            name: "Alberto Eusebio",
            presentation: "I am Computer Engineering student at Politecnico di Torino", 
            items: [{key: 0, text: "Love to experiment and build"},{key: 1, text: "I like sport and I am Gym-Rat"},{key: 2, text: "Currently developing the fastest bikes on the planet"}],
            linkedin: "https://www.linkedin.com/in/alberto-eusebio/",
            github: "https://github.com/AlbertoEusebio",
            policumbent: "https://www.policumbent.it/it/team/"
          },
    proj: [{id:0,
            img: ws,
            title: "Weather Station",
            text: "The Weather Station was a long project. I have developed the software to interface with the numerous sensors and to publish the results on a Mqtt server."},
          {id:0,
              img: cb,
              title: "Electronics of Cerberus",
              text: "Our handtrike Cerberus, as all the other bikes is shielded, thus the cyclist can only see through some screens on which some useful information on speed, power and distance is transmitted."}]
  }

  render(){
    return (
      <>
      <Nav 
        title="My personal website" />
      <div className='container-fluid my-2'>
      <div className='row'>
      <Card
        key={0}
        card={this.state.profile} />
      <div className='container my-2 w-75'>
      <Projects 
        card={this.state.proj}/>
      </div>
      </div>
      </div>
      

      </>
      );
  }

}

export default App;
