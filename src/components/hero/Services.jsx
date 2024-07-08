import React from "react";
import serviceimg from "../../assets/images/serivce.png";

export default function Services() {
  const servicesData = [
    {
      id: 1,
      img: serviceimg,
      heading: "Service Name",
      desc: ` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque
                iure necessitatibus nihil voluptates eos voluptatum, suscipit,
                sed pariatur repellat ipsum animi rerum! In assumenda esse
                impedit itaque illum alias et doloremque, aliquam exercitationem
                optio earum.`,
    },
    {
      id: 2,
      img: serviceimg,
      heading: "Service Name",
      desc: ` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque
                iure necessitatibus nihil voluptates eos voluptatum, suscipit,
                sed pariatur repellat ipsum animi rerum! In assumenda esse
                impedit itaque illum alias et doloremque, aliquam exercitationem
                optio earum.`,
    },
    {
      id: 2,
      img: serviceimg,
      heading: "Service Name",
      desc: ` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque
                iure necessitatibus nihil voluptates eos voluptatum, suscipit,
                sed pariatur repellat ipsum animi rerum! In assumenda esse
                impedit itaque illum alias et doloremque, aliquam exercitationem
                optio earum.`,
    },
    {
      id: 2,
      img: serviceimg,
      heading: "Service Name",
      desc: ` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque
                iure necessitatibus nihil voluptates eos voluptatum, suscipit,
                sed pariatur repellat ipsum animi rerum! In assumenda esse
                impedit itaque illum alias et doloremque, aliquam exercitationem
                optio earum.`,
    },
    {
      id: 2,
      img: serviceimg,
      heading: "Service Name",
      desc: ` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque
                iure necessitatibus nihil voluptates eos voluptatum, suscipit,
                sed pariatur repellat ipsum animi rerum! In assumenda esse
                impedit itaque illum alias et doloremque, aliquam exercitationem
                optio earum.`,
    },
    {
      id: 2,
      img: serviceimg,
      heading: "Service Name",
      desc: ` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque
                iure necessitatibus nihil voluptates eos voluptatum, suscipit,
                sed pariatur repellat ipsum animi rerum! In assumenda esse
                impedit itaque illum alias et doloremque, aliquam exercitationem
                optio earum.`,
    },
  ];

  return (
    <>
      <div className="min-h-screen  bg-webdevbg flex-col flex  items-center py-20">
        <div className="flex items-center justify-center w-full mt-6 px-28">
          <div className="flex-grow border-t border-black"></div>
          <span className="px-28 text-black md:text-5xl z-20  font-sans">
            Services
          </span>
          <div className="flex-grow border-t border-black"></div>
        </div>

        <div class="text-center mx-auto mb-8 lg:px-20">
          <p class="text-gray-500 font-sans leading-relaxed font-light text-xl mx-auto pb-2">
            Save time managing advertising &amp; Content for your business.
          </p>
        </div>
        <div className="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-10 space-y-4 md:space-y-0">
          {servicesData.map((service) => {
            return (
              <div
                key={service.id}
                className="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500"
              >
                <div className="relative">
                  <img
                    className="w-full rounded-xl"
                    src={service.img}
                    alt="Colors"
                  />
                </div>
                <h1 className="mt-4 font-sans text-gray-800 text-2xl font-bold cursor-pointer">
                  {service.heading}
                </h1>
                <div className="my-4">
                  <p className="text-black font-sans  md:text-base mx-auto pb-2">
                    {service.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
