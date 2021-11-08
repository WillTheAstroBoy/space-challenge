import { Navbar } from "../components";

export default function Home() {
  return (
    <div className="bg-cover min-h-screen min-w-screen bg-home_mobile md:bg-home_tablet lg:bg-home_desktop bg-no-repeat text-center bg-cover md:h-auto ">
      <Navbar active="home" />
      <div className="lg:flex lg:h-3/4 lg:items-center lg:w-full lg:justify-evenly" >
        <div className="lg:m-0 lg:w-1/3 md:w-3/5 md:my-24  md:h-80 w-80 flex flex-col justify-between mx-auto mt-8 align-center  h-72 text-center">
          <p className="md:text-3xl tracking-widest text-off-pink uppercase font-barlow-condensed">
            So, you want to travel to
          </p>
          <h1 className="lg:text-10xl md:text-9xl uppercase text-white text-7xl font-Bellefair">space</h1>
          <p className="text-off-pink leading-7 font-barlow ">
            Let's face it; if you want ot go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we'll give you a truly out of this
            world experience!
          </p>
        </div>
        <button className="md:w-60 mb-8 lg:mb-0  md:h-60 md:text-4xl bg-white uppercase rounded-full w-40 mt-8 h-40">
          explore
        </button>
      </div>
    </div>
  );
}
