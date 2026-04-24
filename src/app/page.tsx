import BgMobileIcon from "@/components/icons/BgMobileIcon";
import FacebookIcon from "@/components/icons/FacebookIcon";
import IllustrationMockupsIcon from "@/components/icons/IllustrationMockupsIcon";
import InstagramIcon from "@/components/icons/InstagramIcon";
import LogoIcon from "@/components/icons/LogoIcon";
import TwitterIcon from "@/components/icons/TwitterIcon";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="relative w-full text-white lg:pt-16">
      <BgMobileIcon className="absolute inset-s-0 top-0 w-dvw sm:hidden" />
      <div className="relative z-1 mx-auto max-w-150 p-9.5 lg:max-w-318.75 lg:p-0">
        <LogoIcon className="h-auto w-30 lg:w-50" />
        <div className="mt-17.5 lg:mt-26 lg:flex lg:gap-14.75">
          <IllustrationMockupsIcon className="h-auto w-full" />
          <article className="mt-15 text-center lg:mt-8 lg:max-w-130 lg:text-start">
            <h1 className="text-2xl leading-9 font-semibold lg:text-[2.5rem] lg:leading-15">
              Build The Community Your Fans Will Love
            </h1>
            <p className="font-open-sans mt-4 mb-6 leading-6 lg:my-6 lg:text-lg lg:leading-6.75">
              Huddle re-imagines the way we build communities. You have a voice,
              but so does your audience. Create connections with your users as
              you engage in genuine discussion.
            </p>
            <Button className="text-violet shadow-btn hover:bg-soft-magenta hover:shadow-btn-hover h-10 w-50 cursor-pointer rounded-full bg-white text-xs leading-4.5 hover:text-white lg:h-14 lg:text-lg lg:leading-6.75">
              Register
            </Button>
          </article>
        </div>
        <ul className="mt-16 flex items-center justify-center gap-2.75 lg:mt-6.75 lg:justify-end">
          <li>
            <a
              href="https://www.facebook.com/"
              className="social-icon"
              target="_blank"
              rel="noopener noreferrer"
              title="Facebook"
            >
              <FacebookIcon className="lg:size-5" />
            </a>
          </li>
          <li>
            <a
              href="https://www.twitter.com/"
              className="social-icon"
              target="_blank"
              rel="noopener noreferrer"
              title="Twitter"
            >
              <TwitterIcon className="lg:size-5" />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/"
              className="social-icon"
              target="_blank"
              rel="noopener noreferrer"
              title="Instagram"
            >
              <InstagramIcon className="lg:size-5" />
            </a>
          </li>
        </ul>
      </div>
    </main>
  );
}
