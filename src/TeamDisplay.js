import React from "react";
import { Row, Col } from "reactstrap";

const TeamDisplay = (props) => {
  const displayTimesViewed = () => {
    let tempVal = 0;
    tempVal = props.timesViewed;
    props.setTimesViewed(tempVal + 1);
  };

  React.useEffect(() => {
    displayTimesViewed();
  }, []);

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

  let teamOne = ["Jamie", "Julia", "Leslie"];
  let teamTwo = ["Stephanie", "Marnel", "Allison"];
  let teamThree = ["Krystal", "Joe", "Laura"];
  let teamFour = ["Jake", "Ryan", "Marcus"];
  let teamFive = ["Telma", "Kara", "Stirling"];
  let teamSix = ["Olivia", "Quinn", "Aspen"];
  let teamSeven = ["Courtney", "Kristen", "Aryn"];
  let teamEight = ["Korinna", "Jason", "Matt"];
  let teamNine = ["Mitch", "Josh", "David"];
  let teamTen = ["James", "Raheem", "Paul"];

  // Brendan, Carolyn, Alex, Tre, Greg, Sam, Cory, Jason, Marina, Josh, Darrell, Alan
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

  const firstTime = () => {
    let firstShuffle = shuffle(classList);

    return (
      <React.Fragment>
        <Row>
          <Col>
            <h1>TEAM 1:</h1>
            <h2>{firstShuffle[0]}</h2>
            <h2>{firstShuffle[1]}</h2>
            <h2>{firstShuffle[2]}</h2>
          </Col>
          <Col style={{ width: "10vw" }}></Col>
          <Col>
            <h1>TEAM 2:</h1>
            <h2>{firstShuffle[3]}</h2>
            <h2>{firstShuffle[4]}</h2>
            <h2>{firstShuffle[5]}</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1>TEAM 3:</h1>
            <h2>{firstShuffle[6]}</h2>
            <h2>{firstShuffle[7]}</h2>
            <h2>{firstShuffle[8]}</h2>
          </Col>
          <Col style={{ width: "10vw" }}></Col>
          <Col>
            <h1>TEAM 4:</h1>
            <h2>{firstShuffle[9]}</h2>
            <h2>{firstShuffle[10]}</h2>
            <h2>{firstShuffle[11]}</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1>TEAM 5:</h1>
            <h2>{firstShuffle[12]}</h2>
            <h2>{firstShuffle[13]}</h2>
            <h2>{firstShuffle[14]}</h2>
          </Col>
          <Col style={{ width: "10vw" }}></Col>
          <Col>
            <h1>TEAM 6:</h1>
            <h2>{firstShuffle[15]}</h2>
            <h2>{firstShuffle[16]}</h2>
            <h2>{firstShuffle[17]}</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1>TEAM 7:</h1>
            <h2>{firstShuffle[18]}</h2>
            <h2>{firstShuffle[19]}</h2>
            <h2>{firstShuffle[20]}</h2>
          </Col>
          <Col style={{ width: "10vw" }}></Col>
          <Col>
            <h1>TEAM 8:</h1>
            <h2>{firstShuffle[21]}</h2>
            <h2>{firstShuffle[22]}</h2>
            <h2>{firstShuffle[23]}</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1>TEAM 9:</h1>
            <h2>{firstShuffle[24]}</h2>
            <h2>{firstShuffle[25]}</h2>
            <h2>{firstShuffle[26]}</h2>
          </Col>
          <Col style={{ width: "10vw" }}></Col>
          <Col>
            <h1>TEAM 10:</h1>
            <h2>{firstShuffle[27]}</h2>
            <h2>{firstShuffle[28]}</h2>
            <h2>{firstShuffle[29]}</h2>
          </Col>
        </Row>
      </React.Fragment>
    );
  };

  let thirdContent = () => {
    let realTeamOne = shuffle(teamOne);
    let realTeamTwo = shuffle(teamTwo);
    let realTeamThree = shuffle(teamThree);
    let realTeamFour = shuffle(teamFour);
    let realTeamFive = shuffle(teamFive);
    let realTeamSix = shuffle(teamSix);
    let realTeamSeven = shuffle(teamSeven);
    let realTeamEight = shuffle(teamEight);
    let realTeamNine = shuffle(teamNine);
    let realTeamTen = shuffle(teamTen);

    return (
      <React.Fragment>
        <Row>
          <Col>
            <h1>TEAM 1:</h1>
            {realTeamOne.map((name) => (
              <h2>{name}</h2>
            ))}
          </Col>
          <Col style={{ width: "10vw" }}></Col>
          <Col>
            <h1>TEAM 2:</h1>
            {realTeamTwo.map((name) => (
              <h2>{name}</h2>
            ))}
          </Col>
        </Row>
        <Row>
          <Col>
            <h1>TEAM 3:</h1>
            {realTeamThree.map((name) => (
              <h2>{name}</h2>
            ))}
          </Col>
          <Col style={{ width: "10vw" }}></Col>
          <Col>
            <h1>TEAM 4:</h1>
            {realTeamFour.map((name) => (
              <h2>{name}</h2>
            ))}
          </Col>
        </Row>
        <Row>
          <Col>
            <h1>TEAM 5:</h1>
            {realTeamFive.map((name) => (
              <h2>{name}</h2>
            ))}
          </Col>
          <Col style={{ width: "10vw" }}></Col>
          <Col>
            <h1>TEAM 6:</h1>
            {realTeamSix.map((name) => (
              <h2>{name}</h2>
            ))}
          </Col>
        </Row>
        <Row>
          <Col>
            <h1>TEAM 7:</h1>
            {realTeamSeven.map((name) => (
              <h2>{name}</h2>
            ))}
          </Col>
          <Col style={{ width: "10vw" }}></Col>
          <Col>
            <h1>TEAM 8:</h1>
            {realTeamEight.map((name) => (
              <h2>{name}</h2>
            ))}
          </Col>
        </Row>
        <Row>
          <Col>
            <h1>TEAM 9:</h1>
            {realTeamNine.map((name) => (
              <h2>{name}</h2>
            ))}
          </Col>
          <Col style={{ width: "10vw" }}></Col>
          <Col>
            <h1>TEAM 10:</h1>
            {realTeamTen.map((name) => (
              <h2>{name}</h2>
            ))}
          </Col>
        </Row>
      </React.Fragment>
    );
  };

  return (
    <React.Fragment>
      {props.timesViewed == 1 ? (
        <React.Fragment>{firstTime()}</React.Fragment>
      ) : props.timesViewed == 2 ? (
        <React.Fragment>{firstTime()}</React.Fragment>
      ) : (
        <React.Fragment>{thirdContent()}</React.Fragment>
      )}
    </React.Fragment>
  );
};

export default TeamDisplay;
