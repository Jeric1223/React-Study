import React, { Component } from "react";
import styled from "styled-components";

class App extends Component {
    render() {
        return (
            <Container>
                <Button />
                <Button danger />
            </Container>
        );
    }
}

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: gray;
`;

const Button = styled.button`
    border-radius: 50px;
    padding: 5px;
    min-width: 120px;
    color: white;
    font-weight: 600;
    background-color: ${props => (props.danger ? "#e74c3c" : "#2ecc71")}
`;

export default App;
