import React, { useEffect, useState } from "react";

import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

import { FaArrowLeft } from "react-icons/fa";

import ProfileSkeleton from "../components/ProfileSkeleton";

import "../styles/Profile.scss";

interface Character {
  name: string;
  image: string;
  status: string;
  species: string;
  type?: string;
  gender: string;
  origin: { name: string };
  location: { name: string };
  episode: string[];
}

const Profile: React.FC = () => {
  const [character, setCharacter] = useState<Character | null>(null);
  const navigate = useNavigate();
  // ? Consume id from parameters
  const { id } = useParams();

  useEffect(() => {
    const fetchCharacter = async () => {
      const response = await axios.get(
        `http://localhost:80/api/character/${id}`
      );
      setCharacter(response.data);
    };

    fetchCharacter();
  }, [id]);

  return (
    <>
      {character ? (
        <div className="profile-container">
          <FaArrowLeft
            className="back-button"
            size={20}
            onClick={() => navigate("/")}
          />
          <h1 className="profile-name">{character.name}</h1>
          <div className="profile-content">
            <img
              className="profile-image"
              src={character.image}
              alt={character.name}
            />
            <div className="profile-details">
              <p>
                <strong>Status:</strong> {character.status}
              </p>
              <p>
                <strong>Species:</strong> {character.species}
              </p>
              {character.type && (
                <p>
                  <strong>Type:</strong> {character.type}
                </p>
              )}
              <p>
                <strong>Gender:</strong> {character.gender}
              </p>
              <p>
                <strong>Origin:</strong> {character.origin.name}
              </p>
              <p>
                <strong>Location:</strong> {character.location?.name}
              </p>
              <p>
                <strong>Appeared in:</strong> {character.episode.length}{" "}
                episodes
              </p>
            </div>
          </div>
        </div>
      ) : (
        <ProfileSkeleton />
      )}
    </>
  );
};

export default Profile;
