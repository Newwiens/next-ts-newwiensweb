import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-amber-600">
      <div>
        <p className="text-sm">© {new Date().getFullYear()} NEWWIENSWEB</p>

        <div>
          <Link href="/privacy">Privacy Police</Link>
          <Link href="/terms">Terms of use</Link>
        </div>
      </div>
    </footer>
  );
}
