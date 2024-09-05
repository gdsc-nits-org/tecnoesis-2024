import { useProgress } from "@react-three/drei";

export default function LoadingProgress() {
  const { progress } = useProgress();

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black">
      <h1 className="text-md mb-8 text-center font-rp1 font-bold text-white lg:text-5xl">
        Beyond the horizon, Into the Arena
      </h1>
      <div className="h-2 w-2/3 overflow-hidden rounded-full bg-gray-700 md:w-1/3">
        <div
          className="h-full bg-[gold] transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="mt-4 text-xl text-white">{Math.round(progress)}%</p>
    </div>
  );
}
