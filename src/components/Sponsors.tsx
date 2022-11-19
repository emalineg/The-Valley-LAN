export default function Sponsors() {
  return (
    <div
      className="flex flex-col items-center justify-center pb-10"
      id="sponsors"
    >
      <h1
        style={{
          fontFamily: "Mont",
          color: "white",
        }}
        className="text-center text-3xl font-bold sm:text-4xl"
      >
        THANK YOU TO OUR PARTNERS
      </h1>
      <div className=" mt-10 flex flex-col items-center justify-center">
        <div className="mx-8 flex flex-wrap items-center justify-center px-8">
          <img
            src="/vs.svg"
            alt="viewsonic sponsor logo"
            className="h-32 shrink stroke-white"
          />
          <img
            src="/cg.png"
            alt="community gaming sponsor logo"
            className="h-32 shrink"
          />
        </div>
      </div>
    </div>
  );
}
