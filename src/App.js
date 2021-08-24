import React from "react";
import { Button, Input } from "reactstrap";
import "./App.css";
import SpinnerGuy from "./Spinner";

function App() {
  const [isShowingTeams, setIsShowingTeams] = React.useState(false);
  const [timesViewed, setTimesViewed] = React.useState(0);
  let classList = [
    "Jaime",
    "Julie",
    "Leslie",
    "Stephanie",
    "Marnel",
    "Allison",
    "Krystal",
    "Joe",
    "Laura",
    "Jake",
    "Ryan",
    "Marcus",
    "Telma",
    "Kara",
    "Stirling",
    "Oliva",
    "Quinn",
    "Aspen",
    "Courtney",
    "Kristen",
    "Aryn",
    "Korrina",
    "Jason",
    "Matt",
    "Mitch",
    "Josh",
    "David",
    "James",
    "Raheem",
    "Paul",
  ];
  return (
    <div className="App">
      <div className="App-header">
        {isShowingTeams ? (
          // <h1>Hello New Teams</h1>
          <SpinnerGuy
            timesViewed={timesViewed}
            setTimesViewed={setTimesViewed}
            setIsShowingTeams={setIsShowingTeams}
            isShowingTeams={isShowingTeams}
          ></SpinnerGuy>
        ) : (
          <React.Fragment>
            <Input
              style={{ width: "40vw", fontSize: "24pt" }}
              type="textarea"
              placeholder="Enter the names you want to split into teams, seperated by commas"
              value={shuffle(classList).join(", ")}
            />
            <br />
            <Button
              className="newTeams"
              color="success"
              onClick={() => {
                setIsShowingTeams(!isShowingTeams);
              }}
            >
              Make random teams
            </Button>
          </React.Fragment>
        )}
      </div>
    </div>
  );
}
function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
export default App;
