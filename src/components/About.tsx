export default function About() {
  return (
    <div className="line-height: 1 overflow:scroll flex flex-col items-center justify-center text-center lg:h-full pb-4 sm:p-5">
      <p
        style={{
          fontFamily: "MontLi",
          color: "white",
        }}
        className="py-4 text-3xl font-bold sm:text-4xl"
      >
        Who will be crowned{" "}
        <span
          style={{
            fontFamily: "Mont",
            color: "white",
          }}
        >
          Rocket League Champions of California?
        </span>
      </p>

      <p
        style={{
          fontFamily: "MontLi",
          color: "white",
        }}
        className="text-2xl font-bold py-2 sm:text-3xl"
      >
        {" "}
        25 collegiate teams compete across the state of California.
      </p>
      <p
        style={{
          fontFamily: "MontLi",
          color: "white",
        }}
        className="py-4 text-2xl font-bold sm:text-3xl"
      >
        8 qualify for Finals at the Laser Esports Arena.
      </p>
      <div className="flex flex-wrap justify-center gap-4 p-5">
        <div className="">
          <a
            style={{
              fontFamily: "MontLi",
              color: "white",
            }}
            className="block w-auto rounded border border-green-600 px-12 py-3 text-sm font-medium text-white hover:bg-green-600 focus:outline-none focus:ring active:bg-green-500 sm:w-auto"
            href="https://twitch.tv/ivc_esports"
            target="_blank"
            rel="noreferrer"
          >
            {'WATCH THE BATTLE UNFOLD'}
          </a>
        </div>
      </div>
    </div>
  );
}
