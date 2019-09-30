import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import NotFound from './NotFound'
import Header from './Header'
import AnimalList from './AnimalList'
import RandomAnimal from './RandomAnimal'
import AnimalContainer from './AnimalContainer'

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
                        <Route exact path="/" render={() => <Header />} />
                        <Route
                            exact path="/animalList"
                            render={() => <AnimalList animals={this.props.animals} handleClick={this.props.handleClick} />}
                        />
                        <Route
                            exact path="/animalList/:details"
                            render={() => <AnimalContainer animal={this.props.animal} />}
                        />
                        <Route
                            exact path="/random"
                            render={() => <AnimalContainer animal={this.props.randomAnimal} />}
                        />
                        <Route component={NotFound} />
                    </Switch>
                </main>
            </div>
        );
    }
}

export default Main