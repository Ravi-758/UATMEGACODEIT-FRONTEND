import React from "react";

export default function Services(){
    const services =[
        {
            title: "Salesforce Development",
            desc: "Custom Salesforce solutions, Apex, and Lightning components.",
        },
        {
      title: "Web Applications",
      desc: "Modern, scalable apps built with React, Node.js, and cloud.",
    },
    {
      title: "Integration Solutions",
      desc: "Seamless API and system integrations to unify platforms.",
    },
    {
      title: "Ongoing Support",
      desc: "Continuous monitoring, maintenance, and improvements.",
    }
    ];

    return (
        <section id="services" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Services</h2>
                <p>We provide end-to-end software solutions tailored for your business needs.</p>
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service,i)=>(
                        <div key={i} className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
                            <h3 className="text-xl font-semibold text-blue-600">{service.title}</h3>
                            <p className="mt-3 text-gray-600">{service.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}