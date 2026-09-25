export default function Header() {
    return(
        <div>
            <div className="blog-header">
                <h1>
                    <a className="link" href="/">Night's Blog</a>
                </h1>
                <h4>
                    <a className="link" href="/about-me">About Me</a>
                </h4>
                <h4>
                    <a className="link" href="/shorts">Shorts</a>
                </h4>
            </div>
            <p>Night's blog of random (and mostly useless) investigation.</p>
            <hr className="hr"></hr>
        </div>
    )
}
