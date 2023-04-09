import useTimer from "@/hook/useTimer";

export default function Home() {
  const [seconds, setTimer] = useTimer();
  const handeleTimer = () => {
    setTimer(10);
  };
  return (
    <main className="h-screen">
      <div className="h-full flex flex-col justify-center items-center">
        <div>
          <button
            type="button"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
            onClick={() => {
              handeleTimer();
            }}
          >
            Click me
          </button>
        </div>
        <div>{seconds > 0 && <span>{seconds}</span>}</div>
      </div>
    </main>
  );
}
