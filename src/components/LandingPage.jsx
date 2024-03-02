import { useNavigate } from "react-router-dom";
const LandingPage = () => {
  const navigate = useNavigate();

  const navigateToGame = () => {
    navigate("/game");
  };

  return (
    <div className="flex flex-row  py-48 justify-center ">
      <div className=" w-[649px] h-[522px]">
        <img src="/public/dice.png"></img>
      </div>
      <div className="flex flex-col items-center justify-center gap-6">
        <h1 className=" font-extrabold text-7xl">DICE GAME</h1>
        <button
          className="border border-black ml-[250px]  w-32 h-10 bg-black text-white hover:bg-white hover:text-black transition-shadow"
          onClick={navigateToGame}
        >
          PLAY NOW
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
