export default function HeroBackground() {
  return (
    <>
      <div className="border-grid-border pointer-events-none absolute inset-0 border-x [mask-image:linear-gradient(transparent,black)]"></div>
      <div className="pointer-events-none absolute inset-y-0 left-1/2 w-[1800px] -translate-x-1/2 [mask-image:linear-gradient(transparent,black)] [mask-composite:intersect] opacity-100">
        <div className="absolute inset-x-[360px] inset-y-0">
          <svg
            className="text-grid-border/60 pointer-events-none absolute inset-[unset] right-full bottom-0 h-[600px] w-[360px] [mask-image:linear-gradient(90deg,transparent,black)]"
            width="100%"
            height="100%"
          >
            <defs>
              <pattern
                id="grid-«Rlgjrninb»"
                x="0"
                y="0"
                width="60"
                height="60"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 60 0 L 0 0 0 60"
                  fill="transparent"
                  stroke="currentColor"
                  strokeWidth="2"
                ></path>
              </pattern>
            </defs>
            <rect
              fill="url(#grid-«Rlgjrninb»)"
              width="100%"
              height="100%"
            ></rect>
          </svg>
          <svg
            className="text-grid-border/60 pointer-events-none absolute inset-[unset] bottom-0 left-full h-[600px] w-[360px] [mask-image:linear-gradient(270deg,transparent,black)]"
            width="100%"
            height="100%"
          >
            <defs>
              <pattern
                id="grid-«R15gjrninb»"
                x="-1"
                y="0"
                width="60"
                height="60"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 60 0 L 0 0 0 60"
                  fill="transparent"
                  stroke="currentColor"
                  strokeWidth="2"
                ></path>
              </pattern>
            </defs>
            <rect
              fill="url(#grid-«R15gjrninb»)"
              width="100%"
              height="100%"
            ></rect>
          </svg>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-px inset-y-0 overflow-hidden [mask-image:linear-gradient(transparent,black),radial-gradient(130%_50%_at_50%_100%,transparent,black)] [mask-composite:intersect] opacity-100">
        <svg
          className="w-grid-width text-grid-border/60 pointer-events-none absolute inset-[unset] bottom-0 left-1/2 h-[600px] -translate-x-1/2"
          width="100%"
          height="100%"
        >
          <defs>
            <pattern
              id="grid-«R9gjrninb»"
              x="-1"
              y="0"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 60 0 L 0 0 0 60"
                fill="transparent"
                stroke="currentColor"
                strokeWidth="2"
              ></path>
            </pattern>
          </defs>
          <rect fill="url(#grid-«R9gjrninb»)" width="100%" height="100%"></rect>
        </svg>
      </div>
    </>
  );
}
