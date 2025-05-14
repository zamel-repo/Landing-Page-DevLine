"use client";

import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const clients = [
  {
    name: "Jonathan Sweeney",
    img: "/clients/1.png",
    feedback:
      ` I love that model. I [used to have to]
        call all around, and I absolutely love
        that model that you could save me the
        time and headache of doing that.`,
  },
  {
    name: "Barbara Cook",
    img: "/clients/2.png",
      feedback:
      `I am so happy with your company.
      Ever since my insurer switched to 
      you, everything and everybody 
      I ve spoken to has been extremely,
      extremely pleasant, helpful,
      and they listen to my concerns
      instead of just saying okay!
      I ve spoken to has been extremely,
      extremely pleasant, helpful,
      and they listen to my concerns
      instead of just saying okay!`,
  },
  {
    name: "Mary Rogers",
    img: "/clients/3.png",
    feedback:
      "I just want to thank you Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero, asperiores voluptatum error illum amet nobis tempora est accusamus mollitia debitis dolor pariatur illo expedita laborum hic explicabo cum porro ex....",
  },
  {
    name: "Sandra Dee",
    img: "/clients/1.png",
    feedback: "Amazing service and quality...",
  },
  {
    name: "John Smith",
    img: "/clients/3.png",
    feedback: "Very professional and fast response!",
  },
];

const Clients = () => {
  return (
    <section className="bg-[var(--color-brand)] text-white py-50 px-10 md:px-16 lg:px-20">
      <h2 className="text-center text-3xl md:text-4xl font-semibold mb-12">
      Our clients openions
      </h2>

      <div className="container  max-w-4xl mx-auto">
        <Carousel>
          <CarouselContent>
            {clients.map((client, index) => (
            <CarouselItem
            key={index}
            className="basis-full sm:basis-1/2 lg:basis-1/3 px-2"
          >
            <Card className="bg-black/90 text-white rounded-xl shadow-md transition-transform hover:scale-[1.02]">
              <CardContent className="p-6 flex flex-col gap-4">
                <div className="flex flex-col items-center gap-3">
                  <Image
                    src={client.img}
                    alt={client.name}
                    width={50}
                    height={50}
                  />
                  <p className="text-sm font-bold">{client.name}</p>
                  <FaQuoteLeft className="text-primary" />
                </div>
                <p className="text-sm leading-relaxed">{client.feedback}</p>
              </CardContent>
            </Card>
          </CarouselItem>
          
            ))}
          </CarouselContent>
          <CarouselPrevious className="bg-white text-black dark:bg-black dark:text-white rounded-full p-2" />
          <CarouselNext className="bg-white text-black dark:bg-black dark:text-white rounded-full p-2"/>
        </Carousel>
      </div>
    </section>
  );
};

export default Clients;
