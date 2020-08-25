import React from 'react';
import ReactDom from 'react-dom';
import SurveyForm from './users/SurveyForm';
import Dashboard from './admin/Dashboard';
import '../../sass/app.scss';

{window.location.href === "https://www.example.com/app.html " ? <App /> : ''}
{window.location.href === "https://www.example.com/products.html " ? <Products/> : ''}
ReactDom.render(<SurveyForm/>, document.getElementById('root'));
ReactDom.render(<Dashboard/>, document.getElementById('body_content'));