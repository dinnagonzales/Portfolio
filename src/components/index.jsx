import React, { Fragment } from 'react';
import logo from '../images/logo.png';
import github from '../images/github.png';
import linkedIn from '../images/linkedin.png';
import gmail from '../images/gmail.png';

import { 
    Header,
    Main,
    LinksSection,
    PagesSection,
    Link,
    Icon,
    Footer,
} from '../styles';


const Home = () => {
    return(
        <Fragment>
            <Header>
                <img className={ 'logo' } src={ logo } alt='' />
                <PagesSection className={ 'pages-container' }>
                    <Link href={ '#'}>
                        HOME
                    </Link>
                    <Link href={ '#'}>
                        PROJECTS
                    </Link>
                    <Link href={ '#'}>
                        BLOG
                    </Link>
                    <Link href={ '#'}>
                        ABOUT
                    </Link>
                    <Link href={ '#'}>
                        CONTACT
                    </Link>
                </PagesSection>
            </Header>
            <Main>
                <h1>
                    UNDER CONSTRUCTION
                </h1>
                <img src={ 'https://media0.giphy.com/media/Pm4IA0XrTWwE2DaTMI/giphy.gif?cid=ecf05e47157f6e592fcc1fec327c17fb35a2b2afa1b49b3f&rid=giphy.gif '} alt={ '' } />
            </Main>
            <Footer>
                <span>© 2020 dinnagonzales.com All Rights Reserved</span>
                <LinksSection className={ 'accounts-container' }>
                    <Icon href={ 'https://github.com/dinnagonzales' } aria-label={ 'Github account' } target={ '_blank' } rel='noreferrer noopener'>
                        <img src={ github } alt='' />
                    </Icon>
                    <Icon href={ 'https://www.linkedin.com/in/dinnagonzales/' } aria-label={ 'Linkedin account' } target={ '_blank' } rel='noreferrer noopener'>
                        <img src={ linkedIn } alt='' />
                    </Icon>
                    <Icon href={ 'mailto:dinnapgonzales@gmail.com' } aria-label={ 'Email me at dinnapgonzales@gmail.com' } target={ '_blank' } rel='noreferrer noopener'>
                        <img src={ gmail } alt='' />
                    </Icon>
                </LinksSection>
            </Footer>
        </Fragment>
    );
};
export default Home;