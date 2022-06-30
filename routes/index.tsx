/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        backgroundImage: 'url("pattern-faces-wallpaper.png")',
      }}
      class={tw`min-h-[100vh] bg-gradient-radial`}
    >
      <a
        style={{
          marginTop: "auto",
          marginLeft: "auto",
          marginRight: "auto",
          marginBottom: "20px",
        }}
        href="https://github.com/alexndremelyanov"
      >
        <img style={{ width: "32px" }} src="/gh-icon.png" />
      </a>
    </div>
  );
}
