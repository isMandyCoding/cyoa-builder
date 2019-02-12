import React, { Component } from 'react'
import { Button } from 'reactstrap'

class Decision extends Component {

    componentDidMount() {
        this.props.getDecisions(this.props.dialogue.dialogue_id)
    }

    render() {
        const { dialogueDecisions, dialogue, adventure } = this.props
        const mappeddialogueDecisions = dialogueDecisions ? dialogueDecisions.decisions.map(decision => <Button key={decision.decision_id} >{decision.label}</Button>) : null
        return (
            <div>
                {mappeddialogueDecisions}
            </div>
        )
    }
}

export default Decision