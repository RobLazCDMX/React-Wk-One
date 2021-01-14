import React from 'react';
import styled from 'styled-components';

const StyleDiv = styled.div`
    background-color: lightgreen;
    width: 60%;
    margin: auto;
    border: 1px solid #eeee;
    box-shadow: 0 2px 3px #cccc;
    padding: 16px;
    text-align: center;
    font:inherit;
    font-weight: bold; 
`;
const basicInfo = (props) => {
    return(
      <StyleDiv>
      <div>
        <p>First Name: {props.firstName}</p>
        <p>Last Name: {props.lastName}</p>
        <p>DOB: {props.dob}</p>
        <p>Phone: {props.phone}</p>
        <p>Job: {props.job} </p>
      </div>
      </StyleDiv>
    )
}

export default basicInfo;