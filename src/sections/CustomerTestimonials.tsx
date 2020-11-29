import React, { useEffect, useState } from 'react'
import Testimonial from '../components/Testimonial';
import { defaultColors } from '../constants/Colors';
import { TestimonialData } from '../interfaces/TestimonialData';

const data = require.context("../data/testimonials");
let testimonials = new Set<string>();
export default function CustomerTestimonials() {
  const [testimonialDoms, setTestimonialDoms] = useState<any[]>([])

  const getAllTestimonials = () => {
    data.keys().forEach(e => {
      const data = e.split("/")[1];
      testimonials.add(data);
    })
  }

  getAllTestimonials();

  const readData = (testimonialName: string): TestimonialData => {
    return data(`./${testimonialName}/data.json`);
  }

  const renderTestimonials = () => {
    testimonials.forEach(e => {
      const data = readData(e);
      const newVal = renderTestimonial(data, e);
      setTestimonialDoms((prev) => {
        return [...prev, newVal]
      });
    })
  }

  const renderTestimonial = (tData: TestimonialData, project: string) => {
    const image = "./" + project + "/" + tData.image;
    return <Testimonial key={data.name} data={tData} image={data(image).default} />
  }

  useEffect(renderTestimonials, []);

  return (
    <div>
      <div style={{ justifyContent: "center", display: "flex", textAlign: "center", flexDirection: "column" }}>
        <h1 style={{ color: defaultColors.DEFAULT_FONT_COLOR, fontSize: "2rem" }}>AWESOME CLIENTS I WORKED WITH</h1>
        <h3 style={{ color: defaultColors.DEFAULT_FONT_COLOR, fontSize: "1.3rem", fontWeight: "lighter", paddingTop: 20, paddingBottom: 20 }}>Don’t take my word for it – here’s what people I work with say</h3>
      </div>
      <div className="row">
        {testimonialDoms}
      </div>
    </div>
  )
}
