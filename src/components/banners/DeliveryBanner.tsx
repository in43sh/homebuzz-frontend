import { Link } from 'react-router-dom';
import weDeliverCar from '../../assets/images/we-deliver-car.png';

function WeDeliverBanner() {
  return (
    <div className="bg-primary relative flex w-full flex-col items-center justify-center px-4 py-28 text-white">
      {/* Main text and overlapping image */}
      <div className="relative">
        <p className="text-center text-[16rem] leading-none font-bold sm:text-[7rem] md:text-[9rem] lg:text-[14rem]">
          WE DELIVER
        </p>
        <img
          src={weDeliverCar}
          alt="We Deliver. Fast. Efficient. Free."
          className="absolute bottom-[-6rem] left-1/2 w-4/5 -translate-x-1/2 transform"
        />
      </div>

      {/* Button */}
      <div className="mt-36 flex justify-center">
        <Link to="/">
          <button className="btn pointer rounded bg-black px-6 py-3 text-white">
            Find out more
          </button>
        </Link>
      </div>
    </div>
  );
}

export default WeDeliverBanner;
