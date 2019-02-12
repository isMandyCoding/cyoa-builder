import React, { Component } from 'react'
import { connect } from 'react-redux'
import AdventuringContainer from '../redux/containers/AdventuringContainer'
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardLink,
    CardTitle,
    CardSubtitle,
    Col,
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter
} from 'reactstrap';
import {
    Route,
    Link
} from 'react-router-dom'
import { upVoteAdventure, downVoteAdventure, getScenes } from '../redux/actions/adventures'

class Adventure extends Component {

    state = {
        modal: false
    };

    handleDown = () => {
        this.props.downVoteAdventure(this.props.adventure.adventure_id)
    }

    handleUp = () => {
        this.props.upVoteAdventure(this.props.adventure.adventure_id)
    }

    render() {
        const { adventure, onAdventure } = this.props
        // console.log("this is the initial route id: ", Number(adventure.routes.find(route => route.isInitialRoute).route_id))
        // this.props.getScenes(Number(adventure.routes.find(route => route.isInitialRoute).route_id))
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
                                <CardText><i onClick={this.handleUp} style={{ 'cursor': 'pointer' }} class="material-icons">thumb_up</i> {adventure.adv_votes} <i onClick={this.handleDown} style={{ 'cursor': 'pointer' }} class="material-icons">thumb_down</i> {adventure.adv_downvotes} </CardText>
                                <CardLink> <Link to={`/adventures/${adventure.adventure_id}`} >Go On Adventure!</Link> </CardLink>

                                {adventure.routes ?
                                    <AdventuringContainer initialRoute={adventure.routes ? adventure.routes.find(route => route.isInitialRoute) : null} />
                                    : null
                                }

                            </CardBody>
                        </Card>
                    </Col>
                </div>
            </div>
        )
    }
}



export default connect(null, { upVoteAdventure, downVoteAdventure, getScenes })(Adventure) 