import React from 'react';

import hello from '../images/hello.png'

import resume from '../misc/resume.pdf';

import { 
    Container,
    Button,
    Content,
} from '../styles/main';


const Main = () => {
    return(
        <Container>
            <Content>
                <img className={ 'WelcomeText' } src={ hello } alt={ 'Hello!' } />
                <h2 className={ 'ComingSoon' }>
                    Thanks for stopping by. <br />
                    More content to come soon!
                </h2>
                <Button href={ resume } target={ '_blank' }>
                    Download my resume
                </Button>
            </Content>
        </Container>
    );
};
export default Main;