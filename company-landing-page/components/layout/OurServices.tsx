import {
    FiVideo,
    FiTag,
    FiRefreshCcw,
    FiMail,
    FiUsers,
    FiEdit3,
  } from "react-icons/fi";
  
  const services = [
    { icon: <FiVideo size={30} />, title: "Video Making", desc: "Random content" },
    { icon: <FiTag size={30} />, title: "Branding", desc: "Random content to fill the blank space" },
    { icon: <FiRefreshCcw size={30} />, title: "Marketing strategy", desc: "Random content to fill the blank space" },
    { icon: <FiMail size={30} />, title: "Email Marketing", desc: "Random content" },
    { icon: <FiUsers size={30} />, title: "Social Media Managing", desc: "Random content to fill the blank space" },
    { icon: <FiEdit3 size={30} />, title: "Content Writing", desc: "Random content to fill the blank space" },
  ];
  
  export default function OurServices() {
    return (
      <section id="services" className="container text-black dark:text-white py-16">
        <div className="max-w-5xl mx-auto text-center px-4">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Our services</h2>
          <p className="text-gray-500 mb-12">
            Transforming your online presence with innovative digital strategies
          </p>
  
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center space-y-3"
              >
                <div className="dark:bg-white bg-gray-100 p-4 rounded-xl">
                  <div className="bg-[var(--color-brand)] text-white p-4 rounded-full">
                    {service.icon}
                  </div>
                </div>
                <h3 className="font-semibold">{service.title}</h3>
                <p className="text-sm text-gray-500">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }