"use client";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  CartesianGrid,
} from "recharts";
import { TbCircleDotFilled } from "react-icons/tb";

const dataBar = [
  { name: "XS", product1: 70, product2: 0, product3: 0 },
  { name: "S", product1: 0, product2: 120, product3: 0 },
  { name: "M", product1: 0, product2: 0, product3: 170 },
];

const dataPie = [
  { name: "Product 1", value: 50 },
  { name: "Product 2", value: 50 },
];
const COLORS = ["#a855f7", "#f97316", "#facc15"];

export default function CompanyStats() {
  return (
    <section id="branches" className="container text-black dark:text-white py-16 px-4">
    {""}
      <div className="flex items-center gap-2 mb-4 dark:text-white">
        <TbCircleDotFilled />
        <span className="text-sm text-[var(--color-brand)]">
          The companys philosophy
        </span>
      </div>
      <Separator className="bg-gray-300 dark:bg-white h-[2px] mb-4" />
    {""}

    {""}
    <div className="mx-auto my-12 grid lg:flex justify-between items-start gap-20">
        {/* Text Section */}
        <div className="max-w-lg">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-brand)] leading-snug mt-2">
            We bear the responsibility of developing the sector.
            </h2>
            <p className="text-sm text-gray-400 mt-4">
            Elevate your brand with our comprehensive marketing solutions,
            including Digital Marketing, Content Creation, and Social Media
            Strategy. Enhance visibility through expert SEO and PPC management.
            </p>
        </div>

        {/* Stats Section */}
        <div className="w-xs grid grid-cols-2 lg:grid-cols-1 gap-6">
        <div>
            <p className="text-3xl font-bold">1,200+</p>
            <p className="text-sm text-gray-400 pt-1">Clients</p>
        </div>
        <div>
            <p className="text-3xl font-bold">20+</p>
            <p className="text-sm text-gray-400 pt-1">Branches</p>
        </div>
        <div>
            <p className="text-3xl font-bold">200+</p>
            <p className="text-sm text-gray-400 pt-1">Number of Employees</p>
        </div>
        <div>
            <p className="text-3xl font-bold">315+</p>
            <p className="text-sm text-gray-400 pt-1">Sales Representative</p>
        </div>
        </div>

    </div>

      {""}

      {""}

      <div className="mx-auto mt-20">
        <h3 className="text-3xl sm:text-4xl font-bold mb-6 text-black dark:text-white text-center sm:text-start">Our charts</h3>

        {/* Responsive grid: 2:1 ratio on md+ screens, stacked on mobile */}
        <div className="grid grid-cols-1 gap-8 sm:gap-10 lg:gap-20 lg:grid-cols-[2fr_1fr]">
          {/* Bar Chart - takes 2fr space */}
          <Card className="bg-gray-50 dark:bg-[#1e1e1e] text-white rounded-none py-4">
            <CardHeader className="px-0">
              <CardTitle className="text-black dark:text-white text-sm px-6">Net Profit</CardTitle>
              <CardDescription className="text-sm text-gray-500 px-6">
                2024
              </CardDescription>
              <Separator className="bg-gray-300 dark:bg-gray-500 h-[1px] w-full mb-4" />
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={dataBar}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                  <XAxis dataKey="name" stroke="#ccc" tick={{ fontSize: 10 }} />
                  <YAxis stroke="#ccc" tick={{ fontSize: 10 }} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#333",
                      border: "none",
                      color: "#fff",
                      fontSize: 10,
                    }}
                  />
                  <Legend
                    iconType="circle"
                    align="left"
                    wrapperStyle={{ color: "#fff", fontSize: "10px" }}
                  />
                  <Bar dataKey="product1" fill="#a855f7" />
                  <Bar dataKey="product2" fill="#f97316" />
                  <Bar dataKey="product3" fill="#facc15" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Pie Chart - takes 1fr space */}
          <Card className="bg-gray-50 dark:bg-[#1e1e1e] text-white rounded-none py-4">
            <CardHeader className="px-0">
              <CardTitle className="text-black dark:text-white text-sm px-6">Primary Text</CardTitle>
              <CardDescription className="text-sm text-gray-500 px-6">
                5.987,34
              </CardDescription>
              <Separator className="bg-gray-300 dark:bg-gray-500 h-[1px] w-full mb-4" />
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie
                    data={dataPie}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={60}
                    innerRadius={40}
                  >
                    {dataPie.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Legend
                    iconType="circle"
                    align="left"
                    wrapperStyle={{ color: "#fff", fontSize: "10px" }}
                  />
                </PieChart>
            </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
      </div>

      {""}
    </section>
  );
}
