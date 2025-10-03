import React from "react";

export default function Portfolio() {
  const projects = [
    {
      title: "SmartCRM – Automated Customer Relationship Management",
      desc: "Built a custom Salesforce solution with Apex triggers, Lightning Web Components (LWC), and automation flows. Integrated lead management and payment tracking with real-time dashboards.",
      img: "/CRM.png",
    },
    {
      title: "CloudHR – Employee & Payroll Management",
      desc: "Developed a scalable HR platform hosted on AWS using React, Node.js, and MongoDB. Integrated role-based authentication, attendance tracking, payroll automation, and document storage using AWS S3.",
      img: "/HR SYSTEM.png",
    },
    {
      title: "FinBank – Secure Online Banking Portal",
      desc: "Built a core banking system in Java (Spring Boot + Hibernate) with features like account management, fund transfers, transaction history, and security via JWT authentication.",
      img: "/Finback_WP_Preview.__large_preview.__large_preview.jpg",
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Our Portfolio
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          A selection of projects we’ve delivered for clients worldwide.
        </p>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <div
              key={i}
              className="bg-gray-50 rounded-xl shadow-md p-6 hover:shadow-lg transition"
            >
              <div className="h-40 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                <img
                  src={project.img}
                  alt={project.title}
                  className="h-100 w-100 object-contain"
                />
              </div>

              <h3 className="text-xl font-semibold text-blue-600">
                {project.title}
              </h3>

              <p className="mt-2 text-gray-600">{project.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
