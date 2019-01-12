import React from 'react';
import { Progress } from 'reactstrap';

class Skill extends React.Component {
    render () {
        return (
            <div class="container">
            <div className="text-center">PC Assembly</div>
            <Progress color="info" value="85" />
            <div className="text-center">Troubleshoot</div>
            <Progress color="success" value={80} />
            <div className="text-center">Networking</div>
            <Progress color="warning" value={65} />
            <div className="text-center">HTML,CSS,Javascript</div>
            <Progress color="danger" value="60" />
            <div className="text-center">PHP</div>
            <Progress color="info" value="50" />
            <div className="text-center">ReactJS</div>
            <Progress color="success" value="40" />
            <div className="text-center">SailsJS</div>
            <Progress color="warning" value="35" />
            </div>
            
        )
    }
}

export default Skill;