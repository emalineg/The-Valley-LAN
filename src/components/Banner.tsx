export default function Banner() {
  return (
    <section className="text-white">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-3xl text-center">
          <h1
            style={{
              fontFamily: "Mont",
              fontSize: "80px",
              color: "white",
            }}
            className="mb-1 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text pb-1 text-3xl font-extrabold text-transparent sm:text-5xl"
          >
            THE VALLEY
            <span
              style={{
                fontFamily: "MontLI",
                fontSize: "60px",
                color: "white",
              }}
              className="sm:block"
            >
              {" "}
              A ROCKET LEAGUE CHAMPIONSHIP{" "}
            </span>
          </h1>

          <div className="mt-5 flex flex-wrap justify-center gap-4">
            <a
              style={{
                fontFamily: "MontLI",
                color: "white",
              }}
              className="block w-auto rounded border border-green-600 px-12 py-3 text-sm font-medium text-white hover:bg-green-600 focus:outline-none focus:ring active:bg-green-500 sm:w-auto"
              href="#rsvp"
            >
              Spectate IRL
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
