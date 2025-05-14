import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const newsItems = [
  {
    image: "/news/2.png",
    text: "We incorporate the formation of public partnerships as a core aspect of our operations.",
  },
  {
    image: "/news/3.png",
    text: "We incorporate the formation of public partnerships as a core aspect of our operations.",
  },
  {
    image: "/news/4.png",
    text: "We incorporate the formation of public partnerships as a core aspect of our operations.",
  },
];

const News = () => {
  return (
    <section id="jobs" className="container text-white  py-16">
      <div className="flex justify-center sm:justify-between items-center mb-4 sm:mb-24">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-black dark:text-white">News</h2>
        <Button className="bg-[var(--color-brand)] hover:bg-[var(--color-brand)] text-white px-6 py-2 text-sm rounded-full sm:block hidden cursor-pointer">
          View all news
        </Button>
      </div>

      <div className="grid lg:grid-cols-[2fr_1fr] gap-8">
        {/* Main Feature News */}
        <div className="flex flex-col space-y-6 justify-between">
        <Image
            src="/news/1.png"
            alt="Main news"
            width={800}
            height={450}
            className="rounded-xl w-full object-cover mx-auto"
          />
          <div className="flex gap-2">
            <span className="text-xs bg-black dark:bg-white text-white dark:text-black px-3 py-1 rounded-full">
              Company
            </span>
            <span className="text-xs bg-black dark:bg-white text-white dark:text-black px-3 py-1 rounded-full">
              Contracts
            </span>
          </div>
          <h3 className="text-xl md:text-2xl text-black dark:text-white font-semibold">
            We specialize in fostering effective partnerships with supportive
            companies to drive mutual success.
          </h3>
          <p className="text-sm text-gray-400">
            We are committed to building effective partnerships with supporting
            companies, contributing to the advancement, development, and
            expansion of the sector through diverse capabilities, expertise, and
            technological innovation.
          </p>
        </div>

        {/* Side News List */}
        <div className="flex flex-col space-y-6 justify-between">
          {newsItems.map((item, idx) => (
            <div key={idx} className="flex gap-4 items-start">
              <Image
                  src={item.image}
                  alt="News item"
                  width={400}
                  height={300}
                  className="rounded-xl w-1/2 h-full object-cover"
                />
              <div className="flex flex-col gap-2">
                <p className="text-lg text-black dark:text-white">{item.text}</p>
                <div className="flex gap-2">
                  <span className="text-xs bg-black dark:bg-white text-white dark:text-black px-3 py-1 rounded-full">
                    Company
                  </span>
                  <span className="text-xs bg-black dark:bg-white text-white dark:text-black px-3 py-1 rounded-full">
                    Contracts
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Button className="bg-[var(--color-brand)] hover:bg-[var(--color-brand)] text-white px-6 py-2 text-sm rounded-full block sm:hidden cursor-pointer">
          Show all news
        </Button>
      </div>
    </section>
  );
};

export default News;
