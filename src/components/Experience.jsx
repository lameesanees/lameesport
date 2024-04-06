import React from "react";
import SectionTitle from "./SectionTitle";
import ExperienceItem from "./ExperienceItem";
import exp from "../data/exp";
function Experience() {
  return (
    <div id="experience">
      <SectionTitle id="experience">My Experience Journey</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-1 gap-5 mb-5">
        {exp.map((experience) => (
          <ExperienceItem
            key={experience.designation}
            imgUrl={experience.imgUrl}
            title={experience.title}
            company={experience.company}
            year={experience.year}
            tech={experience.tech}
          ></ExperienceItem>
        ))}
      </div>
    </div>
  );
}

export default Experience;
