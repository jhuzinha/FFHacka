import styled from 'styled-components'

export const EmergencyContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    div:first-child {
        display: flex;

        height: 200px;
        width: 100%;
        background-color: #526EFF;
        font-size: 32px;
        font-weight: 600;
        color: #0D1724;
        padding-top: 50px;
        padding-left: 20px;
    }

    h1 {
        margin-left: 10px;
    }

    .content {
        margin-top: -40px;
        height: 100px;
        width: 100%;
        background-color: #0D1724;
        border-radius: 48px 0 0 0;
    }

    .sugestions {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: -140px;
    }

    button {
        background-color: #0D1724;
        color: #fff;
        font-size: 20px;
        font-weight: 600;
        width: 349px;
        height: 116px;
        margin-bottom: 24px;
        outline: none;
        border: none;
        box-shadow: 0px 12px 30px rgba(0, 0, 0, 0.16);
        border-radius: 24px;
        cursor: pointerw;
    }
`