import React, { Component } from 'react'
import { Button } from 'reactstrap'
import Decision from './Decision'

class Decisions extends Component {

    state = {
        decisionRouteId: undefined
    }

    componentDidMount() {
        this.props.getDecisions(this.props.dialogue.dialogue_id)
    }



    render() {
        const { dialogueDecisions, dialogue, adventure } = this.props
        const mappeddialogueDecisions = dialogueDecisions ?
            dialogueDecisions.decisions.map(decision => <Decision key={decision.decision_id} decision={decision} makeDecision={this.props.makeDecision} />) :
            null
        return (
            <div>
                {mappeddialogueDecisions}
            </div>
        )
    }
}

export default Decisions