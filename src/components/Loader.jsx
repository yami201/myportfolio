const Loader = ({progress}) => {
  console.log("Loading progress:", progress);
  return (
    <>
      <div className="text-black w-screen h-screen bg-white font-bold text-lg">
        Loading... {progress}%
      </div>
    </>
  );
}
export default Loader;
