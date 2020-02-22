import React from 'react'
import { Row, Col } from 'reactstrap'

const TeamDisplay = (props) => {
    const displayTimesViewed = () => {

        let tempVal = 0; tempVal = props.timesViewed; props.setTimesViewed(tempVal + 1);
    }

    React.useEffect(() => { displayTimesViewed() }, [])

    let classList = ['Brendan', 'Carolyn', 'Alex', 'Tre', 'Greg', 'Sam', 'Cory', 'Jason', 'Marina', 'Josh', 'Darrell', 'Alan']

    // Brendan, Carolyn, Alex, Tre, Greg, Sam, Cory, Jason, Marina, Josh, Darrell, Alan

    const firstTime = () => {
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
                    <Row>
                        <Col>
                            <h1>TEAM 1:</h1>
                            <h2>{classList[3]}</h2>
                            <h2>{classList[4]}</h2>
                            <h2>{classList[8]}</h2>
                        </Col>
                        <Col>
                            <h1>TEAM 2:</h1>
                            <h2>{classList[11]}</h2>
                            <h2>{classList[6]}</h2>
                            <h2>{classList[5]}</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h1>TEAM 3:</h1>
                            <h2>{classList[2]}</h2>
                            <h2>{classList[0]}</h2>
                            <h2>{classList[1]}</h2>
                        </Col>
                        <Col>
                            <h1>TEAM 4:</h1>
                            <h2>{classList[7]}</h2>
                            <h2>{classList[10]}</h2>
                            <h2>{classList[9]}</h2>
                        </Col>
                    </Row>
                </React.Fragment>
            }
        </React.Fragment>
    )
}

export default TeamDisplay