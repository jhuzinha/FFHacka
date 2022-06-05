import styled from "styled-components";

export const LoginContainer = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    header {
        height: 143px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-bottom: 100px;
    }
`

export const Forms = styled.form`
     display: flex;
     flex-direction: column;
     width: 80%;


    label {
        display: flex;
        flex-direction: column;
        font-size: 12px;
        margin-bottom: 24px;
    }

    input {
        height: 56px;
        border: 1px solid #4048BF;
        border-radius: 8px;
        background: #0D1724;
        padding: 10px;
        color: #B0C0C7;
        font-size: 14px;
    }

    button {
        width: 30%;
        height: 50px;
        background: linear-gradient(90deg, #3F48C0 0%, #143AFE 110.62%);
        box-shadow: 0px 15px 30px rgba(20, 102, 204, 0.16);
        border-radius: 16px;
        border: none;
        color: white;
        margin-right: 20px;
        font-size: 16px;
        font-weight: bold;
    }

    p {
        font-size: 14px;
    }

    div {
        display: flex;
        align-items: center;
    }

`