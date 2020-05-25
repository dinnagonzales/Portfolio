import React from 'react';

import {
    ProjectOne,
} from '../../../styles/days/p1';

const One = () => {
    return(
        <ProjectOne>
            <div className={ 'container' }>
                <div className={ 'bear' }>
                    <div className={ 'bear-copy' } />
                    <div className={ 'ear-left' }>
                        <div className={ 'inner-ear' } />
                    </div>
                    <div className={ 'ear-right' }>
                        <div className={ 'inner-ear' } />
                    </div>

                    <div className={ 'eye-right' }>
                        <div className={ 'inner-eye' } />
                    </div>
                    <div className={ 'eye-left' }>
                        <div className={ 'inner-eye' } />
                    </div>
                    
                    <div className={ 'nozzle' }>
                        <div className={ 'nose' } />
                        <div className={ 'mouth' } />
                        <div className={ 'smile' } />
                    </div>
                </div>
            </div>
        </ProjectOne>
    );
};
export default One;