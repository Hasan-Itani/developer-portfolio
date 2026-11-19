import Link from "next/link";
export default function NotFound() {
  return (
    <main id="main-content" className="not-found wrap">
      <span className="mono">404 / PAGE NOT FOUND</span>
      <h1>
        This path
        <br />
        ends here.
      </h1>
      <p>The page you’re looking for doesn’t exist.</p>
      <Link className="button" href="/">
        Back to home ↗
      </Link>
    </main>
  );
}
