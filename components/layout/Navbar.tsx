import Link from "next/link";

export function Navbar() {
  return (
    <header className="site-container pt-12 bg-foreground text-background">
      <nav className="flex flex-row justify-between">
        <Link href="/">Newwiensweb</Link>

        <div className="flex gap-5">
          <Link href="/">Home</Link>
          <Link href="/#about">About</Link>
          <Link href="/#projects">Projects</Link>
          <Link href="/linkedin">Linkedin</Link>
        </div>
      </nav>
    </header>
  );
}
