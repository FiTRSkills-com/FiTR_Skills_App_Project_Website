import React from 'react';
import { projectDescription } from '../content';

function Home() {
    return (
        <>
            <div>
                <h2 class='header-text'>FiTR Skills App</h2>
            </div>
        {
            projectDescription.map( (paragraph) => (
                <p className='bodyText'>{paragraph}</p>
            ))
        }
        </>
    );
}
  
export { Home };