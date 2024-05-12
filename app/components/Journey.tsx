
export default function Journey() {

  const echo = [
    'Dynamax E-commerce & Social Media: Designed a new e-commerce web application resulting in a 14 % sales increase. Additionally I created a social media campaign that boosted Facebook likes from 4,7k to 80k and Instagram followers from 900 to over 18k.',
    'Oakham Ales E-commerce Redesign: Led a complete redesign of the Oakham Ales e-commerce site, prioritising user experience.',
    'Echo Web Solutions Branding & Design: Project managed and designed Echo Web Solutions brand, brand guidelines, webpages, and signage.',
  ];
  const csd = [
    'Lead designer for Spam (e-commerce), working closely with SPAM UK,(Hormel Foods USA) and their Developers',
    'Lead designer for Elemental DB (NoSQL database) brand and SaaS app',
    'Designed and built e-commerce applications for Mortar & Milk (bespoke skin clinic)',
  ];

  const effect = [
    'Designing annual reports for prestigious clients like Manchester United, Vickers, and Thomas Cook',
    'Created branding for American Express and British Airways Caledonian',
    'I spearheaded direct marketing campaigns for American Express.'
  ];

  return (
    <section>
      <div className='relative z-0 md:mx-10 rounded-lg bg-gradient-to-tr from-white from-40% via-slate-100 via-60% to-white opacity-100 md:opacity-70 md:hover:opacity-100 hover:drop-shadow-[0_0px_70px_rgba(0,0,0,1)] md:hover:scale-105 transition duration-500 ease-in-out'>
        <h2 className="grid pl-5 md:pl-10 pt-5 text-4xl uppercase font-light text-slate-950">
          MY JOURNEY
        </h2>
        <div className='md:px-12 pl-5 pt-5 pb-12 text-slate-950 grid md:grid-cols-3 md:gap-6 lg:grid-cols-3 lg:gap-6'>

          <div className=''>
            <h4 className="text-[16px] pt-0">ECHO WEB SOLUTIONS</h4>
            <p className="font-medium text-[14px]">UI UX SENIOR DESIGNER - 2021-23</p>
            <p className="font-light text-[14px]">I lead UI/UX projects from initial concept to launch, ensuring a smooth user experience. Through
              workshops, interviews, and user testing, I translate client goals into intuitive designs and collaborate
              with developers for flawless implementation.</p>
            <p className="font-medium text-[14px]">
            Here are some impactful results I achieved:
            </p>
            <ul className="list-disc">
              { echo.map((echo, index) =>
                (<li key={index} >{ echo }</li>))}
            </ul>
          </div>
          <div className=''>
            <h4 className="text-[16px] pt-0">CRAIG STEEL DESIGN</h4>
            <p className="font-medium text-[14px] uppercase">UI/UX Senior Designer - 2013-2021</p>
            <p className="font-light text-[14px]">
              Founded my own design agency, tackling branding and UI/UX projects for e-commerce, businesses, and SaaS companies.
              <p className="font-medium text-[14px]">
                Here are some impactful results I achieved:
              </p>
            </p>
            <ul className="list-disc">
              {csd.map((csd, index) =>
                (<li key={index}>{csd}</li>)
              )}
            </ul>
          </div>
          <div className=''>
            <h4 className="text-[16px] pt-0">CAIRNES DESIGN</h4>
            <p className="font-medium text-[14px] uppercase">Senior Designer - 1994-2013</p>
            <p className="font-light text-[14px]">
              Thrived in a 20-person design agency ranked within the top 50 by Creative Review and Designweek.
              We tackled branding, corporate identity, direct mail, and exhibition projects. As a senior designer, I
              mentored juniors, assembled teams for large projects and pitches, delivered client presentations, and
              ensured adherence to timelines and budgets.
            </p>
            <p className="font-medium text-[14px]">
              Here are some impactful results I achieved:
            </p>
            <ul className="list-disc">
              {effect.map((effect, index) =>
                (<li key={index}>{effect}</li>)
              )}
            </ul>
            <div className='pt-4 mb-10'>
              <h4>CLOCKWORK</h4>
              <p className="font-medium text-[14px] uppercase">Design Project Manager - 1992-1994</p>
              <p className="font-light text-[14px]">
                A Design Agency specialising in Branding, Marketing, B2B, Direct Mail.
              </p>
            </div>
          </div>

          <div className="absolute bottom-5 text-white right-10 px-3 py-2 rounded-md uppercase text-sm font-thin bg-slate-800 opacity-100 hover:opacity-100 transition duration-300 ease-in">
            <a
              href="/Craig Parfitt CV - UI UX 2024.pdf"
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
