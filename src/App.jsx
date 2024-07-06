import "./App.css";
import qrCode from "./assets/image-qr-code.png";

function App() {
  return (
    <main>
      <div className="container">
        <img src={qrCode} alt="QR code" />
        <h1>
          Improve your front-end <br /> skills by building projects
        </h1>
        <p>
          Scan the QR code to visit Frontend <br /> Mentor and take your coding
          skills <br />
          to the next level
        </p>
      </div>

      <div className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a href="https://github.com/sbappan" target="_blank">
          San BA
        </a>
        .
      </div>
    </main>
  );
}

export default App;
