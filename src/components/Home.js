import React from 'react';
import { projectDescription, projectPlan } from '../content';

function Home() {
    return (
        <>
            <div>
                <h2 class='header-text'>FiTR Skills App</h2>
            </div>
            {
                projectDescription.map( (paragraph) => (
                    <div className='bodyText'>{paragraph}</div>
                ))
            }
            <div>
                <h3 class='subheader-text'>Project Plan</h3>
            </div>
            {
                projectPlan.map( (paragraph) => (
                    <div className='bodyText'>{paragraph}</div>
                ))
            }
            

        </>
    );
}
  
export { Home };