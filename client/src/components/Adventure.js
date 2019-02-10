import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    Card, CardImg, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle,
    Col, Button,
    Modal, ModalHeader, ModalBody, ModalFooter
} from 'reactstrap';
import { Route, Link } from 'react-router-dom'
import { upVoteAdventure, downVoteAdventure } from '../redux/actions/adventures'

class Adventure extends Component {

    state = {
        modal: false
    };

    handleDown = () => {
        console.log("handled down")
        this.props.downVoteAdventure(this.props.adventure.adventure_id)
    }

    handleUp = () => {
        this.props.upVoteAdventure(this.props.adventure.adventure_id)
    }

    toggle = () => {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    render() {
        const { adventure, onAdventure } = this.props
        console.log(adventure)
        return (
            <div>
                <div>
                    <Col xs="12" sm="8">
                        <Card>
                            <CardBody>
                                <CardTitle>{adventure.title}</CardTitle>
                                <CardSubtitle>Tags: {adventure.tags.map(tag => <span>{tag.tag_name}, </span>)} </CardSubtitle>
                            </CardBody>
                            <CardImg width="100%" src={adventure.adv_img_url} alt={adventure.title} />
                            <CardBody>
                                <CardText>{adventure.description}</CardText>
                                <CardText><i onClick={this.handleUp} class="material-icons">thumb_up</i> {adventure.adv_votes} <i onClick={this.handleDown} class="material-icons">thumb_down</i> {adventure.adv_downvotes} </CardText>
                                <CardLink> <Link to={`/adventures/${adventure.adventure_id}`} >Go On Adventure!</Link> </CardLink>
                                <Button color="danger" onClick={this.toggle}>Start</Button>

                                {/* Modal */}
                                <Modal isOpen={this.state.modal} modalTransition={{ timeout: 700 }} backdropTransition={{ timeout: 1300 }}
                                    toggle={this.toggle} className={this.props.className}>
                                    <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                                    <ModalBody>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
                                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                                    </ModalFooter>
                                </Modal>
                            </CardBody>
                        </Card>
                    </Col>
                </div>
            </div>
        )
    }
}



export default connect(null, { upVoteAdventure, downVoteAdventure })(Adventure) 