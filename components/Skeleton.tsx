export default function Skeleton() {
  // Skeleton
  return (
    <div className="flex min-h-screen flex-col items-center justify-between">
      <div className="flex flex-wrap items-center gap-4 justify-between w-full">
        <div className="w-full h-[45vh] bg-gray-200 rounded-xl animate-pulse"></div>
        <div className="w-[49%] h-8 bg-gray-200 rounded-xl animate-pulse"></div>
        <div className="w-[49%] h-8 bg-gray-200 rounded-xl animate-pulse"></div>
        <div className="w-[49%] h-8 bg-gray-200 rounded-xl animate-pulse"></div>
        <div className="w-[49%] h-8 bg-gray-200 rounded-xl animate-pulse"></div>
        <div className="w-full h-[15vh] bg-gray-200 rounded-xl animate-pulse"></div>
      </div>
    </div>
  );
}
