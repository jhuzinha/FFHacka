import styled from "styled-components";

export const Foot = styled.footer`
    width: 100%;
    background: #0D1724;
    box-shadow: 0px 12px 30px rgba(0, 0, 0, 0.16);
    border-radius: 48px 0px 0px 0px;
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 24px;
    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 24px;
        cursor: pointer;
    }
    div > div {
        width: 48px;
        height: 3px;
        border-radius: 3px;
        margin-top: 10px;
    }

    .place-icon {
        background-color: ${({ place }) => place ? '#526EFF' : 'transparent'};
    }

    .emergency-icon {
        background-color: ${({ emergency }) => emergency ? '#526EFF' : 'transparent'};
    }
`

export const PlaceSelected = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    height: 350px;
    background-color: #526EFF;

    position: fixed;
    bottom: 0;
    border-top-left-radius: 48px;
    color: #0D1724;
    padding: 15px;

    .place {
        display: flex;
        justify-content: center;
        margin-bottom: 16px;
        width: 100%;
    }

    .suports {
        display: flex;
        margin-bottom: 33px;
    }

    img {
        width: 167px;
        height: 91px;
        border-radius: 40px;
        margin-right: 15px;
        object-fit: cover;
    }

    h1 {
        font-size: 15px;
        font-weight: bold;
        margin-bottom: 5px;
    }

    span, h3 {
        font-size: 21px;
        font-weight: 600;
    }

    h2 {
        font-weight: 13px;
        font-weight: 300;
    }

    p {
        font-size: 14px;
        font-weight: 600;
        margin-right: 8px;
    }

    .info {
        display: flex;
        justify-content: space-between;
        margin-top: 20px;
    }

    button {
        width: 100%;
        height: 63px;
        margin-bottom: 22px;
        outline: none;
        background: #0D1724;
        opacity: 0.5;
        border: 1px solid #0D1724;
        border-radius: 20px;
        color: #fff;
        cursor: pointer;
        transition: all 200ms ease-in-out;
    }

    button:hover {
        filter: brightness(0.5);
    }
`

export const Emergency = styled.div`
    background: rgba(0, 0, 0, 0.69);
    height: 100%;
    width: 100%;
    position: fixed;
    bottom: 0;
    top: 0;

    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;
        height: 80%;
    }

    button {
        width: 350px;
        height: 60px;
        background: linear-gradient(90deg, #546FFF 0%, #022BFF 100%);
        border-radius: 30px;
        margin-bottom: 22px;
        outline: none;
        border: none;
        cursor: pointer;
        transition: all 200ms ease-in-out;
        color: #FFF;
        font-size: 21px;
    }

    button:hover {
        transform: scale(1.05);
    }

    .emergency {
        background: none;
        background-color: #FF2D55;
    }
`