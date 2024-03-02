import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const GamePage = () => {
  const [isTrue, setIstrue] = useState(false);
  const [btnText, setbtnText] = useState("Show Rules");
  const [number, setNumber] = useState(0);
  const [score, setScore] = useState(0);
  var one = 1,
    two = 2,
    three = 3,
    four = 4,
    five = 5,
    six = 6;
  const showHintText = () => {
    setIstrue(!isTrue);
    if (!isTrue) {
      setbtnText("Hide Rules");
    } else setbtnText("Show Rules");
  };

  const [randNum, setRandNum] = useState(1);

  const setRandomNumber = () => {
    const newRandNum = Math.floor(Math.random() * 6) + 1;
    setRandNum(newRandNum);
    if (number !== 0) {
      if (newRandNum === number) setScore((prevScore) => prevScore + number);
      else setScore((prevScore) => prevScore - 2);
    } else {
      toast.warning("Select a number to continue !");
      setRandNum(1);
    }
  };

  const resetScore = () => {
    setScore(0);
    setNumber(0);
  };
  return (
    <div>
      <ToastContainer />
      <div className=" flex flex-col">
        <div className="flex flex-row justify-evenly mt-20">
          <div className="flex flex-col items-center">
            <h1 className="font-semibold text-8xl">{score}</h1>
            <h1 className="text-3xl">Total Score</h1>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-row gap-4 items-center">
              <button
                className="border border-black h-[72px] w-[72px] hover:text-white hover:bg-black"
                onClick={() => {
                  setNumber(one);
                }}
                style={
                  number === one
                    ? { backgroundColor: "black", color: "white" }
                    : {}
                }
              >
                {one}
              </button>
              <button
                className="border border-black h-[72px] w-[72px]  hover:text-white hover:bg-black"
                onClick={() => {
                  setNumber(two);
                }}
                style={
                  number === two
                    ? { backgroundColor: "black", color: "white" }
                    : {}
                }
              >
                {two}
              </button>
              <button
                className="border border-black h-[72px] w-[72px]  hover:text-white hover:bg-black"
                onClick={() => {
                  setNumber(three);
                }}
                style={
                  number === three
                    ? { backgroundColor: "black", color: "white" }
                    : {}
                }
              >
                {three}
              </button>
              <button
                className="border border-black h-[72px] w-[72px]  hover:text-white hover:bg-black"
                onClick={() => {
                  setNumber(four);
                }}
                style={
                  number === four
                    ? { backgroundColor: "black", color: "white" }
                    : {}
                }
              >
                {four}
              </button>
              <button
                className="border border-black h-[72px] w-[72px]  hover:text-white hover:bg-black"
                onClick={() => {
                  setNumber(five);
                }}
                style={
                  number === five
                    ? { backgroundColor: "black", color: "white" }
                    : {}
                }
              >
                {five}
              </button>
              <button
                className="border border-black h-[72px] w-[72px]  hover:text-white hover:bg-black"
                onClick={() => {
                  setNumber(six);
                }}
                style={
                  number === six
                    ? { backgroundColor: "black", color: "white" }
                    : {}
                }
              >
                {six}
              </button>
            </div>
            <div className="mt-5 ml-[350px]">
              <h1 className="font-semibold text-2xl">Select Number</h1>
            </div>
          </div>
        </div>

        <div className="flex flex-col mt-36 items-center">
          <div className=" w-36 h-36 ">
            <img
              src={`/src/dice/d${randNum}.png`}
              onClick={setRandomNumber}
            ></img>
          </div>
          <h1 className="mt-5 text-xl text-center">Click on Dice to roll</h1>
          <button
            className="mt-10 border border-black rounded-md w-[220px] h-[44px]  hover:text-white hover:bg-black"
            onClick={resetScore}
          >
            Reset Scores
          </button>
          <button
            className="mt-5 bg-black text-white rounded-md  w-[220px] h-[44px]  hover:text-black hover:bg-white hover:border hover:border-black"
            onClick={showHintText}
          >
            {btnText}
          </button>
        </div>

        {isTrue && (
          <div className="bg-[#FBF1F1] mt-10 mx-[350px] rounded-md">
            <div className="flex flex-col p-4">
              <h1 className="font-bold text-xl">How to play dice game</h1>
              <h2>Select any number</h2>
              <h2>Click on dice image</h2>
              <h2>
                After click on dice if selected number is equal to dice number
                you will get same point as dice{" "}
              </h2>
              <h2>If you get wrong guess then 2 point will be dedcuted </h2>
            </div>
          </div>
        )}
      </div>
      {console.log(randNum)}
    </div>
  );
};

export default GamePage;
