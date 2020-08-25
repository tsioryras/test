import React from 'react';
import ReactDom from 'react-dom';
import SurveyForm from './users/SurveyForm';
import Dashboard from './admin/Dashboard';
import '../../sass/app.scss';

const rootElement = document.getElementById('root');
const adminElement = document.getElementById('page-content');

if (rootElement) {
    ReactDom.render(<SurveyForm/>, rootElement);
}

if (adminElement) {
    ReactDom.render(<Dashboard/>, adminElement);
}
