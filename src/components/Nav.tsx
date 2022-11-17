export default function Nav() {
  return (
    <nav
      aria-label="Site Nav"
      className="mx-auto flex items-center justify-between bg-black/60 "
    >
      <a
        href="/"
        className="ml-20 inline-flex h-20 w-20 items-center justify-center rounded-lg bg-transparent"
      >
        <span className="sr-only">Logo</span>
        <img src="FinalWordmark.svg" alt="The Valley Finals Logo" />
      </a>

      <ul
        style={{
          fontFamily: "MontLI",
          color: "white",
        }}
        className=" mr-10 flex items-center gap-2 text-sm font-medium"
      >
        <li>
          <a
            className=" rounded-lg px-3 py-2 hover:text-green-400"
            href="#about"
          >
            {" "}
            About The Valley{" "}
          </a>
        </li>

        <li>
          <a
            className="rounded-lg px-3 py-2 hover:text-green-400"
            href="#teams"
          >
            {" "}
            Teams{" "}
          </a>
        </li>
        <li>
          <a className="rounded-lg px-3 py-2 hover:text-green-400" href="#rsvp">
            {" "}
            RSVP{" "}
          </a>
        </li>
        <li>
          <a
            className="rounded-lg px-3 py-2 hover:text-green-400"
            href="#sponsors"
          >
            {" "}
            Sponsors{" "}
          </a>
        </li>
      </ul>
    </nav>
  );
}
