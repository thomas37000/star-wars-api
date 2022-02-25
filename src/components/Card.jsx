import React from "react";

const Card = ({
  affiliations,
  apprentices,
  born,
  bornLocation,
  cybernetics,
  homeworld,
  image,
  masters,
  name,
  species,
}) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src={image} alt={name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">{affiliations}</p>
      </div>
      <div className="px-6 py-4">
        <p className="text-gray-700 text-base">{apprentices}</p>
      </div>
      <div className="px-6 py-4">
        <p className="text-gray-700 text-base">{masters}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #{homeworld}
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #{born}
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #{bornLocation}
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #{species}
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #{cybernetics}
        </span>
      </div>
    </div>
  );
};

export default Card;
