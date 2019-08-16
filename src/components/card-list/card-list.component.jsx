import React from 'react';

import { Card } from '../card/card.component';

import './card-list.styles.css';

//a functional component that we are exporting, different from a class component
export const CardList = props => (
  <div className="card-list">
    {props.monsters.map(monster=>(
      <Card key={monster.id} monster={monster} />
    ))}
  </div>
);