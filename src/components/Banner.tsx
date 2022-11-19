import React from "react";
import TeamCarousel from "./TeamCarousel";

export default function Banner() {
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
      image: "/teams/SDSU.png",
    },
    {
      id: 6,
      image: "/teams/sfsu-transparent.png",
    },
  ];
  return (
    <div className="mx-auto max-w-screen-xl sm:px-2 sm:py-6">
      <div className="mx-auto max-w-3xl text-center ">
        <div className="">
          <img
            src="/FinalWordmark.svg"
            alt="logo"
            className="mx-auto w-[500px]"
          />
          <h2
            style={{
              fontFamily: "MontLI",
              color: "white",
            }}
            className="sm:block, mt-4 text-4xl"
          >
            {" "}
            A ROCKET LEAGUE CHAMPIONSHIP{" "}
          </h2>
        </div>
        <div className="flex flex-col">
          <div className="mt-10 grid grid-cols-10">
            <div className="col-span-10">
              <TeamCarousel teams={teams} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
