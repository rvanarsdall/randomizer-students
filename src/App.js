import React from 'react';
import {Button, Input} from 'reactstrap'
import './App.css';
import SpinnerGuy from './Spinner';

function App() {
  const [isShowingTeams, setIsShowingTeams] = React.useState(false);
  const [timesViewed, setTimesViewed] = React.useState(0);

  return (
    <div className="App">
      <div className="App-header">
        {
          isShowingTeams ?
          // <h1>Hello New Teams</h1>
          <SpinnerGuy timesViewed={timesViewed} setTimesViewed={setTimesViewed} setIsShowingTeams={setIsShowingTeams} isShowingTeams={isShowingTeams}></SpinnerGuy>
          :
          <React.Fragment>
            <Input style={{width: "40vw", fontSize: "24pt"}} type="textarea" placeholder="Enter the names you want to split into teams, seperated by commas" />
            <br />
            <Button className="newTeams" color="success" onClick={() => { setIsShowingTeams(!isShowingTeams)}}>Make random teams</Button>
          </React.Fragment>
        }
      </div>
    </div>
  );
}

export default App;
