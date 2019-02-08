import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    Card, CardImg, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle,
    Col, Button
} from 'reactstrap';
import { Route, Link } from 'react-router-dom'
import { upVoteAdventure, downVoteAdventure } from '../redux/actions/adventures'

class Adventure extends Component {

    handleDown = () => {
        this.props.downVoteAdventure(this.props.adventure.adventure_id)
    }

    handleUp = () => {
        this.props.upVoteAdventure(this.props.adventure.adventure_id)
    }

    render() {
        const { adventure, history } = this.props
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
                                {/* <Button onClick={() => history.replace(`adventures/${adventure.adventure_id}`)} >Go On Adventure!</Button> */}
                                <CardLink> <Link to={`/adventures/${adventure.adventure_id}`} >Go On Adventure!</Link> </CardLink>
                                <CardLink href="#">Another Link</CardLink>
                            </CardBody>
                        </Card>
                    </Col>
                </div>
            </div>
        )
    }
}



export default connect(null, { upVoteAdventure, downVoteAdventure })(Adventure) 