import Link from "next/link";

export default function Nav() {
  return (
    <nav
      aria-label="Site Nav"
      className="mx-auto flex items-center justify-between bg-black/60 "
    >
      <Link
        href="/"
        className="ml-20 inline-flex h-20 w-20 items-center justify-center rounded-lg bg-transparent"
      >
        <span className="sr-only">Logo</span>
        <img src="FinalWordmark.svg" alt="The Valley Finals Logo" />
      </Link>

      <ul
        style={{
          fontFamily: "MontLI",
          color: "white",
        }}
        className=" mr-10 flex items-center gap-2 text-sm font-medium"
      >
        <li>
          <Link
            className=" rounded-lg px-3 py-2 hover:text-green-400"
            href="#about"
          >
            {" "}
            Brackets{" "}
          </Link>
        </li>

        <li>
          <Link
            className="rounded-lg px-3 py-2 hover:text-green-400"
            href="#teams"
          >
            {" "}
            Gallery{" "}
          </Link>
        </li>
        <li>
          <Link
            className="rounded-lg px-3 py-2 hover:text-green-400"
            href="#rsvp"
          >
            {" "}
            RSVP{" "}
          </Link>
        </li>
        <li>
          <Link
            className="rounded-lg px-3 py-2 hover:text-green-400"
            href="#sponsors"
          >
            {" "}
            Sponsors{" "}
          </Link>
        </li>
      </ul>
    </nav>
  );
}
