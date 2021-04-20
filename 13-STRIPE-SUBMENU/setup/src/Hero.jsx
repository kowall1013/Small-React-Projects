import React from "react";
import phoneImg from "./images/phone.svg";
import { useGlobalContext } from "./context";

const Hero = () => {
  const { closeSubmenu } = useGlobalContext();
  return (
    <section className="hero" onMouseOver={closeSubmenu}>
      <div className="hero-center">
        <article className="hero-info">
          <h1>Paymants infrastructure for the internet</h1>
          <p>
            Millions of companies of all size-from startups to Fortune 500s-use
            Stripes's software and APIs to accept paymants, send payouts, and
            manage their businesses onLine
          </p>
          <button className="btn">Start now</button>
        </article>
      </div>
    </section>
  );
};

export default Hero;
