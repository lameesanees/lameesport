import React from "react";

function SectionTitle({ children, id }) {
  return (
    <div>
      <h1
        id={id && id}
        className="text-3xl font-bold mb-5 text-indigo-600 dark:text-indigo-500"
      >{children}</h1>
    </div>
  );
}

export default SectionTitle;
