import styled from "styled-components";

const PopupStyle = styled.div`
  position: relative;
  z-index: 2;
  .children {
    visibility: hidden;
    opacity: 0;
    transition: display 0.5s, opacity 0.5s linear;
    height: 0;
    width: 0;
    position: absolute;
    top: 0;
    right: 0;
  }

  :hover {
    .children {
      visibility: visible;
      opacity: 1;
      transition: display 0.5s, opacity 0.5s linear;
      height: unset;
      width: unset;
    }
  }
`;
export const CustomPopup = ({ preview, children }) => {
  return (
    <PopupStyle>
      <div className="preview">{preview}</div>
      <div className="children">{children}</div>
    </PopupStyle>
  );
};
