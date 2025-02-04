"use client";

import React from "react";
import { frontend, backend, database, langages } from "@/utils/icons";

const Slider = ({ items, width, height }) => (
  <div
    className="slider"
    style={{
      "--width": width,
      "--height": height,
      "--quantity": items.length,
    }}
  >
    <div className="list">
      {items.map((item, index) => (
        <div
          style={{ "--position": index + 1 }}
          key={item.langages || index}
          className="flex items-center justify-center mx-auto text-2xl cursor-pointer gap-2 font-semibold item"
        >
          <span className="text-md">{item.icons}</span>
          {item.langages}
        </div>
      ))}
    </div>
  </div>
);

const Skills = () => {
  return (
    <div className="pb-20 pt-20 lg:pt-0 px-4 lg:w-4/6 mx-auto mb-40" id="skills">
      <div className="flex">
        <h1 className="text-5xl lg:text-8xl text-center font-semibold mb-28">
          Technical Proficiencies
        </h1>
      </div>

      <Slider items={langages} width="150px" height="70px" />
      <Slider items={frontend} width="150px" height="60px" />
      <Slider items={backend} width="150px" height="70px" />
      <Slider items={database} width="150px" height="70px" />
    </div>
  );
};

export default Skills;
