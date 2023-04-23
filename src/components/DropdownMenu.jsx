import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { navData } from "../data/navData";

export function DropdownMenu() {
  return (
    <Menu as="nav">
      <Menu.Button className="text-imc flex items-center rounded focus:outline-none focus:ring-1 focus:ring-imc focus-visible:ring-1 focus-visible:ring-imc">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="2rem"
          height="2rem"
          viewBox="0 0 24 24"
        >
          <path
            fill="#881337"
            d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
          ></path>
        </svg>
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="flex flex-col divide-y divide-neutral-300 absolute top-[5.05rem] sm:top-[6.05rem] right-0 z-10 w-full origin-top-right rounded-b-md bg-neutral-50 shadow-md focus:outline-none">
          {navData.map((navItem) => (
            <Menu.Item
              as="a"
              key={navItem.path}
              href={navItem.path}
              className="px-4 py-2 text-imc-dark text-center uppercase ui-active:bg-imc/5 ui-active:ring-inset ui-active:ring-1 ui-active:ring-imc rounded"
            >
              {navItem.name}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
