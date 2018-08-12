import React, {Component} from 'react';
import MainSection from './components/MainSection';
import FormSection from './components/FormSection';
import './App.css';
import '.';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainSection />
        <FormSection />
      </div>
    );
  }
}

export default App;
