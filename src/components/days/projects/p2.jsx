import React from 'react';

import {
    ProjectTwo,
    TapeContainer,
} from '../../../styles/days/p2';

const Tape = () => {
    return(
        <TapeContainer>

        </TapeContainer>
    )
};
const Two = () => {
    return(
        <ProjectTwo>
            <div className={'radio'}>
                <div className={'radio-top'}>
                    <div className={'radio-top_buttons'}>
                        <ul className={ 'buttons' }>
                            <li/><li/><li /><li /><li />
                        </ul>
                        <ul className={ 'labels' }>
                            <li>{ '<<' }</li>
                            <li>Play</li>
                            <li>Stop</li>
                            <li>{ '>>' }</li>
                            <li>Eject</li>
                        </ul>
                    </div>
                    <div className={'radio-top_antena'}>
                        <div className={ 'radio-top_antena-head'} />
                        <div className={ 'radio-top_antena-body '} />
                    </div>
                </div>
                <div className={'radio-main'}>
                    <div className={'radio-main-top'}>
                        <div className={'radio-main-top_left'}>
                            
                        </div>
                        <div className={'radio-main-top_display'}>
                            
                        </div>
                        <div className={'radio-main-top_ctaContainer'}>
                            <div><button /></div>
                            <div><button /></div>
                        </div>    
                    </div>
                    
                    <div className={'radio-main-bottom'}>
                        <div className={'radio-main-bottom_speaker left'}>
                            <div className={'radio-main-bottom_speaker-outer'}>
                                <div className={'radio-main-bottom_speaker-inner'} />
                            </div>
                        </div>
                        <div className={'radio-main-bottom_tape'}>
                            <Tape />
                            <ul className={ 'buttons' }>
                                <li/><li/><li /><li /><li />
                            </ul>
                        </div>
                        <div className={'radio-main-bottom_speaker'}>
                            <div className={'radio-main-bottom_speaker-outer'}>
                                <div className={'radio-main-bottom_speaker-inner'} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ProjectTwo>
    );
};
export default Two;