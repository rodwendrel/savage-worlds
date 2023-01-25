import styled from "styled-components";

export const Nav = styled.nav`

    border: solid #0eeaff 1px;
    background-color: rgba(4, 191, 191, .0);
    opacity: 0.8;
    background-image: linear-gradient(0deg, rgba(4, 191, 191, .2) 50%, rgba(5, 222, 222, .2) 50%);
    background-size: 10px 10px; 
    color: #acf0f2;

    margin-bottom: 25px;
    padding: 20px;

    h3 {
        font-size: 1.5rem;
    
    }

    ul {
        display: flex;
        justify-content: space-evenly;

        list-style: none;
    }

    button {
        background: none;
        color: #acf0f2;
        cursor: pointer;

    }

    button:hover {
        font-weight: 700;
    }
`