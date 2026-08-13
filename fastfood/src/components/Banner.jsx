export default function Banner() {
  return (
    <section className="banner">
      <div className="container banner-container">

        <div className="banner-content" style={{marginTop: "20px"}}>
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
            src="https://avatars.mds.yandex.net/i?id=3cdab742397f0778992ab9676e4245f6dc999775-12602658-images-thumbs&n=13"
            alt="Fast Food"т
          />
        </div>

      </div>
    </section>
  );
}