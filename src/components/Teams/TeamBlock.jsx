import React from "react";
import { useSelector } from "react-redux";

function TeamBlock() {

    // const teams = useSelector(state => state.teams)

    // const team = teams.find( el => el.id == teamID )

    return (
        <div>
            {/* <img src={team.flagImage}></img> */}
            <p>spot for a team</p>
            {/* <h2>{team.name}</h2>
            <h3>{team.captain} <i>Cpt</i></h3>
            <h3>{team.member2}</h3>
            <h3>{team.member3}</h3> */}
            <h3>{team.member4}</h3>

        </div>
    )

}

export default TeamBlock;