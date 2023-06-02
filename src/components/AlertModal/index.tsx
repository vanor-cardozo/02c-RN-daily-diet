import Modal from "react-native-modal";

import {
  ConfirmButton,
  ConfirmButtonText,
  CancelButton,
  CancelButtonText,
  Message,
  MessageContainer,
  ModalButtonsContainer,
  ModalContainer,
} from "./styles";

interface AlertModalProps {
  isVisible: boolean;
  message: string;
  cancelTextButton: string;
  confirmTextButton: string;
  onCancel: () => void;
  onConfirm: () => void;
}

export function AlertModal({
  isVisible,
  message,
  cancelTextButton,
  confirmTextButton,
  onCancel,
  onConfirm,
}: AlertModalProps) {
  return (
    <Modal isVisible={isVisible}>
      <ModalContainer>
        <MessageContainer>
          <Message>{message}</Message>
          <ModalButtonsContainer>
            <CancelButton onPress={() => onCancel()}>
              <CancelButtonText>{cancelTextButton}</CancelButtonText>
            </CancelButton>

            <ConfirmButton onPress={() => onConfirm()}>
              <ConfirmButtonText>{confirmTextButton}</ConfirmButtonText>
            </ConfirmButton>
          </ModalButtonsContainer>
        </MessageContainer>
      </ModalContainer>
    </Modal>
  );
}
