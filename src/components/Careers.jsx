import react,{useState} from "react";
export default function Careers() {
    const [form,setForm] = useState({name:"",email:"",yearOfExperience:"",resumeUrl:""});
    const [status,setStatus] = useState(null); 
    const handleSubmit = (e) => {
        setStatus("📨 Sending...");
        e.preventDefault();
        try{
            console.log("Form submitted:", form);
            setStatus("from submitting successfully!");
        }catch(err){
            console.error("Error submitting form:", err);
        }
    };
    return (
        <section id="careers" className="py-10 bg-gray-50">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-md space-y-6" >
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
                        <input
                          type="number"
                          placeholder="Number of Experience"
                          value={form.yearOfExperience}
                          onChange={(e) => setForm({ ...form, yearOfExperience: e.target.value })}
                          required
                          className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                            type="url"
                            placeholder="Portfolio / Resume Link"
                            value={form.resumeUrl}
                            onChange={(e) => setForm({ ...form, resumeUrl: e.target.value })}
                            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                          <button type="submit" className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                            Apply Now
                          </button>
                          {status && <p className="text-center mt-4">{status}</p>} 
                        </div>
                    </div>
            </form>
        </section>
    );
}