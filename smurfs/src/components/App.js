import React, { Component } from "react";
import "./App.css";
import Form from "./SmurfsForm";
import SmurfsList from "./SmurfsList";
class App extends Component {
    render() {
        return (
            <div className="App">
                <header>
                    <h1>SMURFS!</h1>
                    <Form />
                </header>
                <SmurfsList />
            </div>
        );
    }
}

export default App;
