import React from "react";
import { Transition } from "semantic-ui-react";
import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      <header className="home-title">
        <Transition transitionOnMount duration={2000}>
            <div>Welcome to my personal page Annoula</div>
        </Transition>
      </header>
    </div>
  );
}
