export default function Rsvp() {
  return (
    <div className="line-height: 1 relative flex h-64 flex-col items-center justify-center overflow-visible pb-60 text-center sm:h-full lg:h-full">
      <h1
        style={{
          fontFamily: "Mont",
          fontSize: "40px",
          color: "white",
        }}
        className="pb-8"
      >
        2022 FINALS LAN
      </h1>
      <p
        style={{
          fontFamily: "MontLi",
          fontSize: "30px",
          color: "white",
        }}
        className="text-3xl font-bold sm:text-4xl"
      >
        {" "}
        Date: November 19, 2022
      </p>
      <p
        style={{
          fontFamily: "MontLi",
          fontSize: "30px",
          color: "white",
        }}
        className="pt-8 text-3xl font-bold sm:text-4xl"
      >
        Time: 12:00 PM - 5:00 PM
      </p>
      <p
        style={{
          fontFamily: "MontLi",
          fontSize: "30px",
          color: "white",
        }}
        className="pt-8 text-3xl font-bold sm:text-4xl"
      >
        Location: Laser Esports Arena
      </p>
      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <a
          style={{
            fontFamily: "MontLi",
            color: "white",
          }}
          className="block w-auto rounded border border-green-600 px-12 py-3 text-sm font-medium text-white hover:bg-green-600 focus:outline-none focus:ring active:bg-green-500 sm:w-auto"
          href="https://forms.gle/eWdnhABkQwTjZGpy7"
        >
          RSVP TO SPECTATE
        </a>
      </div>
    </div>
  );
}
