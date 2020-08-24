import React, {useState} from 'react';
import Question from './Question';

const SurveyFrom = () => {
    const [data, setData] = useState([
        {
            label: 'votre email',
            type: 'B'
        },
        {
            label: 'nombre d\'enfants',
            choices: [1, 2, 3, 4, 5],
            type: 'C'
        }, {
            label: 'fruits',
            choices: ['banane', 'pomme de ciel', 'orange'],
            type: 'A'
        }
    ]);

    const totalQuestion = data.length;
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [end, setEnd] = useState('d-none');
    const [prev, setPrev] = useState('d-none');
    const [next, setNext] = useState('');

    const onSendData = (event) => {
        event.preventDefault();
        console.log(data);
    };

    const onNextQuestion = () => {
        setCurrentQuestion(currentQuestion + 1);
        if (currentQuestion >= totalQuestion - 2) {
            setCurrentQuestion(totalQuestion - 1);
            setNext('d-none');
            setEnd('');
        }
        setPrev('');
    }

    const onPrevQuestion = () => {
        setCurrentQuestion(currentQuestion - 1);
        console.log(currentQuestion);
        if (currentQuestion <= 1) {
            setCurrentQuestion(0);
            setPrev('d-none');
        }
        setEnd('d-none');
        setNext('');
    };

    const listQuestions = data.map((question, key) => {
        return key === currentQuestion ?
            <Question key={key} number={key + 1}
                      content={question}
                      type={question.type}
                      display='card'/> :
            <Question key={key} number={key + 1}
                      content={question}
                      type={question.type}
                      display='d-none'/>

    });

    return (
        <div className="text-center card">
            <form action="" onSubmit={onSendData}>
                {listQuestions}
                <div>
                    <button className={'btn btn-primary ' + prev} type='button' onClick={() => onPrevQuestion()}> prev
                    </button>
                    <button className={'btn btn-primary ' + next} type='button' onClick={() => onNextQuestion()}> next
                    </button>
                    <button className={'btn btn-primary ' + end} id="submit" name="submit" type="submit">Valider
                    </button>
                </div>
            </form>
        </div>
    )
};

export default SurveyFrom;