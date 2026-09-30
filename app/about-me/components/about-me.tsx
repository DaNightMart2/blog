import Link from "next/link";

export default function AboutMe() {
  return (
    <div className="text-left newline">
        <p>I'm a high school student who loves learning. My logs cover topics I've learned about over the years and cite relevant sources. If a log has no sources, it is based only on knowledge I've gained through life and learning. My real name, age, and other personal information will remain anonymous. However, I'm willing to share my online name: DaNightMart2, or Night for short. Although you probably guessed that from the page title. For more information, read my first log:</p>
        <Link href={`/introduction`} className="link">Introduction Log</Link>
        <p className="newline">{"\n"}</p>
        <p>For those interested, here is a link to my personal favourite log:</p>
        <Link href={`/the_root_of_everything`} className="link">The Root of Everything</Link>
    </div>
  );
}
