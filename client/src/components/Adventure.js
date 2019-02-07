import React, { Component } from 'react'
import {
    Card, CardImg, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle,
    Col
} from 'reactstrap';
import { Route, Link } from 'react-router-dom'


class Adventure extends Component {
    render() {
        const { adventure } = this.props
        return (
            <div>
                <div>
                    <Col xs="6" sm="6">
                        <Card>
                            <CardBody>
                                <CardTitle>{adventure.title}</CardTitle>
                                <CardSubtitle>Tags: {adventure.tags.map(tag => <span>{tag.tag_name}, </span>)} </CardSubtitle>
                            </CardBody>
                            <CardImg width="100%" src={adventure.adv_img_url} alt={adventure.title} />
                            <CardBody>
                                <CardText>{adventure.description}</CardText>
                                <Link to={'adventures/${adventure.adventure_id}'} ></Link>
                                <CardLink href="#">Another Link</CardLink>
                            </CardBody>
                        </Card>
                    </Col>
                </div>
            </div>
        )
    }
}

export default Adventure