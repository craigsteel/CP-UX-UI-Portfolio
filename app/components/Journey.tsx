
export default function Journey() {
  return (

    <section>
      <div className='relative z-0 md:mx-10 rounded-lg bg-gradient-to-tr from-white from-40% via-slate-100 via-60% to-white opacity-100 md:opacity-70 md:hover:opacity-100 hover:drop-shadow-[0_0px_70px_rgba(0,0,0,1)] md:hover:scale-105 transition duration-500 ease-in-out'>
        <h2 className="grid pl-5 md:pl-10 pt-5 uppercase font-light text-slate-950">
          MY JOURNEY
        </h2>
        <div className='px-5 pt-5 pb-12 text-slate-950 grid md:grid-cols-3 md:gap-6 lg:grid-cols-3 lg:gap-6'>

          <div className=''>
            <h4>ECHO WEB SOLUTIONS</h4>
            <p className="font-medium text-[18px]">UI UX SENIOR DESIGNER - 2021-23</p>
            <p className="font-bold text-[14px]">SKILLS</p>
            <ul>
              <li>UI/UX Design</li>
              <li>User Flow</li>
              <li>Site Mapping</li>
              <li>WireFrames</li>
              <li>Creating Client Briefs</li>
              <li>Prototyping</li>
              <li>Commissioning Photographers,</li>
              <li>Illustrators and Developers</li>
              <li>Project management</li>
              <li>Workshops</li>
              <li>Print Design</li>
              <li>Team Management</li>
              <li>Client Presentations</li>
            </ul>
          </div>
          <div className=''>
            <h4>CRAIG STEEL DESIGN</h4>
            <p className="font-medium text-[18px] uppercase">Senior Designer - 2012-20</p>
            <ul>
              <li>UI/UX Design</li>
              <li>User Flow</li>
              <li>Branding</li>
              <li>Annual Reports</li>
              <li>Photographic art direction</li>
              <li>Commissioning Outside Resource</li>
              <li>Client Presentations</li>
              <li>Project management</li>
              <li>Print</li>
              <li>Packaging</li>
            </ul>
          </div>
          <div className=''>
            <h4>THE FUSION EFFECT</h4>
            <p className="font-medium text-[18px] uppercase">Senior Designer - 2003-10</p>
            <ul>
              <li>Creative output</li>
              <li>Branding</li>
              <li>Annual Reports</li>
              <li>Photographic art direction</li>
              <li>Commissioning Photographers</li>
              <li>Commissioning illustrators</li>
              <li>Presenting to clients</li>
              <li>Creative team management</li>
              <li>Project management</li>
              <li>Final print</li>
            </ul>
            <div className='pt-4 mb-10'>
              <h4>CAIRNES DESIGN</h4>
              <p className="font-medium text-[18px] uppercase">Senior Designer - 1994-03</p>
            </div>
          </div>

          <div className="absolute bottom-5 text-white right-10 px-3 py-2 rounded-md uppercase text-sm font-thin bg-slate-800 opacity-100 hover:opacity-100 transition duration-300 ease-in">
            <a
              href="/craigParfitt-CV-2023.pdf"
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