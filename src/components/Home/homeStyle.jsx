import styled from 'styled-components'

export const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    margin: 32px 0;
    margin-left: 32px;

    figure > div {
        display: flex;
        justify-content: space-between;
    }

    figure > div > div {
        transition: all 400ms ease-in-out;
    }

    figure > div > div:hover {
        transform: scale(1.20);
    }

    img {
        width: 100px;
        height: 100px;
        border: 3.6px solid #FFFFFF;
        box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
        border-radius: 100%;
    }

    h1 {
        font-size: 32px;
        margin-top: 17px;
        margin-bottom: 8px;
    }

    p {
        font-size: 18px;
        font-weight: 300;
        color: gray;
        margin-bottom: 15px;

    }

    button {
        width: 243px;
        height: 56px;
        font-size: 15px;
        text-align: center;
        background: linear-gradient(270deg, #012AFF 0%, #5570FF 100%);
        box-shadow: 0px 15px 30px rgba(20, 102, 204, 0.16);
        border-radius: 16px;
        outline: none;
        border: none;
        margin-bottom: 15px;
        cursor: pointer;
        color: #FFFFFF;
        transition: all 400ms ease-in-out;
    }

    button:hover {
        transform: scale(1.05);
    }
`

export const Buttons = styled.div`
    width: 250px;

    .emergency {
        background: none;
        background-color: #FF2D55;
    }
`

export const CloseYou = styled.div`
    margin-top: 15px;
    cursor: pointer;

    & > div {
        margin-bottom: 37px;
    }

    div {
        display: flex;
        align-items: center;
    }

    h2 {
        font-size: 21px;
        font-weight: 600;
        margin-right: 35px;
    }

    h3 {
        font-size: 18px;
        color: gray;
    }

    & > div > div:last-child {
        font-size: 25px;
    }
`

export const Carousel = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    overflow-x: scroll;

    &::-webkit-scrollbar {
        display: none;
    }

    & > div {
        display: flex;
        flex-direction: column;

        width: 322px;
        height: 324px;
        background-color: #526EFF;
        box-shadow: 0px 12px 30px rgba(0, 0, 0, 0.16);
        border-radius: 24px;
        padding: 22px;
        margin-right: 23px;
    }

    img {
        width: 277px;
        height: 153px;
        border-radius: 20px;
        margin-bottom: 12px;
    }

    button {
        width: 196px;
        height: 55px;
        outline: none;
        color: gray;
        font-size: 13px;
        background: #0D1724;
        border-radius: 20px;
        text-align: left;
        box-sizing: border-box;
        padding-left: 21px;
        margin-bottom: 22px;
        cursor: pointer;
    }

    button > span {
        font-weight: 600;
        font-size: 21px;
        color: #fff;
    }

    h4 {
        font-size: 18px;
        font-weight: bold;
        color: #0D1724;
        margin-bottom: 5px;
        margin-right: 8px;
    }

    .avaliation {
        display: flex;
    }
`