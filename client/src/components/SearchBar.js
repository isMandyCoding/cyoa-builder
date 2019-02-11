import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, Row, Col } from 'reactstrap'

export default class SearchBar extends Component {

    handleChange = e => {
        let { name, value } = e.target
        let filterObj = {
            filterPhrase: name === "filterPhrase" ? value : this.props.filterPhrase,
            type: name === "type" ? value : this.props.type
        }
        this.props.filterAdventures(filterObj)
    }

    render() {
        return (
            <div>
                <Form>
                    <Row>

                        <Col>
                            <FormGroup>
                                <Label for="search">Search</Label>
                                <Input
                                    onChange={this.handleChange}
                                    type="search"
                                    name="filterPhrase"
                                    id="search"
                                    placeholder="search"
                                />
                            </FormGroup>
                        </Col>

                        <Col>
                            <FormGroup>
                                <Label for="exampleSelect">Select</Label>
                                <Input onChange={this.handleChange} type="select" name="type" id="select" >
                                    <option value="tags">Tags</option>
                                    <option value="title"> Title</option>
                                </Input>
                            </FormGroup>
                        </Col>

                    </Row>
                </Form>

            </div>
        )
    }
}
