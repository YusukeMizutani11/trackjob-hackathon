import Link from 'next/link';

// import { ModeToggle } from '@/components/mode-toggle';
// import { PageSelect } from './page-select';

const Header = ({
  actions,
}: {
  actions?: React.ReactNode;
} = {}) => {
  return (
    <div className="flex items-center justify-between border-b border-b-border px-2 py-4">
      <Link href="/">
        <h1 className="font-heading text-lg font-bold md:text-xl">
          インターン情報一覧
        </h1>
        
      </Link>
      {actions}
      <h1>sort select</h1>
    </div>
  );
};

export default Header