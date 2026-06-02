import { useState, useRef } from "react";
import "./App.css";

const hearts = Array.from({ length: 40 }, (_, i) => ({
  id: i,
  left: Math.random() * 100,
  delay: Math.random() * 12,
  size: Math.random() * 20 + 16,
}));

export default function App() {
  const [step, setStep] = useState(1);
  const audioRef = useRef(null);

  const moveButton = (e) => {
    const button = e.target;

    button.style.position = "fixed";

    button.style.left =
      Math.random() * (window.innerWidth - 150) + "px";

    button.style.top =
      Math.random() * (window.innerHeight - 80) + "px";
  };

  const handleYes = () => {
    setStep(5);

    if (audioRef.current) {
      audioRef.current.play().catch(() => {});
    }
  };

  return (
    <div className="container">
      <audio
        ref={audioRef}
        src="/song.mp3"
        preload="auto"
      />

      <div className="hearts">
        {hearts.map((heart) => (
          <span
            key={heart.id}
            className="heart"
            style={{
              left: `${heart.left}%`,
              animationDelay: `${heart.delay}s`,
              fontSize: `${heart.size}px`,
            }}
          >
            ❤️
          </span>
        ))}
      </div>

      {step === 1 && (
        <>
          <h1>Hey Katricia ❤️</h1>

          <p>
            I made something small for you.
          </p>

          <button onClick={() => setStep(2)}>
            Open ❤️
          </button>
        </>
      )}

      {step === 2 && (
        <>
          <img
            src="/childhood.jpg"
            alt="Us when we were young"
            className="photo"
          />

          <p>
            We've been talking for a while now.
            <br />
            <br />
            And honestly, I've really enjoyed
            getting to know you.
            <br />
            <br />
            What's funny is that even when we're
            not talking, I randomly find myself
            thinking about you and missing you.
            <br />
            <br />
            So I made this little website because
            there's something I've been wanting
            to ask you...
          </p>

          <button onClick={() => setStep(3)}>
            Continue ❤️
          </button>
        </>
      )}

      {step === 3 && (
        <>
          <h1>One More Thing... ❤️</h1>

          <p>
            I know this isn't exactly in person.
            <br />
            <br />
            I would've preferred to ask you
            face to face.
            <br />
            <br />
            But I didn't want to keep waiting
            forever.
            <br />
            <br />
            So here goes...
          </p>

          <button onClick={() => setStep(4)}>
            Okay ❤️
          </button>
        </>
      )}

      {step === 4 && (
        <>
          <h1>Will you be my girlfriend? ❤️</h1>

          <div className="buttons">
            <button
              className="yes"
              onClick={handleYes}
            >
              Yes ❤️
            </button>

            <button
              className="no"
              onMouseEnter={moveButton}
            >
              No 😅
            </button>
          </div>
        </>
      )}

      {step === 5 && (
        <>
          <h1>🥹❤️</h1>

          <p>
            You just made me the happiest guy
            right now.
            <br />
            <br />
            Thank you for saying yes ❤️
            <br />
            <br />
            🎵 One Less Lonely Girl 🎵
          </p>

          <p className="bugsTitle">
            Yeah... this is basically us 😂❤️
          </p>

          <div className="bugsGallery">
            <img
              src="/bugs1.jpg"
              alt="Bugs and Lola"
              className="bugsPhoto"
            />

            <img
              src="/bugs2.jpg"
              alt="Bugs and Lola"
              className="bugsPhoto"
            />
          </div>
        </>
      )}
    </div>
  );
}