import React from 'react';
import { metric } from '../content';

function Metric() {
    return (
        <>
        {
            metric.map( (paragraph) => (
                <p className='bodyText'>{paragraph}</p>
            ))
        }
        </>
    );
}
  
export { Metric };