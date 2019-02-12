import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

class Adventuring extends Component {

    state = {
        modal: false
    };

    toggle = () => {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    componentDidMount() {
        //need to edit backend route to give associated dialogue for a route, rather than scenes
        // this.getDialogue(this.props.initialRoute.id)
    }



    render() {
        const { initialRoute } = this.props
        return (
            <div>
                <Button color="danger" onClick={this.toggle}>Start</Button>
                <Modal isOpen={this.state.modal} modalTransition={{ timeout: 700 }} backdropTransition={{ timeout: 1300 }}
                    toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}> {initialRoute.route_title} </ModalHeader>
                    <ModalBody>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary">Back</Button>{' '}
                        <Button color="primary" >Next</Button>{' '}
                        <Button color="secondary" onClick={this.toggle}>Close</Button>
                    </ModalFooter>
                </Modal>
            </div>

        )
    }
}

export default Adventuring