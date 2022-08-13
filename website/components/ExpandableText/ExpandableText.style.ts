import styled from "styled-components";
import { displays } from "../styling/Display";
import { borderRadius, borderWidth } from "../styling/Layout";

export const ExpandableTextStyle = styled.div`
  display: flex;
  flex-direction: column;
  div {
    display: flex;
  }

  margin: 25px;
  @media (max-width: ${displays.mobileL}) {
    margin: 3%;
  }
  > div {
    border-top: ${borderWidth}px solid ${(props) => props.theme.contrast};
    flex-direction: column;
    p {
      padding-right: 25px;
    }
  }
  > div:first-of-type {
    border-top: none;
  }

  > p {
    padding: 0 25px;
  }

  justify-content: center;

  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.secondary_background};
  border: ${borderWidth}px solid ${(props) => props.theme.contrast};
  border-radius: ${borderRadius};
  transition: all 0.4s ease;
`;

export const ExpandButton = styled.button`
  border-width: ${borderWidth}px;

  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.secondary_background};
  border-radius: ${borderRadius};
  align-self: center;
  margin: 25px;
  width: 25px;
  height: 25px;
  transition: all 0.4s ease;
  border: ${borderWidth}px solid ${(props) => props.theme.accent};
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: ${displays.mobileL}) {
    margin-left: 5px;
  }
`;

export const ExpandableTextChildrenStyle = styled.div`
  flex-direction: column;
  margin-left: 35px;

  @media (max-width: ${displays.mobileL}) {
    margin-left: 5px;
  }
  p {
    text-align: left;
  }
`;

export const ExpandButtonLabel = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  p {
    text-align: left;
  }
`;
