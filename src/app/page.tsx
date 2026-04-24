import BgMobileIcon from "@/components/icons/BgMobileIcon";
import IllustrationMockupsIcon from "@/components/icons/IllustrationMockupsIcon";
import LogoIcon from "@/components/icons/LogoIcon";

export default function Home() {
  return (
    <main className="relative w-full text-white">
      <BgMobileIcon className="absolute inset-s-0 top-0 w-full" />
      <div className="relative z-1 mx-auto max-w-76 py-10 md:mt-9 md:max-w-318.75">
        <LogoIcon className="h-auto w-30" />
        <IllustrationMockupsIcon className="mt-17.5 mb-15 h-auto w-full" />
        <article>
          <h1>Build The Community Your Fans Will Love</h1>
          <p className="mt-4 mb-6">
            Huddle re-imagines the way we build communities. You have a voice,
            but so does your audience. Create connections with your users as you
            engage in genuine discussion.
          </p>
          <button>Register</button>
        </article>
        <ul className="mt-16">
          <li>
            <a href="https://www.facebook.com/">facebook</a>
          </li>
          <li>
            <a href="https://www.twitter.com/">twitter</a>
          </li>
          <li>
            <a href="https://www.instagram.com/">instagram</a>
          </li>
        </ul>
      </div>
    </main>
  );
}
