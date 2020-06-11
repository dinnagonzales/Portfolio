import styled, { css } from 'styled-components';
import { theme } from '../index';
import { media } from '../media';

const colors = {
    black: '#000',
    white: '#fff',
    pink: '#fA9FA0',
    mustard: '#FFA23A',
    daisy: '#FAE8D2',
    blue: '#509C9E',
    grey: '#443F4E',
    darkGrey: '#6D6F71',
    lightBlack: '#434343',
    yellow: '#FDDDA6',
    flesh: '#FEF5EC',
    lightGrey: '#E9E2DC',   //
    darkPurple: '#4A325C',
    blueGrey: '#77889F',
    beige: '#E9E2DC',
};

export const ProjectTwo = styled.div.attrs({
    className: 'ProjectTwo'
})`
    height: auto;
    padding: 20px;

    .radio{
        margin: 0 auto 50px;
        width: 100%;
        max-width: 550px;
        
        &-top{
            height: 100px;
            display: grid;
            grid-template-columns: 10fr 1fr;
            position: relative;
            &_buttons{
                text-align: center;
                .buttons{
                    padding: 0;
                    margin: 0;
                    display: inline-block;
                    list-style: none;
                    position: absolute;
                    left: 0; right: 0;
                    bottom: -15px;
                    z-index: 1;

                    width: 100%;
                    li{
                        border-top-left-radius: 8px;
                        border-top-right-radius: 8px;
                        margin-right: 5px;
                        width: 50px;
                        height: 30px;
                        display: inline-block;
                        background: ${colors.lightGrey};

                        &:active {
                            transform: translateY(4px);
                        }
                    }
                }
                .labels{
                    position: relative;
                    z-index: 3;
                    font-size: 12px;
                    color: ${colors.white};
                    text-transform: uppercase;

                    padding: 0;
                    margin: 0;
                    display: inline-block;
                    list-style: none;
                    position: absolute;
                    bottom: -35px;
                    width: 100%;
                    left: 0; right: 0;
                    li{
                        margin-right: 5px;
                        width: 50px;
                        height: 30px;
                        display: inline-block;
                    }
                }
            }
            &_antena{
                position: relative;
                &-head{
                    margin: 0 auto;
                    height: 25px;
                    width: 25px;
                    border-radius: 50%;
                    background: ${colors.darkPurple};
                }
                &-body{
                    margin: -20px auto 0;
                    background: ${colors.darkPurple};
                    height: 100%;
                    width: 5px;
                }
            }
        }
        &-main{
            background: ${colors.blueGrey};

            position: relative;
            z-index: 2;
            height: 350px;
            padding: 20px;
            border-radius: 10px;
            box-sizing: border-box;

            &-top{
                height: 35%;
                padding: 20px 10px 10px;
                display: grid;
                grid-template-columns: 1fr 6fr 1fr;
                
                div{
                    height: 100%;
                }
                &_display{
                    height: 90%;
                    border-radius: 15px;
                    background: ${colors.flesh};
                }
                &_ctaContainer{
                    div{
                        padding: 10px;
                        height: 50%;
                        box-sizing: border-box;
                    }
                    button{
                        border: 0;
                        display: block;
                        height: 30px;
                        width: 30px;
                        border-radius: 50%;
                        margin: 0 auto;
                        background: ${colors.white};

                        &:focus{
                            outline: 0;
                        }

                        border: none;
                        border-radius: 15px;
                        box-shadow: 2px 9px ${colors.grey};

                        &:active {
                            box-shadow: 2px 5px ${colors.black};
                            transform: translateY(4px);
                        }
                    }
                }
            }
            &-bottom{
                height: 65%;
                display: grid;
                grid-template-columns: 4fr 3fr;
                grid-gap: 10px;
                ${media.mediumUp`
                    grid-template-columns: 3fr 4fr 3fr;
                `};
                &_tape{
                    height: 80%;
                    padding: 5px 10px;
                    position: relative;
                    background: ${colors.beige};
                    border-radius: 10px;

                    ul{
                        position: relative;
                        width: 100%;
                        text-align: center;
                        padding: 0;
                        margin: 0;
                        display: inline-block;
                        list-style: none;

                        li{
                            margin-right: 5px;
                            width: 20px;
                            height: 40px;
                            border-radius: 15px;
                            display: inline-block;
                            background: ${colors.white};
                        }
                    }
                }
                &_speaker{
                    text-align: center;
                    box-sizing: border-box;
                    &-outer{
                        background: rgb(74,67,85);
                        background: linear-gradient(280deg, rgba(74,67,85,1) 0%, rgba(137,114,153,1) 100%);
                        border: 5px solid ${colors.beige};
                        margin: 15px auto;
                        width: 140px;
                        height: 140px;
                        border-radius: 50%;
                        position: relative;
                    }
                    &-inner{
                        position: absolute;
                        left: 50%;
                        top: 50%;
                        transform: translate(-50%, -50%);           
                        width: 40px;
                        height: 40px;
                        border-radius: 50%;
                        background: ${colors.grey};
                    }
                
                  &.left{
                      ${media.small`
                          display: none;
                      `};
                  }
                }
                
            }
        }
    }
`;

export const TapeContainer = styled.div.attrs({
    className: 'TapeContainer'
})`
    margin: 10px auto;
    height: 100px;
    width: 100%;
    min-width: 150px;
    border-radius: 15px;
    background: ${colors.lightBlack};
`;