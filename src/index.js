import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {StoreProvider} from './Store';
import {DndProvider} from 'react-dnd';
import {HTML5Backend} from 'react-dnd-html5-backend';

ReactDOM.render(<StoreProvider><DndProvider backend={HTML5Backend}><App /></DndProvider></StoreProvider>, document.getElementById('root'));