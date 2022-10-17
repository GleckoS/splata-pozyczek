import styled from "styled-components";

export const Label = styled.label`
    display: block;

    .label{
        display: block;
        margin-bottom: 4px;
    }

    .error{
        position: absolute;
        font-size: 10px;
        color: red;
        bottom: 0;
        left: 0;
        transform: translateY(100%);
    }
`

export const Input = styled.input`
    padding: 8px 10px;
    background: #FEF5F5;
    border: 2px solid #75757A;
    border-radius: 4px;
    width: 100%;

    font-weight: 400;
    font-size: 14px;
    line-height: 129%;
    font-feature-settings: 'pnum' on, 'onum' on;
    color: #050505;

    transition: background-color .3s cubic-bezier(0.39, 0.575, 0.565, 1);


    &:focus-visible{
        background: #FEF5F5;
        border-color: #E8BF57;
        outline: none;
    }

    &:hover{
        background: #FFECB6;
    }

    &::placeholder{
        color: #B2B2B8;
        font-weight: 400;
        font-size: 14px;
        line-height: 129%;
        font-feature-settings: 'pnum' on, 'onum' on;
    }
`