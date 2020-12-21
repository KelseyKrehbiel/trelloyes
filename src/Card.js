/*
The Card component should render markup matching the design.html: 
a div with a class of 'Card' containing an h3 for the card's title 
and a p element for the card's content.
The Card component accepts 2 props: title and content.
    title is a string of the card's title.
    content is a string of the card's content.
    These props will be passed in for each Card from the List component.

*/

import React from 'react';
import List from './List';

function Card(props) {
  return (
    <div class="Card">
        <button type="button">delete</button>
        <h3>{props.title}</h3>
        <p>{props.content}</p>
    </div>
  );
}

Card(List);

export default Card;