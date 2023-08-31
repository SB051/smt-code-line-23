import { useState, useEffect } from "react";
import { db, rt } from "../../firebase";
import { remove, ref, onValue } from "firebase/database";
import { doc, updateDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

import bgSMT from "@assets/images/bgSMT.png";
import mobileBG from "@assets/images/mobileBG.png";

import Threedots from "@components/Threedots";

function Random(props) {
  const [randomState, setRandomState] = useState("loading");
  const [hintz, setHintz] = useState("");
  const [selectedHint, setSelectedHint] = useState("");
  const [hintText, setHintText] = useState("");
  const [isClicked, setIsClicked] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (props.hint !== "") {
      setHintText(props.hint);
    }
  }, [props.hint]);

  useEffect(() => {
    const hintsRef = ref(rt, "hints");
    onValue(hintsRef, (snapshot) => {
      const hints = snapshot.val();
      if (hints) {
        const hintKeys = Object.keys(hints);
        setHintz(hintKeys.map((key) => ({ id: key, text: hints[key] })));
      }
    });
  }, []);

  const selectHint = () => {
    if (hintz.length > 0) {
      const randomIndex = Math.floor(Math.random() * hintz.length);
      const hint = hintz[randomIndex];
      setSelectedHint(hint);
    }
  };

  const deleteSelectedHint = () => {
    if (selectedHint) {
      const hintRef = ref(rt, `hints/${selectedHint.id}`);
      remove(hintRef);
      setSelectedHint("");
    }
  };

  const saveSelectedHint = async () => {
    const userRef = doc(db, "Users", props.id);
    await updateDoc(userRef, { hint: selectedHint.text });
  };

  const handleHint = () => {
    if (props.hint === "" || props.hint === undefined) {
      setRandomState("random");
      selectHint();
    } else {
      setRandomState("random");
      setTimeout(() => {
        setRandomState("show");
      }, 2000);
    }
  };

  useEffect(() => {
    if (selectedHint !== "") {
      saveSelectedHint();
      setHintText(selectedHint.text);
      setRandomState("show");
      deleteSelectedHint();
    }
  }, [selectedHint]);

  return (
    <>
      <img
        src={bgSMT}
        alt="BG"
        className="absolute hidden h-full w-full md:block"
      />
      <img
        src={mobileBG}
        alt="BG"
        className="absolute h-full w-full md:hidden"
      />
      <div className="absolute flex h-full w-full flex-col items-center justify-center space-y-8">
        <div className="flex h-[240px] w-[360px] flex-col items-center justify-center space-y-10 rounded-2xl bg-white text-black">
          <span className="text-xl">คำใบ้ของคุณคือ</span>
          <span className="text-4xl">
            {randomState === "loading" && <Threedots />}
            {randomState === "random" && <Threedots speeder={true} />}
            {randomState === "show" && hintText}
          </span>
          <button
            disabled={isClicked}
            className="rounded-xl bg-sky-950 px-6 py-2 text-white"
            onClick={() => {
              setIsClicked(true);
              handleHint();
            }}
          >
            สุ่มเลย!
          </button>
        </div>
        <button
          className="flex text-white"
          onClick={() => {
            navigate("/namelists");
          }}
        >
          ดูข้อมูลรุ่นพี่
          <svg
            className="ml-1"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <g fill="none" fillRule="evenodd">
              <path d="M18 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8c0-1.1.9-2 2-2h5M15 3h6v6M10 14L20.2 3.8" />
            </g>
          </svg>
        </button>
      </div>
    </>
  );
}

export default Random;
