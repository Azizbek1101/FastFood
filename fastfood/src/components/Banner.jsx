export default function Banner() {
  return (
    <section className="banner">
      <div className="container banner-container">

        <div className="banner-content">
          <h1>
            <span style={{color: "gold"}}>Special Food</span> Every
            <br />
            Time For You
          </h1>

          <p>
            Best cooks and best delivery guys all at your
            <br />
            service. Hot tasty food will reach you in 60 minutes.
          </p>
        </div>

        <div className="banner-image">
          <img
            src="/pngwing.com.png"
            alt="Fast Food"
          />
        </div>

      </div>
    </section>
  );
}