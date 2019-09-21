import React from "react";
import { Transition } from "semantic-ui-react";
import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      <header className="home-title">
        <Transition transitionOnMount duration={2000}>
            <div className="navigation-button">Projects</div>
        </Transition>
        <Transition transitionOnMount duration={2000}>
            <div className="navigation-button">Travels</div>
        </Transition>
      </header>
    </div>
  );
}
