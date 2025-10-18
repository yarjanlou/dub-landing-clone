export default function PrimaryButton({
  customStyle,
  children,
}: Readonly<{
  customStyle?: string;
  children: React.ReactNode;
}>) {
  return (
    <button
      className={`flex cursor-pointer items-center justify-center rounded-lg border border-black bg-black text-[13px] font-bold whitespace-nowrap text-white shadow-xs transition-all hover:ring-4 hover:ring-[rgba(229,229,229,1)] lg:text-sm ${customStyle}`}
    >
      {children}
    </button>
  );
}
