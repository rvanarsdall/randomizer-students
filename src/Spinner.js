import React from 'react'
import { Button, Col, Row } from 'reactstrap'
import TeamDisplay from './TeamDisplay';

const SpinnerGuy = (props) => {
    const [showSpinner, setShowSpinner] = React.useState(true);

    // function wait(timeout) {
    //     return new Promise(resolve => {
    //         setTimeout(resolve, timeout);
    //     });
    // }

    // await wait(5000);
    // if (newState == -1) {
    //     alert('Done');
    // }

    function stateChange() {
        setTimeout(function () {
            setShowSpinner(false);
        }, 3500);
    }

    return (
        <React.Fragment>
            {
                showSpinner ?
                    <Row>

                        <Col>
                            <img className="spinning-dude" src="https://i.giphy.com/media/MF6vek4goRx0lYszav/giphy.webp" />
                        </Col>
                        {
                            stateChange()
                        }
                    </Row>
                    :
                    <React.Fragment>
                        <TeamDisplay timesViewed={props.timesViewed} setTimesViewed={props.setTimesViewed}></TeamDisplay>
                        <Row>
                            <Col>
                                <Button color="primary" onClick={() => { setShowSpinner(!showSpinner) }}>Redo with Same Names</Button>
                            </Col>
                            <Col>
                                <Button color="secondary" disabled onClick={() => { props.setIsShowingTeams(!props.isShowingTeams) }}>Make New Teams</Button>
                            </Col>
                        </Row>
                    </React.Fragment>
            }
        </React.Fragment>
    )
}

export default SpinnerGuy