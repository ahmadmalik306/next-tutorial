export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <h1 className="text-3xl"> NAVBAR</h1>
      {children}
    </>
  );
}
