import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, CardImg } from 'reactstrap'

class Adventuring extends Component {

    state = {
        modal: false,
        currentDialogue: 0
    };

    handleNext = () => {
        this.setState(prevState => ({
            currentDialogue: prevState.currentDialogue + 1 < this.props.routeDialogue.dialogue.length ? prevState.currentDialogue + 1 : prevState.currentDialogue
        }))
    }

    handleBack = () => {
        this.setState(prevState => ({
            currentDialogue: prevState.currentDialogue > 0 ? prevState.currentDialogue - 1 : prevState.currentDialogue
        }))
    }

    toggle = () => {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    componentDidMount() {
        this.props.getDialogue(this.props.initialRoute.route_id)
    }

    render() {
        const { initialRoute, routeDialogue } = this.props
        const sortedDialogue = routeDialogue ? routeDialogue.dialogue.sort((a, b) => a.sequence_number - b.sequence_number) : null
        console.log(sortedDialogue)
        return (
            <div>
                <Button color="danger" onClick={this.toggle}>Start</Button>
                <Modal isOpen={this.state.modal} modalTransition={{ timeout: 700 }} backdropTransition={{ timeout: 1300 }}
                    toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}> {initialRoute.route_title} </ModalHeader>
                    <ModalBody>
                        <CardImg src={routeDialogue ? routeDialogue.route_img_url : null} />
                        {sortedDialogue ? sortedDialogue[this.state.currentDialogue].content : null}
                        {
                            (sortedDialogue && sortedDialogue[this.state.currentDialogue].isDecisionPoint) ?
                                <Decision /> :
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