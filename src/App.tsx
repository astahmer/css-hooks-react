import Logo from "./Logo";
import { css } from "../styled-system/css";

function App() {
  return (
    <div
      className={css({
        position: "absolute",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        background: "white",
        color: "black",
        _dark: { background: "black", color: "white" },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      })}
    >
      <div style={{ fontSize: 192 }}>
        <Logo />
      </div>
      <a
        href="https://css-hooks.com/docs/preact/getting-started"
        className={css({
          fontFamily: "Inter, sans-serif",
          fontSize: "1.333rem",
          fontWeight: 700,
          letterSpacing: "-0.03em",
          border: 0,
          textDecoration: "none",
          background: "gray.50",
          color: "white",
          padding: "0.5em 0.75em",
          display: "inline-block",
          _hover: {
            background: "blue.40",
          },
          _active: {
            background: "red.40",
          },
          _dark: {
            background: "gray.70",
            _hover: {
              background: "blue.50",
            },
            _active: {
              background: "red.50",
            },
          },
        })}
      >
        Get started
      </a>
    </div>
  );
}

export default App;
