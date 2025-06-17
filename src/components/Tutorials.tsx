import React from 'react';
import paint from '../assets/images/paint2.png';

interface TutorialCardProps {
  title: string;
  info: string;
  backgroundImage: string;
}

const TutorialCard: React.FC<TutorialCardProps> = ({
  title,
  info,
  backgroundImage,
}) => {
  return (
    <div
      className="relative flex h-48 items-end overflow-hidden rounded-md bg-cover bg-center p-4 text-white sm:h-64 md:h-72"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Bottom-left Title */}
      <h3 className="text-lg font-bold drop-shadow-md">{title}</h3>

      {/* Top-right Info */}
      <div className="absolute top-2 right-2 text-sm font-light drop-shadow">
        {info}
      </div>

      {/* Simple overlay gradient (optional) */}
      <div className="absolute inset-0 bg-black opacity-20"></div>
    </div>
  );
};

const TutorialsSection: React.FC = () => {
  // Data for each tutorial card
  const tutorials = [
    {
      id: 1,
      title: 'Gardening tips & tricks',
      info: '6 promoted product\n2 min read',
      backgroundImage: paint,
    },
    {
      id: 2,
      title: 'DIY Furniture Renovation',
      info: '6 promoted product\n2 min read',
      backgroundImage: paint,
    },
    {
      id: 3,
      title: 'Picking perfect paint',
      info: '6 promoted product\n2 min read',
      backgroundImage: paint,
    },
    {
      id: 4,
      title: 'Painting 101',
      info: '6 promoted product\n2 min read',
      backgroundImage: paint,
    },
  ];

  return (
    <div className="mx-auto max-w-7xl p-4">
      <h2 className="mb-6 text-3xl font-bold">
        Inspire Yourself with Tutorials
      </h2>

      {/* 2x2 grid on desktop, 1x1 or 1x2 on smaller screens */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {/* Top row: 2 items */}
        {tutorials.slice(0, 2).map((tut) => (
          <TutorialCard
            key={tut.id}
            title={tut.title}
            info={tut.info}
            backgroundImage={tut.backgroundImage}
          />
        ))}
      </div>

      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {/* Bottom row: 2 items */}
        {tutorials.slice(2, 4).map((tut) => (
          <TutorialCard
            key={tut.id}
            title={tut.title}
            info={tut.info}
            backgroundImage={tut.backgroundImage}
          />
        ))}
      </div>

      {/* Store button */}
      <div className="mt-6 flex justify-center">
        <button className="rounded-md bg-black px-6 py-3 font-semibold text-white hover:bg-gray-800">
          Store
        </button>
      </div>
    </div>
  );
};

export default TutorialsSection;
