import styled from "styled-components";

export const Register = styled.div`

    display: grid;
    grid-template-columns: 2fr 5.5fr;


.left-content {
    border: solid #0eeaff 1px;
    background-color: rgba(4, 191, 191, .0);
    opacity: 0.8;
    background-image: linear-gradient(0deg, rgba(4, 191, 191, .2) 50%, rgba(5, 222, 222, .2) 50%);
    background-size: 10px 10px; 
    color: #acf0f2;

    height: 86vh;
    width: 25vw;

    padding: 25px;

}

    ul {
        display: flex;
        justify-content: space-evenly;

        list-style: none;

        display: flex;
        flex-direction: column;
        gap: 30px;

        justify-content: center;
        align-items: center;

    }

    button {
        background: none;
        color: #acf0f2;
        cursor: pointer;
        font-size: 3rem;

        transition: .2s;

    }

    button:hover {
        font-weight: 700;
        border-bottom: solid 1px #0eeaff;

    }

`