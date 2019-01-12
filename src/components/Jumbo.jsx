import React from 'react';
import { Jumbotron, Button } from 'reactstrap';


class Jumbo extends React.Component {
    render () {
        return (
        <div class="container">
          <Jumbotron>
            <h1 className="display-3">Muhammad Rosyid Ridlo</h1>
            <p>I am a IT Support Now But I want to be Developer in the future.</p>
            <p className="lead">
              <Button color="primary">Learn More</Button>
            </p>
          </Jumbotron>
        </div>
        )
    }
}

export default Jumbo;