import React, { useState } from "react";
import { connect } from "react-redux";
import { postSmurf } from "./actions/index";

function Form({ postSmurf }) {
    const [smurf, setSmurf] = useState({ name: "", age: "", height: "" });

   
    const changeHandler = e => {
        if (e.target.name === "age") {
            console.log(parseInt(e.target.value));
            setSmurf({ ...smurf, [e.target.name]: parseInt(e.target.value) });
        } else {
            setSmurf({ ...smurf, [e.target.name]: e.target.value });
        }
    };
 
    const submitHandler = e => {
        e.preventDefault();
        postSmurf(smurf);
        setSmurf({ name: "", age: "", height: "" });
    };
    return (
        <React.Fragment>
            <form onSubmit={submitHandler}>
                <input
                    type="text"
                    placeholder="Enter Smurf Name"
                    name="name"
                    value={smurf.name}
                    onChange={changeHandler}
                />
                <input
                    type="text"
                    placeholder="Enter Smurf Age"
                    name="age"
                    value={smurf.age}
                    onChange={changeHandler}
                />
                <input
                    type="text"
                    placeholder="Enter Smurf Height"
                    name="height"
                    value={smurf.height}
                    onChange={changeHandler}
                />
                <button>Submit</button>
            </form>
        </React.Fragment>
    );
}


export default connect(
    null,
    { postSmurf }
)(Form);
