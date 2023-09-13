import { NavigateButton } from '@/components/ui';

type Props = {};

const url = process.env.LOGIN_URL ?? '';

function Action({}: Props) {
  return (
    <NavigateButton href={url} className="w-[7rem]">
      Login
    </NavigateButton>
  );
}

export default Action;
