import { useModalContext } from '../contexts/Modal';

function useModal(ModalComponent) {
  const { handleVisible, handleDismiss } = useModalContext();

  const show = () => {
    handleVisible(ModalComponent);
  };

  return [show, handleDismiss];
}

export default useModal;
