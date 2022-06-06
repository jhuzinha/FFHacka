import styled from 'styled-components'

export const MapsContainer = styled.div`
    height: 100vh;

    .marker {
        margin-top: -30px;
    }
`

export const ProfileContainer = styled.div`
    
`

export const PerfilToggle = styled.div`
    position: absolute;
    left: 32px;
    top: 64px;

    img {
        height: 64px;
        width: 64px;
        background: #000;
        border: 3px solid #FFFFFF;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
        border-radius: 100%;
        cursor: pointer;
        object-fit: cover;
    }
`