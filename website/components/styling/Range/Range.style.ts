import styled from "styled-components";

export const CustomRangeStyle = styled.input`
  width: 100%;
  -webkit-appearance: none; /* Override default CSS styles */
  appearance: none;
  width: 100%; /* Full-width */
  height: 0.5em; /* Specified height */
  background: ${(props) => props.theme.secondary_background};
  outline: none; /* Remove outline */
  opacity: 0.7; /* Set transparency (for mouse-over effects on hover) */
  -webkit-transition: 0.2s; /* 0.2 seconds transition on hover */
  transition: opacity 0.2s;

  /* Mouse-over effects */
  :hover {
    opacity: 1; /* Fully shown on mouse-over */
  }

  /* The slider handle (use -webkit- (Chrome, Opera, Safari, Edge) and -moz- (Firefox) to override default look) */
  ::-webkit-slider-thumb {
    -webkit-appearance: none; /* Override default look */
    appearance: none;
    width: 1em; /* Set a specific slider handle width */
    height: 1em; /* Slider handle height */
    background: ${(props) => props.theme.accent};
    cursor: pointer; /* Cursor on hover */
    opacity: 0.7; /* Set transparency (for mouse-over effects on hover) */
  }

  ::-moz-range-thumb {
    width: 2em; /* Set a specific slider handle width */
    height: 2em; /* Slider handle height */
    background: ${(props) => props.theme.accent};
    cursor: pointer; /* Cursor on hover */
    opacity: 0.7; /* Set transparency (for mouse-over effects on hover) */
  }
`;

export const CustomRangeWrapper = styled.div`
  display: flex;
  width: 16em;
  align-items: center;
  justify-content: space-between;
  input {
    background: ${(props) => props.theme.contrast};
  }
  p {
    width: 3em;
  }
`;
