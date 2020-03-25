import React from 'react';
import './App.css';
import Header from './components/Header.js';
import Body from './components/Body.js';
import Footer from './components/Footer.js';

class App extends React.Component {
  render (){
    return (
      <div>
        <Header name="Chi Yin Li" age="50" job="student" city="glossop" />
        <Body looking="devops" code="coding" cyber="cyber security" />
        <Footer boss="CEO" bosses="CIO" bigBoss="CTO" />
      </div>
    );
  }
}
export default App;
