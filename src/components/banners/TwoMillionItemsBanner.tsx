const TwoMillionItemsBanner = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-4 bg-[#f2c744] px-6 py-10 md:flex-row md:gap-8">
      <h2 className="text-center text-2xl font-bold text-black md:text-left md:text-4xl">
        More Than 2 Million Items <br className="block md:hidden" />
        Available in Store
      </h2>
      <button className="rounded-md bg-black px-6 py-3 font-semibold text-white transition-colors hover:bg-gray-800">
        Store
      </button>
    </section>
  );
};

export default TwoMillionItemsBanner;
