import Link from 'next/link';

// import { ModeToggle } from '@/components/mode-toggle';
// import { PageSelect } from './page-select';

const Header = ({
  actions,
}: {
  actions?: React.ReactNode;
} = {}) => {
  return (
    <header className="flex items-center justify-between border-b border-b-border px-2 py-4">
      <Link href="/">
        <h1 className="font-heading text-lg font-bold md:text-xl">
          インターン情報一覧
        </h1>
      </Link>
      {actions}
      <h1>sort menu</h1>
    </header>
  );
};

export default Header