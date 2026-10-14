import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-amber-600">
      <div>
        <p className="text-sm">© NEWWIENSWEB 2026 </p>

        <div>
          <Link href="/privacy">Privacy Police</Link>
          <Link href="/terms">Terms of use</Link>
        </div>
      </div>
    </footer>
  );
}
