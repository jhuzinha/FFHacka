import styled from "styled-components";

export const SolicitContainer = styled.section `
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`

export const Head = styled.header`
    height: 200px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
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
        font-size: 24px;
        line-height: 39px;
        color: #0D1724;
    }    

`

export const Menssage = styled.div`
    width: 80%;
    height: auto;
    box-shadow: 0px 12px 30px rgba(0, 0, 0, 0.16);
    border-radius: 24px;
    min-height: 114px;
    background-color: #151624;
    padding: 20px;
    margin-bottom: 15px;
    div {
        display: flex;
        justify-content: space-between;
        font-size: 20px;
        margin-bottom: 30px;
        p {
            font-size: 15px;
            color: rgba(255, 255, 255, 0.3);
        }
    }
`