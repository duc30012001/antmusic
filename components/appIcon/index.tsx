import { memo } from 'react';
import { IconType } from 'react-icons';
import * as AiIcons from 'react-icons/ai';
import * as BiIcons from 'react-icons/bi';
import * as BsIcons from 'react-icons/bs';
import * as CgIcons from 'react-icons/cg';
import * as CiIcons from 'react-icons/ci';
import * as DiIcons from 'react-icons/di';
import * as FaIcons from 'react-icons/fa';
import * as FaIcons6 from 'react-icons/fa6';
import * as FiIcons from 'react-icons/fi';
import * as GiIcons from 'react-icons/gi';
import * as GoIcons from 'react-icons/go';
import * as GrIcons from 'react-icons/gr';
import * as HiIcons from 'react-icons/hi';
import * as HiIcons2 from 'react-icons/hi2';
import * as ImIcons from 'react-icons/im';
import * as IoIcons from 'react-icons/io';
import * as IoIcons5 from 'react-icons/io5';
import * as LiaIcons from 'react-icons/lia';
import * as LuIcons from 'react-icons/lu';
import * as MdIcons from 'react-icons/md';
import * as PiIcons from 'react-icons/pi';
import * as RiIcons from 'react-icons/ri';
import * as RxIcons from 'react-icons/rx';
import * as SiIcons from 'react-icons/si';
import * as SlIcons from 'react-icons/sl';
import * as TbIcons from 'react-icons/tb';
import * as TfiIcons from 'react-icons/tfi';
import * as TiIcons from 'react-icons/ti';
import * as VscIcons from 'react-icons/vsc';
import * as WiIcons from 'react-icons/wi';

const AppIcon = ({ iconName }: { iconName: string }) => {
  if (!iconName) {
    return null;
  }

  const folder = iconName.slice(0, 2);
  let Icon: IconType | null;
  switch (folder) {
    case 'Ai':
      Icon = AiIcons[iconName];
      break;
    case 'Bs':
      Icon = BsIcons[iconName];
      break;
    case 'Bi':
      Icon = BiIcons[iconName];
      break;
    case 'Ci':
      Icon = CiIcons[iconName];
      break;
    case 'Di':
      Icon = DiIcons[iconName];
      break;
    case 'Fi':
      Icon = FiIcons[iconName];
      break;
    case 'Fa':
      Icon = FaIcons[iconName] || FaIcons6[iconName];
      break;
    case 'Gi':
      Icon = GiIcons[iconName];
      break;
    case 'Go':
      Icon = GoIcons[iconName];
      break;
    case 'Gr':
      Icon = GrIcons[iconName];
      break;
    case 'Hi':
      Icon = HiIcons[iconName] || HiIcons2[iconName];
      break;
    case 'Im':
      Icon = ImIcons[iconName];
      break;
    case 'Io':
      Icon = IoIcons[iconName] || IoIcons5[iconName];
      break;
    case 'Lia':
      Icon = LiaIcons[iconName];
      break;
    case 'Lu':
      Icon = LuIcons[iconName];
      break;
    case 'Md':
      Icon = MdIcons[iconName];
      break;
    case 'Pi':
      Icon = PiIcons[iconName];
      break;
    case 'Rx':
      Icon = RxIcons[iconName];
      break;
    case 'Ri':
      Icon = RiIcons[iconName];
      break;
    case 'Si':
      Icon = SiIcons[iconName];
      break;
    case 'Sl':
      Icon = SlIcons[iconName];
      break;
    case 'Tb':
      Icon = TbIcons[iconName];
      break;
    case 'Tfi':
      Icon = TfiIcons[iconName];
      break;
    case 'Ti':
      Icon = TiIcons[iconName];
      break;
    case 'Vsc':
      Icon = VscIcons[iconName];
      break;
    case 'Wi':
      Icon = WiIcons[iconName];
      break;
    case 'Cg':
      Icon = CgIcons[iconName];
      break;
    default:
      Icon = null;
  }

  return Icon && <Icon />;
};

export default memo(AppIcon);
