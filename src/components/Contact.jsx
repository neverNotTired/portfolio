import { useState } from 'react';
import toast from 'react-hot-toast';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/contact',
      // const res = await fetch('http://localhost:5000/api/contact',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(form),
        }
      );

      if (res.ok) {
        toast.success('Message sent successfully!');
        // Clear the form after successful submission
        setForm({ name: '', email: '', message: '' });
      } else {
        toast.error('Something went wrong. Try again.');
      }
    } catch (err) {
      toast.error('Failed to send message.');
    }
  };

    return (
        <div id="contact" className="bg-[#111a22] pb-[120px]">
          <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-8 pb-3 pt-10">Contact</h2>
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-8 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <p className="text-white text-base font-medium leading-normal pb-2">Name</p>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded text-white focus:outline-0 focus:ring-0 border-none bg-[#243647] focus:border-none h-14 placeholder:text-[#93adc8] p-4 text-base font-normal leading-normal"
                />
              </label>
            </div>
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-8 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <p className="text-white text-base font-medium leading-normal pb-2">Email</p>
                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded text-white focus:outline-0 focus:ring-0 border-none bg-[#243647] focus:border-none h-14 placeholder:text-[#93adc8] p-4 text-base font-normal leading-normal"
                />
              </label>
            </div>
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-8 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <p className="text-white text-base font-medium leading-normal pb-2">Message</p>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded text-white focus:outline-0 focus:ring-0 border-none bg-[#243647] focus:border-none min-h-36 placeholder:text-[#93adc8] p-4 text-base font-normal leading-normal"
                ></textarea>
              </label>
            </div>
            <div className="flex px-8 py-3 justify-start">
              <button
                type="submit"
                onClick={handleSubmit}
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded h-10 px-8 bg-[#1465b7] text-white text-sm font-bold leading-normal tracking-[0.015em]"
              >
                <span className="truncate">Send Message</span>
              </button>
            </div>
        </div>
    )
}