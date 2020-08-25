import React, {useState} from 'react';
import axios from "axios";

let url;
const PageContent = (props) => {
    const [content, setContent] = useState('');

    switch (props.page) {
        case 'question':
            url = 'http://localhost:3000/administration/users';
            break;
        case 'answer':
            url = 'http://localhost:3000/administration/users';
            break;
        default:
            url = 'http://localhost:3000/administration/users';
            break;

    }

    const dataGet = axios.get(url).then(function (response) {
        setContent(<h1>{response.data[0].name}</h1>);
    }).catch(function (error) {
        console.log(error);
    });

    return (
        <div>{content}</div>
    );
};
export default PageContent;