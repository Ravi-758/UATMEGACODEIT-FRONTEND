import React, { useState } from "react";
import Careers from "./Careers";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);
  const [showCareers, setShowCareers] = useState(false);

  const API_BASE =
    process.env.NODE_ENV === "production"
      ? "https://megacodeit.com"
      : "http://127.0.0.1:4000";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("📨 Sending...");

    try {
      console.log("📤 Sending data:", form);

      const res = await fetch(
        `${API_BASE}/api/${showCareers ? "careers" : "contact"}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        }
      );

      const data = await res.json();
      console.log("Server response:", data);

      if (data.success) {
        setStatus("Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed: " + data.message);
      }
    } catch (err) {
      console.error("Fetch error:", err);
      setStatus("Something went wrong.");
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">
          {showCareers ? "Careers Form" : "Contact Us"}
        </h2>
        <p className="mt-4 text-gray-600 text-center max-w-2xl mx-auto">
          {showCareers
            ? "Looking to join our team? Fill out the careers form below."
            : "Have a project in mind or just want to say hello? Fill out the form below."}
        </p>

        {/* Toggle buttons */}
        <div className="flex justify-center mt-6">
          <div className="flex items-center bg-gray-200 rounded-full p-1">
            <button
              onClick={() => setShowCareers(false)}
              className={`px-6 py-2 rounded-full font-medium transition ${
                !showCareers
                  ? "bg-blue-600 text-white"
                  : "text-gray-700 hover:text-gray-900"
              }`}
            >
              Contact
            </button>
            <button
              onClick={() => setShowCareers(true)}
              className={`px-6 py-2 rounded-full font-medium transition ${
                showCareers
                  ? "bg-blue-600 text-white"
                  : "text-gray-700 hover:text-gray-900"
              }`}
            >
              Careers
            </button>
          </div>
        </div>

        {/* Forms */}
        {!showCareers ? (
          <form
            onSubmit={handleSubmit}
            className="mt-12 bg-white p-8 rounded-xl shadow-md space-y-6"
          >
            <div className="gap-6">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                  className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                  className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex flex-col items-center gap-4 mt-4">
                <textarea
                  placeholder="Your Message..."
                  rows={3}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  required
                  className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  Send Message
                </button>
                {status && <p className="text-center mt-4">{status}</p>}
              </div>
            </div>
          </form>
        ) : (
          <Careers />
        )}
      </div>
    </section>
  );
}
//