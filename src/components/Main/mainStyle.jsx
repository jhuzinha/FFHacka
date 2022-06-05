import styled from "styled-components";

export const MainContainer  = styled.section`
    background-color: #0D1724;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 200px;

    figure {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: end;
        position: relative;
    }

    img {
        position: absolute;
    }
`

export const Buttons = styled.div`
    width: 100%;
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 100px;



    button {
        border: none;
        width: 80%;
        background: linear-gradient(270deg, #012AFF 0%, #5570FF 100%);
        box-shadow: 0px 15px 30px rgba(20, 102, 204, 0.16);
        border-radius: 16px;
        height: 56px;
        margin-bottom: 17px;
        color: #ffffff;
        font-weight: bold;
        font-size: 15px;
        line-height: 14px;
    }

    div {
        width: 80%;
        color: #2347FF;
        height: 56px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1.5px solid #284BFF;
        box-shadow: 0px 15px 30px rgba(20, 102, 204, 0.16);
        border-radius: 16px;
     }

    
`