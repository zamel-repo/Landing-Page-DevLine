"use client";

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Intro",
    description:
      "Perfect for individuals starting out. Includes basic features and community access.",
    price: "$29",
    badge: "Most Affordable",
  },
  {
    name: "Base",
    description:
      "Great for small teams. Includes everything in Intro plus analytics and team collaboration tools.",
    price: "$59",
    badge: "Best Value",
  },
  {
    name: "Pro",
    description:
      "Pro account gives you freedom with uploading HD videos and can also meet all your business needs.",
    price: "$123",
    badge: "Save $40",
  },
  {
    name: "Enterprise",
    description:
      "Tailored solutions for large organizations. Includes all Pro features plus dedicated support.",
    price: "$249",
    badge: "Premium",
  },
];

const Pricing = () => {
  const [activePlan, setActivePlan] = useState("Pro");

  return (
    <section className="container bg-background text-foreground py-16 px-4 flex flex-col md:flex-col lg:flex-row justify-between gap-4">
      <div>
        <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4 text-center sm:text-start">
          Simple pricing <br /> for your Business
        </h2>
        <p className="text-muted-foreground mb-8 max-w-md text-center sm:text-start">
          We have several powerful plans to showcase your business and get discovered as a creative entrepreneur. Everything you need.
        </p>
      </div>

      <div className="space-y-4 lg:w-[35%]">
        {plans.map((plan) => {
          const isActive = activePlan === plan.name;
          return (
            <div
              key={plan.name}
              onClick={() => setActivePlan(plan.name)}
              className={`rounded-xl border cursor-pointer transition-all duration-300 ${
                isActive
                  ? "bg-[var(--color-brand)] text-white shadow-md p-4 svg-bg-1"
                  : "dark:bg-muted/20 bg-muted/10 text-foreground px-4 py-3"
              }`}
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-semibold">{plan.name}</h3>
                {plan.badge && isActive ? (
                  <span className="text-xs bg-white text-black px-2 py-0.5 rounded shadow-sm font-bold">
                    {plan.badge}
                  </span>
                ) : (
                  <FaChevronDown className="text-muted-foreground h-4 w-4 bg-white rounded-full text-black p-1" />
                )}
              </div>

              {isActive && plan.description && (
                <>
                  <p className="text-sm mb-4">{plan.description}</p>
                  <p className="text-2xl font-bold mb-2">
                    {plan.price}{" "}
                    <span className="text-sm font-normal text-gray-200">
                      /month
                    </span>
                  </p>
                  <Button variant="secondary" className="rounded-md text-sm">
                    Try 1 month
                  </Button>
                </>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Pricing;
