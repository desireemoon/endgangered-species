import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import NotFound from './NotFound'
import AnimalList from './AnimalList'
import Status from './Status'
import AnimalContainer from './AnimalContainer'
import Home from './Home'

class Main extends Component {
    constructor(props) {
        super(props)
        this.state = ({
            animal: '',
        })
    }



    render() {

        return (
            <div className="App">
                <main>
                    <Switch>
                          <Route exact path="/" render={() => <Home />} />
                        <Route
                            exact path="/animals"
                            render={() => <AnimalList animals={this.props.animals} handleClick={this.props.handleClick} />}
                        />
                        <Route
                            exact path="/animals/:details"
                            render={() => <AnimalContainer animals={this.props.animals} animal={this.props.animal} />}
                        />
                        <Route
                            exact path="/random"
                            render={() => <AnimalContainer animals={this.props.animals} animal={this.props.randomAnimal} />}
                        />
                        <Route
                            exact path="/status"
                            render={() => <Status animals={this.props.animals} />}
                        />
                        <Route component={NotFound} />
                    </Switch>
                </main>
            </div>
        );
    }
}

export default Main