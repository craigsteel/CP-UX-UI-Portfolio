
export default function Journey() {

  const echo = [
    'UI/UX Design', 'User Flow', 'Site Mapping', 'WireFrames', 'Creating Client Briefs', 'Prototyping', 'Commissioning Photographers', 'Illustrators and Developers', 'Project management', 'Workshops', 'Print Design', 'Team Management', 'Client Presentations'
  ];
  const csd = [
    'UI/UX Design', 'User Flow', 'Branding', 'Annual Reports', 'Photographic art direction', 'Commissioning Outside Resource', 'Client Presentations', 'Project management', 'Print', 'Packaging'
  ];
  const effect = ['Creative output', 'Branding', 'Annual Reports', 'Photographic art direction', 'Commissioning Photographers', 'Commissioning illustrators', 'Presenting to clients', 'Creative team management', 'Project management', 'Final print'
  ];

  return (
    <section>
      <div className='relative z-0 md:mx-10 rounded-lg bg-gradient-to-tr from-white from-40% via-slate-100 via-60% to-white opacity-100 md:opacity-70 md:hover:opacity-100 hover:drop-shadow-[0_0px_70px_rgba(0,0,0,1)] md:hover:scale-105 transition duration-500 ease-in-out'>
        <h2 className="grid pl-5 md:pl-10 pt-5 uppercase font-light text-slate-950">
          MY JOURNEY
        </h2>
        <div className='md:px-12 pl-5 pt-5 pb-12 text-slate-950 grid md:grid-cols-3 md:gap-6 lg:grid-cols-3 lg:gap-6'>

          <div className=''>
            <h4>ECHO WEB SOLUTIONS</h4>
            <p className="font-medium text-[18px]">UI UX SENIOR DESIGNER - 2021-23</p>
            <p className="font-bold text-[14px]">SKILLS</p>
            <ul className="list-disc">
              { echo.map((echo, index) =>
                (<li key={index} >{ echo }</li>))}
            </ul>
          </div>
          <div className=''>
            <h4>CRAIG STEEL DESIGN</h4>
            <p className="font-medium text-[18px] uppercase">Senior Designer - 2012-20</p>
            <p className="font-bold text-[14px]">SKILLS</p>
            <ul className="list-disc">
              {csd.map((csd, index) =>
                (<li key={index}>{csd}</li>)
              )}
            </ul>
          </div>
          <div className=''>
            <h4>THE FUSION EFFECT</h4>
            <p className="font-medium text-[18px] uppercase">Senior Designer - 2003-10</p>
            <p className="font-bold text-[14px]">SKILLS</p>
            <ul className="list-disc">
              {effect.map((effect, index) =>
                (<li key={index}>{effect}</li>)
              )}
            </ul>
            <div className='pt-4 mb-10'>
              <h4>CAIRNES DESIGN</h4>
              <p className="font-medium text-[18px] uppercase">Senior Designer - 1994-03</p>
            </div>
          </div>

          <div className="absolute bottom-5 text-white right-10 px-3 py-2 rounded-md uppercase text-sm font-thin bg-slate-800 opacity-100 hover:opacity-100 transition duration-300 ease-in">
            <a
              href="/Craig Parfitt CV 2023.pdf"
              target="_blank"
              download>
              Download My CV{" "}
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}