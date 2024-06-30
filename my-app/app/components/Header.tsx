// import Link from 'next/link';
// import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
// import { ChevronDownIcon } from '@heroicons/react/20/solid'
// import { useState } from 'react'

// function classNames(...classes:any[]) {
//   return classes.filter(Boolean).join(' ')
// }

// // import { ModeToggle } from '@/components/mode-toggle';
// // import { PageSelect } from './page-select';

// const Header = ({
//   actions,
// }: {
//   actions?: React.ReactNode;
// } = {}) => {
//   return (
//     <header className="flex items-center justify-between border-b border-b-border px-2 py-4">
//       <Link href="/">
//         <h1 className="font-heading text-lg font-bold md:text-xl">
//           インターン情報一覧
//         </h1>
//       </Link>
//       {actions}
// 				<div className="flex flex-end justify-end">
// 				<Menu as="div" className="relative inline-block text-left">
// 					<div>
// 						<MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
// 							Menu
// 							<ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
// 						</MenuButton>
// 					</div>

// 					<MenuItems transition className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in">
// 						<div className="py-1">
// 							<MenuItem>
// 								{({ focus }) => (
// 									<a href="#" className={classNames(focus ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm')}>
// 										Company
// 									</a>
// 								)}
// 							</MenuItem>
// 							<MenuItem>
// 								{({ focus }) => (
// 									<a href="#" className={classNames(focus ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm')}>
// 										URL
// 									</a>
// 								)}
// 							</MenuItem>
// 							<MenuItem>
// 								{({ focus }) => (
// 									<a href="#" className={classNames(focus ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm')}>
// 										Event Name
// 									</a>
// 								)}
// 							</MenuItem>
// 							<MenuItem>
// 								{({ focus }) => (
// 									<a href="#" className={classNames(focus ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm')}>
// 										Target Student
// 									</a>
// 								)}
// 							</MenuItem>
// 							<MenuItem>
// 								{({ focus }) => (
// 									<a href="#" className={classNames(focus ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm')}>
// 										Recruit End
// 									</a>
// 								)}
// 							</MenuItem>
// 							<MenuItem>
// 								{({ focus }) => (
// 									<a href="#" className={classNames(focus ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm')}>
// 										Tech Stack
// 									</a>
// 								)}
// 							</MenuItem>
// 							<MenuItem>
// 								{({ focus }) => (
// 									<a href="#" className={classNames(focus ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm')}>
// 										Remote
// 									</a>
// 								)}
// 							</MenuItem>
// 						</div>
// 					</MenuItems>
// 				</Menu>
// 				<div>
// 					<button type="button" className="text-white bg-blue-500 hover:bg-blue-700 px-2 py-1 me-2 mb-2 focus:ring-2 focus:ring-blue-300 rounded-lg focus:outline-none">
// 						sort
// 					</button>
// 				</div>
// 			</div>
//     </header>
//   );
// };

// export default Header

import Link from 'next/link';
import { useState } from 'react';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

function classNames(...classes:any[]) {
  return classes.filter(Boolean).join(' ');
}

const Header = ( props ) => {
	const { onChange, actions } = props;

  const handleMenuItemClick = (item) => {
    onChange(item);
  };

  return (
    <header className="flex items-center justify-between border-b border-b-border px-2 py-4">
      <Link href="/">
        <h1 className="font-heading text-lg font-bold md:text-xl text-black">
          インターン情報一覧
        </h1>
      </Link>
      {actions}
      <div className="flex flex-end justify-end">
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
              Menu
              <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
            </MenuButton>
          </div>
          <MenuItems className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              {['Company', 'URL', 'Event Name', 'Target Student', 'Recruit End', 'Tech Stack', 'Remote'].map((item) => (
								<MenuItem key={item}>
								{({ focus }) => (
									<a href="#" className={classNames(focus ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm')} onClick={() => handleMenuItemClick(item)}>
										{item}
									</a>
								)}
							</MenuItem>
              ))}
            </div>
          </MenuItems>
        </Menu>
        <div>
          <button type="button" className="text-white bg-blue-500 hover:bg-blue-700 px-2 py-1 me-2 mb-2 focus:ring-2 focus:ring-blue-300 rounded-lg focus:outline-none">
            sort
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
