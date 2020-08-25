import React from 'react';

const QuestionTypeAC = (props) => {

    const listOptions = props.options.map((optionValue, index) => {
        return <div key={index} className='form-check'>
            <input className='form-check-input' type='radio'
                   name={'question' + props.number}
                   id={'question' + props.number + index}
                   value={optionValue}/>
            <label className='form-check-label' htmlFor={'question' + props.number + index}>
                {optionValue}
            </label>
        </div>
    });
    return (
        <div className={'text-left form-group ' + props.display}>
            <h1>{props.title}</h1>
            <h2>{props.label}</h2>
            {listOptions}
        </div>
    );
};
export default QuestionTypeAC;

