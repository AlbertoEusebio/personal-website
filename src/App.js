import React from 'react'
import Card from './components/profile';
import Nav from './components/navbar';
import me from './imgs/me.JPG';
class App extends React.Component{
  state = {
    profile: {id: 0, 
            img: me,
            name: "Alberto Eusebio",
            presentation: "I am Computer Engineering student at Politecnico di Torino", 
            items: [{key: 0, text: "Love to experiment and build"},{key: 1, text: "I like sport and I am Gym-Rat"},{key: 2, text: "Currently developing the fastest bikes on the planet"}],
            linkedin: "https://www.linkedin.com/in/alberto-eusebio/",
            github: "https://github.com/AlbertoEusebio",
            policumbent: "https://www.policumbent.it/it/team/",
          
          }
  }

  render(){
    return (
      <>
      <Nav 
        title="My personal website" />
      <div className='container my-2'>
      <Card
        key={0}
        card={this.state.profile} />
      </div>
      
      </>
      );
  }

}

export default App;
