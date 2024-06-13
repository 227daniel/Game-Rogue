import Image from 'next/image';
import { DiscordIcon, InstagramIcon, TiktokIcon, TwitchIcon, YoutubeIcon } from '../icons/social';

export default function Footer() {
  return (
    <div className="bg-black">
      <div className="border-t-2 border-orange-500 pt-5">
        <div className="relative grid grid-cols-2 justify-center gap-4 md:grid-cols-2 lg:grid-cols-5">
          <div className="text-center">
            <a href="/">
              <h4 className="mt-3 py-2 text-xl font-bold text-primary">HOME</h4>
            </a>
            <a href="/about">
              <h4 className="mt-3 py-2 text-xl font-bold text-white">ABOUT US</h4>
            </a>
            <a href="/">
              <h4 className="mt-3 py-2 text-xl font-bold text-white">TICKETS</h4>
            </a>
            <a href="/">
              <h4 className="mt-3 py-2 text-xl font-bold text-white">WIKI</h4>
            </a>
            <a href="/">
              <h4 className="mt-3 py-2 text-xl font-bold text-white">FAQS</h4>
            </a>
            <a href="/">
              <h4 className="mt-3 py-2 text-xl font-bold text-white">SEARCH</h4>
            </a>
          </div>

          <div className="text-center">
            <a href="/event">
              <h4 className="mt-3 py-2 text-xl font-bold text-primary">EVENTS</h4>
            </a>
            <h4 className="mt-3 py-2 text-xl font-bold text-white">FEATURED</h4>
            <a href="/">
              <h4 className="mt-3 py-2 text-xl font-bold text-white">LIVE NOW</h4>
            </a>
            <a href="/event/ongoing">
              <h4 className="mt-3 py-2 text-xl font-bold text-white">ONGOING</h4>
            </a>
            <a href="/event/upcoming">
              <h4 className="mt-3 py-2 text-xl font-bold text-white">UPCOMING</h4>
            </a>
            <a href="/">
              <h4 className="mt-3 py-2 text-xl font-bold text-white">PAST</h4>
            </a>
          </div>

          <div className="text-center">
            <a href="/shop">
              <h4 className="mt-3 py-2 text-xl font-bold text-primary">SHOP</h4>
            </a>
            <a href="/">
              <h4 className="mt-3 py-2 text-xl font-bold text-white">ROGUE MERCH</h4>
            </a>
            <a href="/">
              <h4 className="mt-3 py-2 text-xl font-bold text-white">TEAM MERCH</h4>
            </a>
            <a href="/">
              <h4 className="mt-3 py-2 text-xl font-bold text-white">CUSTOMIZE</h4>
            </a>
          </div>

          <div className="text-center">
            <a href="/team">
              <h4 className="mt-3 py-2 text-xl font-bold text-primary">MY TEAM</h4>
            </a>
            <a href="/">
              <h4 className="mt-3 py-2 text-xl font-bold text-white">MY MATCHES</h4>
            </a>
            <a href="/">
              <h4 className="mt-3 py-2 text-xl font-bold text-white">MY PROFILE</h4>
            </a>
            <a href="/">
              <h4 className="mt-3 py-2 text-xl font-bold text-white">ARTICLES</h4>
            </a>
            <a href="/sponsor">
              <h4 className="mt-3 py-2 text-xl font-bold text-white">SPONSOR</h4>
            </a>
          </div>

          <div className="text-center">
            <a href="/">
              <h4 className="mt-3 py-2 text-xl font-bold text-primary">ORGANIZER</h4>
            </a>
            <a href="/">
              <h4 className="mt-3 py-2 text-xl font-bold text-white">DASHBOARD</h4>
            </a>
            <a href="/">
              <h4 className="mt-3 py-2 text-xl font-bold text-white">MATCH CHATS</h4>
            </a>
            <a href="/">
              <h4 className="mt-3 py-2 text-xl font-bold text-white">GO LIVE</h4>
            </a>
            <a href="/">
              <h4 className="mt-3 py-2 text-xl font-bold text-white">COMMUNITY</h4>
            </a>
            <a href="/">
              <h4 className="mt-3 py-2 text-xl font-bold text-white">CREATE</h4>
            </a>
          </div>
        </div>
        <div className="w-85 mx-10 my-6 flex items-center justify-between md:mx-[6.8rem]">
          <div className="flex flex-col md:flex-row">
            <Image src="/static/images/home/security.png" alt="" width={60} height={60} />
            <Image src="/static/images/home/lock.png" alt="" width={110} height={60} />
          </div>
          <div className="flex flex-col md:flex-row">
            <Image src="/static/images/home/paypal.png" alt="" width={200} height={30} />
            <Image src="/static/images/home/card.png" alt="" width={100} height={100} />
          </div>
        </div>
      </div>
      <div className="border-t-3 mx-auto w-[85%] border-white py-10">
        <div className="flex items-center justify-between">
          <Image src="/static/images/home/gr_letters.png" alt="" width={100} height={100} />
          <div className="items-center justify-center">
            <p className="text-primary-main text-center text-lg font-bold">
              Game Rogue, LLC
              <br />
              2023 &copy;
            </p>
          </div>
          <div className="flex w-[100px] flex-row-reverse justify-between gap-3">
            <a
              href="#"
              className="bg-foreground flex h-[35px] w-[40px] items-center justify-center rounded-sm p-1"
            >
              <DiscordIcon />
            </a>
            <a
              href="#"
              className="bg-foreground flex h-[35px] w-[40px] items-center justify-center rounded-sm p-1"
            >
              <TiktokIcon />
            </a>
            <a
              href="#"
              className="bg-foreground flex h-[35px] w-[40px] items-center justify-center rounded-sm p-1"
            >
              <InstagramIcon />
            </a>
            <a
              href="#"
              className="bg-foreground flex h-[35px] w-[40px] items-center justify-center rounded-sm p-1"
            >
              <YoutubeIcon />
            </a>
            <a
              href="#"
              className="bg-foreground flex h-[35px] w-[40px] items-center justify-center rounded-sm p-1"
            >
              <TwitchIcon />
            </a>
            {/* <a
              href="#"
              className="bg-foreground flex h-[35px] w-[40px] items-center justify-center rounded-sm p-1"
            >
              <TwitterIcon />
            </a> */}
          </div>
        </div>

        <div className="mt-2 flex items-center justify-center">
          <p className="text-center text-lg font-bold uppercase text-white">Open Beta 1.0</p>
        </div>
      </div>
    </div>
  );
}
