import Nav from "./Nav";

export default function TabsHeader() {
  return (
    <div className="mx-auto flex h-16 max-w-[min(700px,calc(100vw-2rem))] items-start justify-center text-neutral-100 max-md:h-auto md:text-white">
      <svg
        viewBox="0 0 85 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-auto shrink-0 translate-x-px translate-y-px overflow-visible"
      >
        <rect
          x="0"
          y="0"
          width="85"
          height="1"
          fill="currentColor"
          transform="translate(0, -1)"
        ></rect>
        <path
          d="M50 45C57.3095 56.6952 71.2084 63.9997 85 64V0H0C13.7915 0 26.6905 7.30481 34 19L50 45Z"
          fill="currentColor"
        ></path>
      </svg>
      <Nav />
      <svg
        viewBox="0 0 85 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-auto shrink-0 -translate-x-px translate-y-px -scale-x-100 overflow-visible"
      >
        <rect
          x="0"
          y="0"
          width="85"
          height="1"
          fill="currentColor"
          transform="translate(0, -1)"
        ></rect>
        <path
          d="M50 45C57.3095 56.6952 71.2084 63.9997 85 64V0H0C13.7915 0 26.6905 7.30481 34 19L50 45Z"
          fill="currentColor"
        ></path>
      </svg>
    </div>
  );
}
