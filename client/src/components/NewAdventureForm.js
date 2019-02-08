import React, { Component } from 'react'
import {
    Container,
    Row,
    Col,
    Form,
    FormGroup,
    Label,
    Input,
    Button,
    FormFeedback,
    FormText,
} from "reactstrap";

class NewAdventureForm extends Component {
    state = {
        user_id: 1,
        description: "",
        title: "",
        img_url: "",
        tags: "",
        formErrors: { user_id: "", description: "", title: "", img_url: "", tags: "" },
        formValid: false,
    };

    handleSubmit = e => {
        e.preventDefault();
        const newPost = {
            ...this.state,
        };
        // this.props.addNewPost(newPost);
        // this.props.toggleForm();
    };

    handleChange = e => {
        let { name, value } = e.target;
        this.setState(
            prevState => {
                return {
                    ...prevState,
                    [name]: value,
                };
            },
            () => this.validateField(name, value)
        );
    };

    handleTab = e => {
        let { name, value } = e.target;
        if (e.key === "Tab") {
            this.setState(
                prevState => {
                    return {
                        ...prevState,
                        [name]: value,
                    };
                },
                () => this.validateField(name, value)
            );
        }
    };

    validateField = (fieldName, value) => {
        let fieldValidationErrors = this.state.formErrors;
        let descriptionValid = this.state.descriptionValid;
        let user_idValid = this.state.user_idValid;
        let titleValid = this.state.titleValid;
        let img_urlValid = this.state.img_urlValid;
        let tagsValid = this.state.tagsValid

        switch (fieldName) {
            case "title":
                titleValid = value.trim().length;
                fieldValidationErrors.title = titleValid ? "" : "Please enter a title";
                break;
            case "description":
                descriptionValid = value.trim().length;
                fieldValidationErrors.description = descriptionValid
                    ? ""
                    : "Please enter a description.";
                break;
            case "img_url":
                img_urlValid = value.trim().length;
                fieldValidationErrors.img_url = img_urlValid
                    ? ""
                    : "Please enter an image URL";
                break;
            case "tags":
                tagsValid = value.trim().length && value.includes(",");
                fieldValidationErrors.tags = tagsValid ?
                    "" :
                    "Please enter tags seperated by commas (i.e. TagName, Horror, Mystery) ";
            default:
                break;
        }
        this.setState({
            formErrors: fieldValidationErrors,
            tagsValid: tagsValid,
            descriptionValid: descriptionValid,
            titleValid: titleValid,
            img_urlValid: img_urlValid,
            formValid: descriptionValid && titleValid && img_urlValid,
        });
    };

    render() {
        return (
            <Container>

                <Row>
                    <Col sm="10">
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup>
                                <Label for="title-field">Title</Label>
                                <Input
                                    invalid={
                                        typeof this.state.titleValid !== "undefined" &&
                                        !this.state.titleValid
                                    }
                                    valid={this.state.titleValid}
                                    onInput={this.handleChange}
                                    onKeyDown={this.handleTab}
                                    type="text"
                                    name="title"
                                    id="title-field"
                                />
                                {typeof this.state.titleValid !== "undefined" &&
                                    this.state.titleValid ? (
                                        <FormFeedback valid>Great title, friend!</FormFeedback>
                                    ) : (
                                        <React.Fragment>
                                            <FormFeedback>{this.state.formErrors.title}</FormFeedback>
                                            <FormText>This field is required</FormText>
                                        </React.Fragment>
                                    )}
                            </FormGroup>
                            <FormGroup>
                                <Label for="body-field">Description</Label>
                                <Input
                                    invalid={
                                        typeof this.state.descriptionValid !== "undefined" &&
                                        !this.state.descriptionValid
                                    }
                                    valid={this.state.descriptionValid}
                                    onInput={this.handleChange}
                                    onKeyDown={this.handleChange}
                                    type="text"
                                    name="description"
                                    id="body-field"
                                />
                                {this.state.descriptionValid ? (
                                    <FormFeedback valid>Great description, friend!</FormFeedback>
                                ) : (
                                        <React.Fragment>
                                            <FormFeedback>{this.state.formErrors.description}.</FormFeedback>
                                            <FormText>This field is required</FormText>
                                        </React.Fragment>
                                    )}
                            </FormGroup>

                            <FormGroup>
                                <Label for="body-field">Tags</Label>
                                <Input
                                    invalid={
                                        typeof this.state.tagsValid !== "undefined" &&
                                        !this.state.tagsValid
                                    }
                                    valid={this.state.tagsValid}
                                    onInput={this.handleChange}
                                    onKeyDown={this.handleChange}
                                    type="text"
                                    name="tags"
                                    id="body-field"
                                />
                                {this.state.descriptionValid ? (
                                    <FormFeedback valid>Great tags, friend!</FormFeedback>
                                ) : (
                                        <React.Fragment>
                                            <FormFeedback>{this.state.formErrors.description}.</FormFeedback>
                                            <FormText>Please add tags seperated by commas.</FormText>
                                        </React.Fragment>
                                    )}
                            </FormGroup>

                            <FormGroup>
                                <Label for="image-field">Image URL</Label>
                                <Input
                                    invalid={
                                        typeof this.state.img_urlValid !== "undefined" &&
                                        !this.state.img_urlValid
                                    }
                                    valid={this.state.img_urlValid}
                                    onKeyDown={this.handleChange}
                                    onInput={this.handleChange}
                                    type="text"
                                    name="img_url"
                                    id="image-field"
                                />
                                {this.state.img_urlValid ? (
                                    <FormFeedback valid>Great image, friend!</FormFeedback>
                                ) : (
                                        <React.Fragment>
                                            <FormFeedback>{this.state.formErrors.img_url}.</FormFeedback>
                                            <FormText>This field is required</FormText>
                                        </React.Fragment>
                                    )}
                            </FormGroup>
                            <Button disabled={!this.state.formValid} type="submit">
                                Submit
                </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default NewAdventureForm