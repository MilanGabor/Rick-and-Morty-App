import React from "react";

import { useNavigate } from "react-router-dom";

import "../styles/CharacterCard.scss";

interface CharacterCardProps {
  name: string;
  image: string;
  species: string;
  status: string;
  url: string;
}

const CharacterCard: React.FC<CharacterCardProps> = ({
  name,
  image,
  species,
  status,
  url,
}) => {
  const navigate = useNavigate();

  // ? navigate to endpoint consumed from url to handle this capability of API
  const handleCharacterClick = (url: string) => {
    const endpoint = url.split("/").slice(-2).join("/");
    navigate(`${endpoint}`);
  };

  return (
    <div
      className="character-card"
      onClick={() => handleCharacterClick(`${url}`)}
    >
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{species}</p>
      <p>{status}</p>
    </div>
  );
};

export default CharacterCard;
