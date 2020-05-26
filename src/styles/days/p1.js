import styled, { css } from 'styled-components';
import { theme, colors } from '../index';
import { media } from '../media';

export const ProjectOne = styled.div.attrs({
    className: 'ProjectOne'
})`
    .container{
        border: 1px solid #c3996c;
        box-shadow: rgb(235,229,219) 5px 5px 0px;
        background: #c3996c;
        border-radius: 50%;
        margin: 40px auto;
        width: 300px;
        height: 300px;
        position: relative;
    }

    .bear,
    .bear-copy{
        margin: 80px auto 10px;
        background: #754d29;
        width: 150px;
        height: 150px;
        border-top-left-radius: 30%;
        border-top-right-radius: 30%;
        position: relative;
    }

    .bear{
        box-shadow: rgb(235,229,219) 5px 5px 0px;
    }
    .bear-copy{
        z-index: 3;
    }

    .ear-left,
    .ear-right{
        background: #623b14;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        position: absolute;
        top: -15px;
        .inner-ear{
            position: absolute;
            left: 8px;
            top: 8px;
            z-index: 2;
            background: #362016;
            width: 35px;
            height: 35px;
            border-radius: 50%;
        }
    }
    .ear-left{
        left: -15px;
    }
    .ear-right{
        right: -15px;
    }

    .eye-left,
    .eye-right{
        background: #000;
        z-index: 3;
        width: 15px;
        height: 15px;
        border-radius: 50%;
        position: absolute;
        top: 25px;
        .inner-eye{
            position: absolute;
            left: 10px;
            top: 5px;
            z-index: 4;
            background: #fff;
            width: 5px;
            height: 5px;
            border-radius: 50%;
        }
    }
    .eye-left{
        left: 45px;
    }
    .eye-right{
        right: 45px;
    }

    .nozzle{
        position: absolute;
        left: -15px;
        z-index: 4;
        top: 55px;
        height: 50px;
        width: 180px;
        background: #8c603d;
        border-radius: 18px;
        .nose{
            margin: 0 auto;
            width: 0;
            height: 0;
            border-left: 10px solid transparent;
            border-right: 10px solid transparent;
            border-top: 10px solid #000;
        }

        .mouth{
            margin: 20px auto 10px;
            width: 10px;
            height: 10px;
            border: 3px solid #000;
            border-radius: 50%;
        }
    }

`;