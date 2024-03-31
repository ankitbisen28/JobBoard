export const Banner = () => {
  return (
    <div
      className="bg-blue-500 h-svh bg-cover opacity-80"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1573496130407-57329f01f769?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      }}
    >
      <div className="container xs:pt-10 h-4/5 mx-auto px-4 flex flex-col justify-center items-center">
        <h1 className="sm:text-4xl xs:pt-10 xs:text-2xl font-semibold">
          {" "}
          Build Your{" "}
        </h1>
        <h1 className="sm:text-4xl xs:text-2xl m-3 font-semibold">
          POWERFUL CAREER
        </h1>
        <p className="text-center">
          when looking at its layout. The point of using Lorem Ipsum is that it
          has a more- <br />
          or-less normal distribution of letters, as opposed to{" "}
        </p>
        <div className="flex sm:flex-row xs:flex-col justify-center items-center gap-2 m-3">
          <input
            type="text"
            placeholder="Keywords"
            className="input input-bordered w-full max-w-xs"
          />
          <input
            type="text"
            placeholder="All location"
            className="input input-bordered w-full max-w-xs"
          />
          <input
            type="text"
            placeholder="SEO Expert"
            className="input input-bordered w-full max-w-xs"
          />
          <button className="btn btn-primary">Submit</button>
        </div>
        <div className="flex sm:flex-row justify-center items-center gap-3 sm:m-3">
          <input type="checkbox" className="checkbox" />{" "}
          <p className="text-black-400">Freelancing</p>
          <input type="checkbox" className="checkbox" />{" "}
          <p className="text-black-400">Full Time</p>
          <input type="checkbox" className="checkbox" />{" "}
          <p className="text-black-400">Part Time</p>
        </div>
      </div>
    </div>
  );
};
