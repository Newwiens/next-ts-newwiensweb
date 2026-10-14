import Link from "next/link";

export function Navbar() {
  return (
    <header className="bg-black">
      <nav>
        <Link href="/">Newwiensweb</Link>

        <div className="flex-items-center gap-10">
          <Link href="/">Home</Link>
          <Link href="/#about">About</Link>
          <Link href="/#projects">Projects</Link>
          <Link href="/linkedin">Linkedin</Link>
        </div>
      </nav>
    </header>
  );
}
