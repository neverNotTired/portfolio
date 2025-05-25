export default function Contact() {
    return (
        <>
        <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-8 pb-3 pt-10">Contact</h2>
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-8 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <p className="text-white text-base font-medium leading-normal pb-2">Name</p>
                <input
                  placeholder="Your Name"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded text-white focus:outline-0 focus:ring-0 border-none bg-[#243647] focus:border-none h-14 placeholder:text-[#93adc8] p-4 text-base font-normal leading-normal"
                  value=""
                />
              </label>
            </div>
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-8 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <p className="text-white text-base font-medium leading-normal pb-2">Email</p>
                <input
                  placeholder="Your Email"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded text-white focus:outline-0 focus:ring-0 border-none bg-[#243647] focus:border-none h-14 placeholder:text-[#93adc8] p-4 text-base font-normal leading-normal"
                  value=""
                />
              </label>
            </div>
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-8 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <p className="text-white text-base font-medium leading-normal pb-2">Message</p>
                <textarea
                  placeholder="Your Message"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded text-white focus:outline-0 focus:ring-0 border-none bg-[#243647] focus:border-none min-h-36 placeholder:text-[#93adc8] p-4 text-base font-normal leading-normal"
                ></textarea>
              </label>
            </div>
            <div className="flex px-8 py-3 justify-start">
              <button
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded h-10 px-8 bg-[#1465b7] text-white text-sm font-bold leading-normal tracking-[0.015em]"
              >
                <span className="truncate">Send Message</span>
              </button>
            </div>
        </>
    )
}