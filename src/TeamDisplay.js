import React from 'react'
import { Row, Col } from 'reactstrap'

const TeamDisplay = (props) => {
    const displayTimesViewed = () => {

        let tempVal = 0; tempVal = props.timesViewed; props.setTimesViewed(tempVal + 1);
    }

    React.useEffect(() => { displayTimesViewed() }, [])

    let classList = ['Brendan', 'Carolyn', 'Alex', 'Tre', 'Greg', 'Sam', 'Cory', 'Jason', 'Marina', 'Josh', 'Darrell', 'Alan']

    let teamOne = ['Tre', 'Greg', 'Marina']
    let teamTwo = ['Alan', 'Cory', 'Sam']
    let teamThree = ['Alex', 'Brendan', 'Carolyn']
    let teamFour = ['Jason', 'Darrell', 'Josh']

    // Brendan, Carolyn, Alex, Tre, Greg, Sam, Cory, Jason, Marina, Josh, Darrell, Alan
    function shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;

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
            </React.Fragment>
        )

    }

    let thirdContent = () => {
        let realTeamOne = shuffle(teamOne)
        let realTeamTwo = shuffle(teamTwo)
        let realTeamThree = shuffle(teamThree)
        let realTeamFour = shuffle(teamFour)

        return (
            <React.Fragment>

                <Row>
                    <Col>
                        <h1>TEAM 1:</h1>
                        <h2>{realTeamOne[0]}</h2>
                        <h2>{realTeamOne[1]}</h2>
                        <h2>{realTeamOne[2]}</h2>
                    </Col>
                    <Col style={{ width: "10vw" }}></Col>
                    <Col>
                        <h1>TEAM 2:</h1>
                        <h2>{realTeamTwo[0]}</h2>
                        <h2>{realTeamTwo[1]}</h2>
                        <h2>{realTeamTwo[2]}</h2>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h1>TEAM 3:</h1>
                        <h2>{realTeamThree[0]}</h2>
                        <h2>{realTeamThree[1]}</h2>
                        <h2>{realTeamThree[2]}</h2>
                    </Col>
                    <Col style={{ width: "10vw" }}></Col>
                    <Col>
                        <h1>TEAM 4:</h1>
                        <h2>{realTeamFour[0]}</h2>
                        <h2>{realTeamFour[1]}</h2>
                        <h2>{realTeamFour[2]}</h2>
                    </Col>
                </Row>
            </React.Fragment>
        )
    }

    return (
        <React.Fragment>
            {
                props.timesViewed == 1
                    ?
                    <React.Fragment>
                        {firstTime()}
                    </React.Fragment>
                    :
                    props.timesViewed == 2
                        ?
                        <React.Fragment>
                            {firstTime()}
                        </React.Fragment>
                        :
                        <React.Fragment>
                            {thirdContent()}
                        </React.Fragment>
            }
        </React.Fragment>
    )
}

export default TeamDisplay