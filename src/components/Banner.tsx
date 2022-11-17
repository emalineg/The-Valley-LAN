import React from "react";
import TeamCarousel from "./TeamCarousel";

type Props = [];

export default function Banner(props: Props) {
  const teams = [
    {
      id: 1,
      image: "/teams/bronco-transparent.png",
    },
    {
      id: 2,
      image: "./teams/csumb-transparent.png",
    },
    {
      id: 3,
      image: "./teams/csusb-transparent.png",
    },
    {
      id: 4,
      image: "/teams/lmu.png",
    },
    {
      id: 5,
      image: "/teams/sdsu.png",
    },
    {
      id: 6,
      image: "/teams/sfsu-transparent.png",
    },
  ];
  return (
    <section className="text-white">
      <div className="mx-auto max-w-screen-xl py-32 lg:flex lg:h-screen lg:items-center">
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
          </h1>
          <h2
            style={{
              fontFamily: "MontLI",
              fontSize: "45px",
              color: "white",
            }}
            className="sm:block"
          >
            {" "}
            A ROCKET LEAGUE CHAMPIONSHIP{" "}
          </h2>
          <div className="flex flex-col px-10">
            <div className="mt-10 mb-10 grid grid-cols-10">
              <div className="col-span-10">
                <TeamCarousel teams={teams} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
