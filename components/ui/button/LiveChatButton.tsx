import { FloatButton } from 'antd';
import { FaTelegramPlane } from 'react-icons/fa';

type Props = {};

const supportLink = process.env.TELEGRAM;

export function LiveChatButton({}: Props) {
  function handleTelegramLinkClick() {
    window.open(supportLink, '_blank');
  }

  return (
    <FloatButton
      icon={<FaTelegramPlane />}
      type="primary"
      tooltip="Live Chat"
      onClick={handleTelegramLinkClick}
    />
  );
}
