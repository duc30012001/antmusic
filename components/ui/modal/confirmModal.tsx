import { Modal, ModalProps } from 'antd';
import { ReactNode } from 'react';

export type AppConfirmProps = {
  typeDelete?: boolean;
  paragraph: ReactNode;
  modalTitle: ReactNode;
} & ModalProps;

export const AppConfirm = ({
  open,
  onOk,
  onCancel,
  paragraph = '',
  typeDelete = true,
  modalTitle,
}: AppConfirmProps) => {
  return (
    <Modal
      open={open}
      onOk={onOk}
      onCancel={onCancel}
      title={modalTitle}
      okButtonProps={{
        danger: typeDelete,
        type: typeDelete ? 'default' : 'primary',
      }}
      cancelButtonProps={{
        type: !typeDelete ? 'default' : 'primary',
      }}
    >
      {paragraph}
    </Modal>
  );
};
