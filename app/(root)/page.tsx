import { Hello } from "@/app/components/hello";

export default function Home() {
  console.log(`What am i -- SERVER?`);
  return (
    <>
      <h1 className="text-3xl">Welcome to Next.js</h1>
      <Hello />
      <a className="text-red-600" href="/about">
        About
      </a>
    </>
  );
}
