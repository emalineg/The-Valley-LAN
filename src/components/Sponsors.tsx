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
          <a
            href="https://www.viewsonic.com/global/products/lcd/gaming"
            target="_blank"
            rel="noreferrer"
            className="w-72 flex flex-fill"
          >
            <img
              src="/vs.svg"
              alt="viewsonic sponsor logo"
            />
          </a>
          <a
            href="https://www.communitygaming.io/"
            target="_blank"
            rel="noreferrer"
            className="h-32 flex flex-fill"
          >
            <img
              src="/cg.png"
              alt="community gaming sponsor logo"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
