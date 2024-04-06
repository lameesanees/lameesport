import React from "react";
import SectionTitle from "./SectionTitle";
import services from "../data/services";
import ServiceItem from "./ServiceItem";

function Services() {
  return (
    <div className="py-12">
      <SectionTitle>My Services</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((services) => (
          <ServiceItem
          key={services.title}
          title={services.title}
          icon={services.icon}
          description={services.description}
          ></ServiceItem>
        ))}
      </div>
    </div>
  );
}

export default Services;
