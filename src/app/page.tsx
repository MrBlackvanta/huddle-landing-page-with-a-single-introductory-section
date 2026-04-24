import Logo from "./logo.svg";

export default function Home() {
  return (
    <main className="mt-9 w-full max-w-76 place-self-center md:max-w-318.75">
      <Logo />
      <svg></svg>
      <article>
        <h1>Build The Community Your Fans Will Love</h1>
        <p>
          Huddle re-imagines the way we build communities. You have a voice, but
          so does your audience. Create connections with your users as you
          engage in genuine discussion.
        </p>
        <button>Register</button>
      </article>
      <ul>
        <li>facebook</li>
        <li>twitter</li>
        <li>instagram</li>
      </ul>
    </main>
  );
}
