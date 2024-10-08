
export default function Journey() {

  const echostart = [
    'Led UX / UI projects from concept to launch, ensuring seamless user experiences.',
    'Translated client goals into intuitive designs through workshops, interviews, and user testing.',
    'Collaborated with developers for flawless implementation.',
  ];
  const echo = [
    'Designed a new e-commerce web app for Dynamax, resulting in a 14% sales increase',
    'Increased social media presence for Dynamax: Facebook likes (4,700 to 80,000+) and Instagram followers (900 to 18,000+)',
    'Led a complete user-centric redesign of the Oakham Ales e-commerce site',
    'Project managed and designed Echo Web Solutions brand, guidelines, webpages, and signage.',
  ];
  const csdstart = [
    'Founded my own design agency specialising in branding and UX / UI projects for diverse clients: e-commerce, businesses, and SaaS companies (UK & International).',
  ];
  const csd = [
    'Won a pitch for branding and web application for Strauss Logistics (fuel distribution leader, Central & Southern Africa)',
    'Led design for Spam (e-commerce) in collaboration with SPAM UK (Hormel Foods USA) and their developers',
    'Led design for Elemental DB (NoSQL database) brand and SaaS app',
    'Designed and built e-commerce applications for Mortar & Milk (bespoke skin clinic).',
  ];
  const cairnesstart = [
    'Thrived in a top 50 design agency (Creative Review & DesignWeek)',
    'Expertise in branding, corporate identity, direct mail, and exhibition projects',
    'Mentored junior designers, Led, assembled project and pitch teams, delivered client presentations, and ensured adherence to timelines and budgets.',
  ];
  const cairnes = [
    'Designed annual reports for prestigious clients (Manchester United, Vickers, Thomas Cook)',
    'Created branding for American Express and British Airways Caledonian',
    'Spearheaded successful direct marketing campaigns for American Express.',
  ];

  return (
    <section>
      <div className='md:my-16 md:mx-16 relative z-0 background-card'>
        <h2 className="grid pl-5 md:pl-10 md:pt-5 text-4xl uppercase font-light text-slate-950">
          MY JOURNEY
        </h2>
        <div className='md:px-12 pl-5 pt-5 pb-12 text-slate-950 grid md:grid-cols-3 md:gap-6 lg:grid-cols-3 lg:gap-6'>

          <div className='pb-4'>
            <h4 className="text-base pt-0">ECHO WEB SOLUTIONS</h4>
            <p className="font-medium text-base pb-2">SENIOR UX / UI DESIGNER - 2021-23</p>
            <div className="font-light text-base">
              <ul className="list-disc">
                {echostart.map((echostart, index) =>
                  (<li className="text-base" key={index} >{ echostart }</li>))}
              </ul>
            </div>
            <p className="font-medium text-base">
            Impact:
            </p>
            <ul className="list-disc">
              { echo.map((echo, index) =>
              (<li className="text-base" key={index} >{ echo }</li>))}
            </ul>
          </div>
          <div className='pb-4'>
            <h4 className="text-base pt-0">CRAIG STEEL DESIGN</h4>
            <p className="font-medium text-base uppercase pb-2">Senior UX / UI Designer - 2013-2021</p>
            <div className="font-light text-base">
              <ul className="list-disc">
                {csdstart.map((csdstart, index) =>
                  (<li className="text-base" key={index} >{csdstart}</li>))}
              </ul>
              <p className="font-medium text-base">
                Impact:
              </p>
            </div>
            <ul className="list-disc">
              {csd.map((csd, index) =>
                (<li className="text-base" key={index}>{csd}</li>)
              )}
            </ul>
          </div>
          <div className='pb-8 md:pb-12'>
            <h4 className="text-base pt-0">CAIRNES DESIGN</h4>
            <p className="font-medium text-base uppercase pb-2">Senior Designer - 1994-2013</p>
            <div className="font-light text-base">
              <ul className="list-disc">
                {cairnesstart.map((cairnesstart, index) =>
                  (<li className="text-base" key={index} >{cairnesstart}</li>))}
              </ul>
            </div>
            <p className="font-medium text-base">
              Impact:
            </p>
            <ul className="list-disc">
              {cairnes.map((cairnes, index) =>
                (<li className="text-base" key={index}>{cairnes}</li>)
              )}
            </ul>
          </div>

          <div className="absolute bottom-5 text-white right-10 px-3 py-2 rounded-md uppercase text-base font-thin bg-slate-800 opacity-100 hover:opacity-100 transition duration-300 ease-in">
            <a
              href="/Craig Parfitt UI-UX CV 2024.pdf"
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
