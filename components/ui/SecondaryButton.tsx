export default function SecondaryButton({
  customStyle,
  children,
}: Readonly<{
  customStyle?: string;
  children: React.ReactNode;
}>) {
  return (
    <button
      className={`flex cursor-pointer items-center justify-center rounded-lg border border-neutral-200 bg-white text-[13px] font-bold whitespace-nowrap text-neutral-500 shadow-xs transition-all hover:border-neutral-400 hover:bg-[rgba(250,250,250,1)] hover:text-neutral-700 hover:ring-4 hover:ring-neutral-200 lg:text-sm ${customStyle}`}
    >
      {children}
    </button>
  );
}
