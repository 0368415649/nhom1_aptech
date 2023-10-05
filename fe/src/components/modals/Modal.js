import React from "react";
import styled from "styled-components";

import { TimesIcon } from "../Svg";

const Modal = ({ children, onDismiss, label }) => {
  return (
    <BaseModal>
      <Heading>
        <div className="label">{label}</div>
        {/* <div class="close_button_grap" onClick={onDismiss}>
          <div class="btn_cls">
            <i class="fa-regular fa-circle-xmark icon-cl"></i>
          </div>
        </div> */}
        <TimesIcon onClick={onDismiss} style={{ cursor: "pointer" }} />
      </Heading>
      <Body>{children}</Body>
    </BaseModal>
  );
};

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: #040404;
  opacity: 0.6;
  z-index: 1;
`;

const BaseModal = styled.div`
  width: 424px;
  border-radius: 16px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  background-color: #fff;
`;

const Heading = styled.div`
  padding: 24px;
  display: flex;
  align-items: center;
  position: relative;

  .label {
    flex: 1;
    text-align: center;
    font-size: 24px;
    color: #595959;
    font-weight: 600;
  }
`;

const Body = styled.div`
  padding: 24px;
`;

export default Modal;
