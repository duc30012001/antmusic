import Menu from './menu';

type Props = {};

function Navbar({}: Props) {
  return (
    <ul className="flex list-none flex-row space-x-10">
      <Menu />
    </ul>
  );
}

export default Navbar;
