import React from 'react';

const QuestionTypeB = (props) => {

    return (
        <div className={'text-center form-group ' + props.display}>
            <h1>{props.number} /20 Questions</h1>
            <h2>{props.label}</h2>
            <div className="form-group">
                <label htmlFor={props.number}>{props.label}</label>
                <input type="text" className="form-control" name={props.number} id={props.number}/>
            </div>
        </div>
    );
};
export default QuestionTypeB;

