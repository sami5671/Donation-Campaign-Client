import "./Banner.css";

const Banner = () => {
  return (
    <div className="background-img">
      {/* --------------------------- Here is the search  option  */}
      <div>
        <h2 className="text-3xl lg:text-5xl text-center font-bold">
          I Grow By Helping People In Need
        </h2>
      </div>

      <div className="text-center mt-16">
        <input
          type="text"
          placeholder="Search here"
          className="input input-bordered lg:w-full max-w-xs"
        />
        <button className="bg-[#FF444A] py-3 px-6 rounded-lg text-white">
          Search
        </button>
      </div>
      {/* --------------------------- Here End the search  option  */}
    </div>
  );
};

export default Banner;
