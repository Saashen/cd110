/* eslint-disable react/prop-types */
import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const ExperienceTemplate = ({
  title, time, location, responsibilities, stack,
}) => (
  <>
    <h3>{title}</h3>
    <p>{time}</p>
    <p>{location}</p>
    <ul>
      {responsibilities.map((responsibility) => <li key={uuidv4()}>{responsibility}</li>)}
    </ul>
    {stack && (
    <p>
      Technical stack:&#160;
      {stack}
    </p>
    )}
  </>
);

export default ExperienceTemplate;
