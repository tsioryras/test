import React, {useState} from 'react';
import ReactDom from "react-dom";
import PageContent from './PageContent';
import MenuAdmin from "./MenuAdmin";

const Dashboard = () => {
    const [currentAdminPage, setCurrentAdminPage] = useState('Accueil');

    const onNavigateHandler = (page) => {
        setCurrentAdminPage(page);
    };

    ReactDom.render(<MenuAdmin onChangePage={onNavigateHandler}/>, document.querySelector('div.sidebar'));
    return (
        <PageContent page={currentAdminPage}/>
    );
};
export default Dashboard;