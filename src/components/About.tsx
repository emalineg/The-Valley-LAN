export default function About() {
  return (
    <div className="line-height: 1 overflow:scroll flex h-64 flex-col items-center justify-center pb-60 text-center lg:h-full ">
      <p
        style={{
          fontFamily: "MontLi",
          fontSize: "30px",
          color: "white",
        }}
        className="text-3xl font-bold sm:text-4xl"
      >
        {" "}
        25 collegiate teams compete across the state of California.
      </p>
      <p
        style={{
          fontFamily: "MontLi",
          fontSize: "30px",
          color: "white",
        }}
        className="pt-8 text-3xl font-bold sm:text-4xl"
      >
        8 qualify for Finals at the Laser Esports Arena.
      </p>
      <p
        style={{
          fontFamily: "MontLi",
          fontSize: "30px",
          color: "white",
        }}
        className="pt-8 text-3xl font-bold sm:text-4xl"
      >
        Who will be crowned{" "}
        <span
          style={{
            fontFamily: "Mont",
            fontSize: "30px",
            color: "white",
          }}
        >
          Rocket League Champions of California?
        </span>
      </p>

      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <a
          style={{
            fontFamily: "MontLi",
            color: "white",
          }}
          className="block w-auto rounded border border-green-600 px-12 py-3 text-sm font-medium text-white hover:bg-green-600 focus:outline-none focus:ring active:bg-green-500 sm:w-auto"
          href="https://www.communitygaming.io/tournament/the-valley-a-rocket-league-championship"
        >
          BRACKETS
        </a>
      </div>
    </div>
  );
}
