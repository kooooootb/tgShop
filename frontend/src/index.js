import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import ListProductsByURL from './components/ListProductsByURL';
import ListProductsByTemplate from "./components/ListProductsByTemplate";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ListProductsByTemplate />
        {/*<ListProductsByURL />*/}
    </React.StrictMode>
);
