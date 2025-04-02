import React from "react";
import styles from "./StyledPage.module.css"
import styled from 'styled-components'
// Styled-component with dynamic prop
const StyledButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: ${props => props.primary ? '#007bff' : '#6c757d'};
  color: white;
  font-size: 16px;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.9;
  }
`;

export default function StyledPage() {
    // inline CSS
    const inlineStyle = {
        backgroundColor: 'pink',
        fontSize: '20px',
        padding: '10px',
        textAlign: 'center',      

    }
    return (
        <div>
            <header style={inlineStyle}>
                <h1>This is the Header</h1>
            </header>
            {/* css module */}
            <div className={styles.body}>
                <div className={styles.card}>
                    <h1>Styling elements using CSS module</h1>
                    <button className={styles.button}>Click me!</button>
                </div>
                

                {/* style component */}
                <div className={styles.card}>
                    <h1>Styling elements using styled-component</h1>
                    <StyledButton primary>
                        Primary Styled Button
                    </StyledButton>
                    <p>Button when passing prop</p>
                </div>

                <div className={styles.card}>
                    <h1>Styling elements using styled-component</h1>
                    <StyledButton>
                        Secondary Styled Button
                    </StyledButton>
                    <p>Button when not passing prop</p>
                </div>
            </div>
        </div>
    )
}