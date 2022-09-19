import React from 'react';
import { projectMetric, productMetric, processMetric } from '../content';

function Metric() {
    return (
        <>
        <div>
        <h2 class='subheader-text'>Process Metric</h2>
        {
            processMetric.map( (paragraph) => (
                <p className='bodyText'>{paragraph}</p>
            ))
        }
        <h2 class='subheader-text'>Product Metric</h2>
        {
            productMetric.map( (paragraph) => (
                <p className='bodyText'>{paragraph}</p>
            ))
        }
        <h2 class='subheader-text'>Project Metric</h2>
        {
            projectMetric.map( (paragraph) => (
                <p className='bodyText'>{paragraph}</p>
            ))
        }</div>
        </>
    );
}
  
export { Metric };