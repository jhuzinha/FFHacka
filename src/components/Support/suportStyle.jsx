import styled from "styled-components";

export const SupportContainer = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p {
        padding: 20px;
        font-size: 14px;
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
        border: none;
        border-bottom: 1px solid #4048BF;
        border-radius: 8px;
        background: #0D1724;
        padding: 10px;
        color: #B0C0C7;
        font-size: 14px;
    }

    textarea {
        resize: none;
        height: 80px;
        border: 1px solid #4048BF;
        border: none;
        border-bottom: 1px solid #4048BF;
        border-radius: 8px;
        background: #0D1724;
        padding: 10px;
        color: #B0C0C7;
        font-size: 14px;
    }

    button {
        width: 100%;
        height: 50px;
        border-radius: 35px;
        background-color: #0D1724;
        border: 1px solid rgba(82, 110, 255, 1);
        color: rgba(82, 110, 255, 1);
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
        justify-content: center;
    }

`

export const Head = styled.header`
    height: 200px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: initial;
    font-weight: 600;
    font-size: 21px;
    color: #0D1724;
    background: #526EFF;
    width: 100%;
    position: relative;
    margin-bottom: 50px;     
    div {
        position: absolute;
        bottom: 0; 
        background:  #0D1724;
        border-radius: 48px 0px 0px 0px;
        width: 100%;
        height: 50px;
    }

    h1 {
        margin: 0 30px 0 30px;
        font-size: 32px;
        line-height: 39px;
        color: #0D1724;
    }    

`