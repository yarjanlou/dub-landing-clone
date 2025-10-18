export default function LoginButton({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <button className="flex h-8 cursor-pointer items-center justify-center rounded-lg border border-[rgba(229,229,229,1)] bg-white px-4 text-[13px] font-bold whitespace-nowrap transition-all hover:bg-[rgba(250,250,250,1)] lg:text-sm">
      {children}
    </button>
  );
}
