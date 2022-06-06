import styled from "styled-components";


export const ContainerMessage = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;


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

export const Message = styled.div`
    margin:  20px;
    padding: 15px;
    background: #526EFF;
    color: rgba(13, 16, 36, 1);
    width: 50%;
    min-height: 100px;
    border-radius: 10px 20px 0px 20px;
    margin-bottom: 50px;
    position: relative;
    p { 
        font-size: 10px;
        margin-top: 15px;
        position: absolute;
        bottom: 0;
        left: 0;
        padding: 10px;
    }
    h6 {
        font-size: 10px;
        color: black;
        margin-bottom: 10px;
    }
`