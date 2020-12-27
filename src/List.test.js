// make React available
import React from 'react';

// make the ReactDOM available, necessary for rendering the component
import ReactDOM from 'react-dom';

// make the Card component available
import List from './List.js';
import './List.css';

// this is the test case
it('renders without crashing', () => {
    // first create a DOM element to render the component into
    const div = document.createElement('div');
  
    // render the component, this is the actual test, if something is wrong it will fail here
    ReactDOM.render(<List header="Test Header" cards="1" />, div);
  
    // clean up code
    ReactDOM.unmountComponentAtNode(div);
  });