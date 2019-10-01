import React, { useEffect } from "react";
import uuid from "uuid/v1";
import { connect } from "react-redux";
import { getSmurfs } from "./actions/index";
import Smurf from "./Smurf";

function SmurfsList({ state, getSmurfs }) {
    useEffect(() => {
        getSmurfs();
    }, [getSmurfs]);

 
    if (state.isFetching) {
        return <h1>Loading...</h1>;
    }


    return (
        <section>
            <h2>The Smurf Village!</h2>
            <div>
                {state.smurfs.map(smurf => {
                    return <Smurf key={uuid()} smurf={smurf} />;
                })}
            </div>
        </section>
    );
}

const mapStateToProps = state => {
    return {
        state
    };
};
export default connect(
    mapStateToProps,
    { getSmurfs }
)(SmurfsList);
