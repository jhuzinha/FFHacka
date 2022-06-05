import styled from 'styled-components'

export const SearchContainer = styled.div`
    width: ${({ width }) => width};
    height: 100%;
    position: fixed;
    top: 0;
    bottom: 0;
    transition: all 500ms ease-in-out;
    background-color: #0D1724;
    padding-top: 60px;

    input {
        width: 100%;
        display: ${({ display }) => display};
        outline: none;
        border: none;
        background-color: #0D1724;
        color: #fff;
        font-size: 16px;
        font-weight: 600;
        text-align: center;
        margin-bottom: 50px;
    }

    input::placeholder {
        color: #fff;
    }

    p {
        font-size: 21px;
        padding-bottom: 25px;
        border-bottom: 1px solid gray;
        width: 95%;
        margin: 0 auto;
        margin-bottom: 25px;
    }
`