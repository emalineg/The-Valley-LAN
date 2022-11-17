export default function About() {
  return (
    <div className="line-height: 1 relative flex h-64 flex-col items-center justify-center pb-60 text-center sm:h-80 lg:h-full ">
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
        8 qualify and travel to Irvine Valley College for Finals.
      </p>
      <p
        style={{
          fontFamily: "MontLi",
          fontSize: "30px",
          color: "white",
        }}
        className="pt-8 text-3xl font-bold sm:text-4xl"
      >
        Who will be crowned "The Rocket League Champions of California"?
      </p>
    </div>
  );
}
