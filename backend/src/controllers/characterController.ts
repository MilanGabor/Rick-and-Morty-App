import { Request, Response } from "express";
import {
  fetchAllCharacters,
  fetchCharacterById,
} from "../services/characterService";

export const getAllCharacters = async (req: Request, res: Response) => {
  const { page, name } = req.query;
  try {
    const data = await fetchAllCharacters(Number(page) || 1, name as string);
    res.json(data);
  } catch (error: any) {
    res.status(500).send(error.message);
  }
};

export const getCharacterById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const character = await fetchCharacterById(id);
    res.json(character);
  } catch (error: any) {
    res.status(500).send(error.message);
  }
};
