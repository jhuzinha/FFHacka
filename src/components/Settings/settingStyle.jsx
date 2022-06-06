import styled from "styled-components";


export const ContainerSettings = styled.section `
    width: 100%;
    height: 100%;
    div {
        width: 80%;
        height: 1px;
    }


`

export const Informs = styled.div`
    padding: 20px;


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