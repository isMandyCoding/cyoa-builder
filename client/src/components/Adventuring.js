import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, CardImg } from 'reactstrap'
import DecisionsContainer from '../redux/containers/DecisionsContainer'

class Adventuring extends Component {

    state = {
        modal: false,
    };

    handleNext = () => {
        if (this.props.currentDialogue < this.props.routeDialogue.dialogue.length - 1) {
            this.props.handleNext()
        }
    }

    handleBack = () => {
        if (this.props.currentDialogue > 0) {
            this.props.handleBack()
        }
    }

    toggle = () => {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    componentDidMount() {
        if (!this.props.currentRoute) {
            //first route ever
            this.props.getDialogue(this.props.initialRoute.route_id)
        } else {
            //should be set after decision is made
            this.props.getDialogue(this.props.currentRoute.route_id)
        }

    }

    render() {
        const { initialRoute, routeDialogue, currentRoute } = this.props
        const sortedDialogue = routeDialogue ? routeDialogue.dialogue.sort((a, b) => a.sequence_number - b.sequence_number) : null
        return (
            <div>
                <Button color="danger" onClick={this.toggle}>Start</Button>
                <Modal isOpen={this.state.modal} modalTransition={{ timeout: 700 }} backdropTransition={{ timeout: 1300 }}
                    toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}> {currentRoute ? currentRoute.route_title : initialRoute.route_title} </ModalHeader>
                    <ModalBody>
                        <CardImg src={routeDialogue ? routeDialogue.route_img_url : null} />
                        {sortedDialogue ? sortedDialogue[this.props.currentDialogue].content : null}
                        {
                            (sortedDialogue && sortedDialogue[this.props.currentDialogue].isDecisionPoint) ?
                                <DecisionsContainer dialogue={sortedDialogue[this.props.currentDialogue]} /> :
                                null
                        }
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.handleBack}>Back</Button>{' '}
                        <Button color="primary" onClick={this.handleNext} >Next</Button>{' '}
                        <Button color="secondary" onClick={this.toggle}>Close</Button>
                    </ModalFooter>
                </Modal>
            </div>

        )
    }
}

export default Adventuring