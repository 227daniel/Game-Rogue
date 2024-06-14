import { TeamItem } from '@/components/Header/aboutus/teamitem';
import Footer from '@/components/Homepage/Footer';
import DefaultLayoutComponent from '@/components/layout/default';

const teamData = [
  {
    image: '/static/images/about-us/team-dummy-image.png',
    nickname: 'Inst1nct',
    name: 'Kyler Bender',
    position: 'Chief Executive Officer',
  },
  {
    image: '/static/images/about-us/team-dummy-image.png',
    nickname: 'Titane',
    name: 'Mack Stanek',
    position: 'Chief Operations Officer',
  },
];

export default function AboutUs() {
  return (
    <DefaultLayoutComponent>
      <div className="hover:bg-background flex flex-col justify-center pt-32 text-white md:pt-44">
        <div className="max-w-1/2 mx-auto w-full max-w-screen-lg px-6">
          <section>
            <h3 className="text-center text-2xl font-bold uppercase">WHO WE ARE</h3>
            <p className="mb-8 text-left leading-[24px]">
              Game Rogue&apos;s conception stems from three life-long friends working in a pizza
              shop.
              <br />
              <br />
              There&apos;s two sides of Game Rogue:
              <br />
              1. The platform.
              <br />
              2. The tournaments.
              <br />
              <br />
              Our platform is meant for esports connection and culture.
              <br />
              <br />
              Starting from tournament-hosting, we discovered the pain-points and redundancy in
              esports. We optimized event-hosting by matching AI and easy-to-use tools to usher-in
              the next generation of esports event-hosting, team management, and player development.
              <br />
              <br />
              After running several tournaments, Game Rogue shifted it&apos;s attention to offering
              tools and layouts for organizers to host events with new looks, instant tools to save
              money and countless hours, and to lose the headaches and awfulness of event-hosting.
              <br />
              <br />
              We developed tools for teams to begin or continue their unique path-to-pro. Create
              merchandise and open shops for free with drop-shipping APIs to your website or to
              connect to your Rogue Social page.
              <br />
              <br />
              Content creators or amateur players now have the same tools as the pros. Review your
              previous matches, waste no time editing clips or creating montages, and join Rogue
              Social to connect and build your esports network.
              <br />
              <br />
              The focus of Game Rogue tournaments is promotion and prestige. Game Rogue provides the
              next generation of esports at low-cost with the most exciting features released since
              esports carnation.s, Grilla is unlocking the true earning potential in skill-based
              games for everyone.
            </p>
            <p className="mb-8 text-left leading-[24px]">
              Join the revolution. Join the game. Go Rogue.
              <br />
              <br />
              The story starts here.
            </p>
            <p className="text-primary text-lg">Community first, always.</p>
            <div className="bg-primary mb-6 mt-3 h-[2px] w-auto lg:my-24"></div>
          </section>

          <section className="mb-40 lg:mb-20">
            <h3 className="mb-10 text-center text-2xl font-bold uppercase lg:text-left">
              Our Team
            </h3>
            <div className="grid grid-cols-2 gap-8 md:grid-cols-5 lg:gap-2">
              {teamData.map((item, i) => (
                <TeamItem key={'team-key-' + i} {...item} />
              ))}
            </div>
          </section>
          <section>
            <h3 className="mb-10 text-2xl font-bold uppercase">Contact</h3>
          </section>

          <section>
            <h4 className="text-2xl font-bold">General Inquiries</h4>

            <p className="mb-8">
              For general inquiries, please email
              <a
                className="text-primary ml-1"
                href="mailto:hello@grilla.gg"
                target="_blank"
                rel="nofollow"
              >
                hello@grilla.gg
              </a>
              .
            </p>

            <h4 className="text-2xl font-bold">Partnership Inquiries</h4>

            <p className="mb-8">
              For partnership or collaboration inquiries, please email
              <a
                className="text-primary ml-1"
                href="mailto:partnerships@grilla.gg"
                target="_blank"
                rel="nofollow"
              >
                partnerships@grilla.gg
              </a>
              .
            </p>

            <h4 className="text-2xl font-bold">Press Inquiries</h4>

            <p className="mb-8">
              For press or affiliate inquiries, please email
              <a
                className="text-primary ml-1"
                href="mailto:press@grilla.gg"
                target="_blank"
                rel="nofollow"
              >
                press@grilla.gg
              </a>
              .
            </p>

            <h4 className="text-2xl font-bold">Address</h4>
            <p className="mb-8">
              Grilla <br />
              1815 Purdy Ave. <br />
              Miami Beach, FL 33139
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </DefaultLayoutComponent>
  );
}
