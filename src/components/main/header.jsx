import React from 'react';

import name from '../../images/name.png';
import fe from '../../images/fe-dev.png';

import { 
    Container,
    NameImg,
    LabelImg,
} from '../../styles/main/header';


const Header = () => {
    return(
        <Container>
            <NameImg src={ name } alt={ 'Dinna Gonzales' } />
            <LabelImg src={ fe } alt={ 'Frontend Developer, Los Angeles CA' } />
        </Container>
    );
};
export default Header;