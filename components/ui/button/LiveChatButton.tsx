import { WHATSAPP_URL } from '@/utils/constants';
import { FaWhatsapp } from 'react-icons/fa';

type Props = {};

export function LiveChatButton({}: Props) {
  return (
    <div className="fixed bottom-10 right-5 z-10 rounded-full bg-[#26d367] p-3 text-3xl">
      <a href={WHATSAPP_URL} target="_blank">
        <FaWhatsapp />
      </a>
    </div>
  );
}
