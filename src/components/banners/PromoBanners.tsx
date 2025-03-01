import React from 'react';
import vacuum from '../../assets/images/vacuum.png';
import card from '../../assets/images/card.png';

interface BannerProps {
  bgColor: string;
  title: string;
  subtitle: string;
  imgSrc: string;
  imgAlt: string;
}

const PromoBanner: React.FC<BannerProps> = ({
  bgColor,
  title,
  subtitle,
  imgSrc,
  imgAlt,
}) => {
  return (
    <div
      className={`flex flex-col items-center justify-between rounded-md p-4 text-white sm:flex-row ${bgColor} flex-1`}
    >
      <div>
        <h3 className="mb-2 text-xl font-bold">{title}</h3>
        <p className="text-md">{subtitle}</p>
      </div>
      <img
        className="mt-2 h-auto w-32 sm:mt-0 sm:ml-4"
        src={imgSrc}
        alt={imgAlt}
      />
    </div>
  );
};

const PromoBanners: React.FC = () => {
  return (
    <div className="mx-auto mt-8 flex max-w-7xl flex-col gap-4 sm:flex-row">
      <PromoBanner
        bgColor="bg-purple-500"
        title="50% Off Select Dyson Vacuums"
        subtitle="Free delivery. Today Only"
        imgSrc={vacuum}
        imgAlt="Dyson Vacuum"
      />
      <PromoBanner
        bgColor="bg-blue-500"
        title="Financing Available"
        subtitle="Up to 24 month financing. Terms & conditions apply"
        imgSrc={card}
        imgAlt="Credit Card"
      />
    </div>
  );
};

export default PromoBanners;
