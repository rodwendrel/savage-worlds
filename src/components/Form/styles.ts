import styled from "styled-components";

export const Form = styled.div`
    border: solid #0eeaff 1px;
    background-color: rgba(4, 191, 191, 0);
    opacity: 0.8;
    background-image: linear-gradient(0deg, rgba(4, 191, 191, .2) 50%, rgba(5, 222, 222, .2) 50%);
    background-size: 10px 10px;

    color: #acf0f2;

    width: 25%;
    height:  300px;
    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    input {
        display: flex;
        align-items: center;
        justify-content: center;
        
        width: auto;
        margin: 0 auto;
        margin-top: 20px;
        font-weight: bold;
    }

    #ph {
        color: red;
        font-weight: bolder;
        
        margin-top: 25px;
    }

    .text {
        width: 200px;
        height: 25px;
        padding: 10px;
    }

    .enter {
        width: 75px;
        height: 25px;
        cursor: pointer;
    }

`