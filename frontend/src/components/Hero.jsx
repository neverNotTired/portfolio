// import heroImage from '../assets/hero.jpg';

export default function Hero() {
  return (
        <div id="top" className="@container">
          <div className="@[480px]:p-8">
            <div
              className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded items-start justify-end px-8 pb-10 @[480px]:px-8"
              style={{
                // backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4)), url(${heroImage})`,
                backgroundImage:
                  `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4)), url('https://lh3.googleusercontent.com/aida-public/AB6AXuAmB9oACSSve8VbFkegycB0VGP0XGEVkGy4Ar9zqHg6Cx50e3H9273me0Y3A_y2DaQX0zRgqORMg5Rm3GvjHNp6MtXmggso5aSVONwxejmD_Gba2U8IuuXnwizvfSkzWPrQQg5pAaF-BGQx0C3vNkaj3N-a22Y-hiwNhb5nSwffTg90LabsCC-UrKgg1-4TakALdPGJCQOR6h2rftRkzbZMcoIzudNKd20-oJ9zpyQ3PiZbMMcJKPJzyj_jMqZqHIoN6tEv2ylSMZY')`,
              }}
            >
              <div className="flex flex-col gap-2 text-left">
                <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl">
                Hello World
                </h1>
                <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base mt-2">
                I'm a full-stack developer trading as <strong className="text-white font-semibold">Ahiru Media</strong>. I help businesses and teams build clean, scalable web apps — fast.
                <br />
                Need a dev who thrives on problem-solving? Or just want your site to stop looking like it’s from 2007? Let’s talk.
                </h2>
              </div>
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded h-10 px-8 @[480px]:h-12 @[480px]:px-5 bg-[#1465b7] text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]">
                <span className="truncate">View Projects</span>
              </button>
            </div>
          </div>
        </div>
  );
}
