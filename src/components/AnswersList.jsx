import React from 'react';
import {Answer} from './'

const AnswersList = (props) => {
    return (
        <div className="c-grid__answer">
            {props.answers.map((value, index) => {
                return <Answer key={index} nextId={value.nextId} content={value.content} select={props.select} />
            })}
        </div>
    )
}

export default AnswersList