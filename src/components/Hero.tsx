import stoolBg from '../assets/images/banner.png';

const Hero = () => {
  return (
    <section
      className="relative flex items-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${stoolBg})`,
        height: '70vh',
      }}
    >
      {/* Dark overlay if you’d like text to be more legible; remove if not needed */}
      {/* <div className="absolute inset-0 bg-black/10"></div> */}
      <div className="relative mr-10 ml-auto max-w-xl p-4 text-right text-black">
        <h1 className="mb-3 text-4xl font-bold">Furniture Week</h1>
        <p className="mb-6 text-lg">
          Up to <span className="font-semibold text-[#f2c744]">50% off</span>{' '}
          select furniture
        </p>
        <button className="inline-block rounded-md bg-black px-6 py-3 font-semibold text-white transition-colors hover:bg-gray-800">
          Browse in Store
        </button>
      </div>
    </section>
  );
};

export default Hero;
