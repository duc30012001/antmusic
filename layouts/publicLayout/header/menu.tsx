import Link from 'next/link';
import { publicRoutes, publicRoutesType } from '../routes';

type Props = {};

function Menu({}: Props) {
  return (
    <>
      {publicRoutes.map((item: publicRoutesType) => (
        // <li key={item.id} className="py-4">
        <Link
          key={item.id}
          href={item.href}
          className="rounded-lg px-4 py-2 text-base font-medium !text-text-primary hover:bg-neutral-800"
        >
          {item.label}
        </Link>
        // </li>
      ))}
    </>
  );
}

export default Menu;
