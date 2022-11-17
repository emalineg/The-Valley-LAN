export default function Nav() {
  return (
    <nav
      aria-label="Site Nav"
      className="mx-auto flex max-w-3xl items-center justify-between p-4"
    >
      <a
        href="/"
        className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100"
      >
        <span className="sr-only">Logo</span>
        <img src="FinalsWordmark.svg" alt="The Valley Finals Logo" />
      </a>

      <ul className="flex items-center gap-2 text-sm font-medium text-gray-500">
        <li>
          <a className="rounded-lg px-3 py-2" href="#about">
            {" "}
            About The Valley{" "}
          </a>
        </li>

        <li>
          <a className="rounded-lg px-3 py-2" href="#teams">
            {" "}
            Teams{" "}
          </a>
        </li>
        <li>
          <a className="rounded-lg px-3 py-2" href="#rsvp">
            {" "}
            RSVP{" "}
          </a>
        </li>
        <li>
          <a className="rounded-lg px-3 py-2" href="#sponsors">
            {" "}
            Sponsors{" "}
          </a>
        </li>
      </ul>
    </nav>
  );
}
