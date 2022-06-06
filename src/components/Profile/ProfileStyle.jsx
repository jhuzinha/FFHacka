import styled from 'styled-components'

export const ProfileContainer = styled.div`
    width: ${({ width }) => width};
    height: 100%;
    position: fixed;
    top: 0;
    bottom: 0;
    z-index: 1;
    transition: all 400ms ease-in-out;
    overflow: hidden;

    .back-black {
        z-index: -1;
        position: fixed;
        top: 0;
        bottom: 0;
        height: 100%;
        width: 100%;
        background: rgba(0, 0, 0, 0.69);
    }

    div:first-child {
        display: flex;
        flex-direction: column;
        align-items: center;

        height: 257px;
        background-color: #526EFF;
    }

    div:last-child {
        padding: 0 ${({ padding }) => padding};
        padding-top: 101px;
        margin-top: -50px;
        height: 100%;
        background-color: #0D1024;
        border-radius: 48px 0px 0px 0px;
    }

    img {
        height: 80px;
        width: 80px;
        border: 3px solid #0D1724;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
        border-radius: 100%;
        margin-bottom: 15px;
        margin-top: 50px;
        cursor: pointer;
    }

    p {
        font-size: 21px;
        color: #0D1724;
    }

    h1 {
        font-size: 21px;
        font-weight: 300;
        color: #fff;
        padding-top: 23px;
        border-top: 1px solid gray;
        margin-bottom: 23px;
        cursor: pointer;
    }

    h1:last-child {
        border-bottom: 1px solid gray;
        padding-bottom: 23px;
    }
`