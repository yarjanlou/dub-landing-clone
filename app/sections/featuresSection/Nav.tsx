"use client";

import { Tab, TabList } from "@headlessui/react";
import clsx from "clsx";
import { Fragment } from "react";

const headerItems = [
  {
    text: "short links",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="11"
        height="10"
        fill="none"
        viewBox="0 0 11 10"
        className="size-2.5"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="3.333"
          d="M5.5 5.667v-4M5.5 5.667l-3.333 2M5.5 5.667l3.333 2"
        ></path>
      </svg>
    ),
    color: "text-orange-900 bg-orange-400",
  },
  {
    text: "conversion analytics",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="10"
        height="10"
        fill="none"
        viewBox="0 0 10 10"
        className="size-2.5"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="3.333"
          d="M2.333 6.333v2M7.667 1.667v6.666"
        ></path>
      </svg>
    ),
    color: "text-green-900 bg-green-400",
  },
  {
    text: "affiliate programs",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        fill="none"
        viewBox="0 0 32 32"
        className="size-2.5"
      >
        <circle cx="27" cy="16" r="5" fill="currentColor"></circle>
        <circle cx="5" cy="16" r="5" fill="currentColor"></circle>
        <circle cx="16" cy="27" r="5" fill="currentColor"></circle>
        <circle cx="16" cy="5" r="5" fill="currentColor"></circle>
      </svg>
    ),
    color: "text-purple-900 bg-purple-400",
  },
];

export default function Nav() {
  return (
    <div className="relative z-10 h-[calc(100%+1px)] min-w-0 grow border-t-1 border-current bg-current">
      <TabList className="flex size-full items-center justify-center gap-2.5">
        {headerItems.map((item) => (
          <Tab as={Fragment} key={item.text}>
            {({ hover, selected }) => (
              <button
                className={clsx(
                  "group flex cursor-pointer items-center gap-1.5 rounded-lg border border-neutral-200 bg-neutral-100 px-3 py-1.5 text-sm font-bold whitespace-nowrap text-neutral-600 capitalize outline-0 transition-colors duration-150",
                  hover && "text-neutral-700",
                  selected && "bg-white text-neutral-800 drop-shadow-xs",
                )}
              >
                <span
                  className={`flex size-4 items-center justify-center rounded border border-black/5 drop-shadow-md transition-transform group-hover:scale-110 ${item.color}`}
                >
                  {item.icon}
                </span>
                <span>{item.text}</span>
              </button>
            )}
          </Tab>
        ))}
      </TabList>
    </div>
  );
}
