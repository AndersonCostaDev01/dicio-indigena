import styled from "styled-components";

export const PostContainer = styled.div`
    background-color: ${props => props.theme.corPost};
    border: 2px solid ${props => props.theme.corNavbar};
    width: calc(100% - 40px);   
    padding: 20px;
    border-radius: 10px;   
    margin-top: 20px;
    text-align: center;
    display: flex;
    flex-direction: column-reverse;
    
    p {
        padding: 3px;
        color: ${props => props.theme.corNavbar};
        font-weight: bold;
        font-size: 20px;
    }
`

export const ClearButton = styled.button`
    margin-top: 20px;
    padding: 10px 20px;
    background-color: #ff6666;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    width: 100%;

    &:hover {
        background-color: #ff3333;
        transition: background-color 0.3s ease-in-out;
    }
`;

