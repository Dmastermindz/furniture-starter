import React from "react";

//import Components
import TestimonialSlider from "./TestimonialSlider";

//import data
import { testimonial } from "../data";

const Testimonial = () => {
  //destructure testimonial
  const { image, title } = testimonial;
  return (
    <section classname="section">
      <div className="container mx-auto mb-[70px]">
        <div className="flex flex-col lg:flex-row lg:gap-x-10 gap-y-2">
          <div className="lg:max-w-[50%]">
            {/* title */}
            <h2 className="title mb-9">{title}</h2>
            {/* slider */}
            <TestimonialSlider />
          </div>
          {/* image */}
          <div>
            <img src={image.type} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
