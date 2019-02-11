import React, { Component } from 'react'
import { connect } from 'react-redux'
import AdventuringContainer from '../redux/containers/AdventuringContainer'
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



    render() {
        const { adventure, onAdventure } = this.props
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

                                <AdventuringContainer />
                            </CardBody>
                        </Card>
                    </Col>
                </div>
            </div>
        )
    }
}



export default connect(null, { upVoteAdventure, downVoteAdventure })(Adventure) 