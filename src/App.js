import React from 'react';
import {Button} from 'reactstrap'
import './App.css';
import SpinnerGuy from './Spinner';

function App() {
  const [isShowingTeams, setIsShowingTeams] = React.useState(false);
  const [timesViewed, setTimesViewed] = React.useState(0);

  return (
    <div className="App">
      <header className="App-header">
        {
          isShowingTeams ?
          // <h1>Hello New Teams</h1>
          <SpinnerGuy timesViewed={timesViewed} setTimesViewed={setTimesViewed} setIsShowingTeams={setIsShowingTeams} isShowingTeams={isShowingTeams}></SpinnerGuy>
          :
          <Button className="newTeams" color="success" onClick={() => { setIsShowingTeams(!isShowingTeams)}}>Make random teams</Button>
        }
      </header>
    </div>
  );
}

export default App;
