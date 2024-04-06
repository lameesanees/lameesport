import React from "react";

function ExperienceItem({ title, imgUrl, year, company, tech }) {
  return (
    <div>
      <div className="bg-slate-300 dark:bg-slate-800 rounded-lg overflow-hidden">
        <img
          src={imgUrl}
          alt={title}
          className="w-full h-36 md:h-48 object-cover"
        />
        <div className="text-gray-600 dark:text-gray-300 p-5 w-full">
          <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold">
            {title}
          </h3>
          <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm">
            {company} <br />
            {year}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ExperienceItem;
