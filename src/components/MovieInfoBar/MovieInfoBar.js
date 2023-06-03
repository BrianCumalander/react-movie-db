import React from "react";
// Helpers
import { calcTime, convert, convertMoney } from "../../helpers";
// Styles
import { Wrapper, Content, text } from './MovieInfoBar.styles'

const MovieInfoBar = ({ time, budget, revenue }) => (
    <Wrapper>
        <Content>
            <div className="column">
                <p>Running time: {calcTime(time)}</p>
            </div>
            <div className="column">
                <p>Budget: {convertMoney(budget)}</p>
            </div>
            <div className="column">
                <p>Revenue: {convertMoney(revenue)}</p>
            </div>
        </Content>
    </Wrapper>
)



export default MovieInfoBar;