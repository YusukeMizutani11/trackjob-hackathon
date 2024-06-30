// Footer.tsx
import Link from 'next/link';
import Button from './Button';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="flex justify-center items-center h-24">
      <Link href="/form">
        <Button size="xl" variant="outline" className="flex items-center justify-center h-full w-full">
          インターン情報の登録はこちら
        </Button>
      </Link>
    </footer>
  );
};

export default Footer;
