import { Request, Response } from "express";
import { getCryptoPrice } from "../services/cryptoService";
import Alert from "../models/Alert";

export const fetchPrice = async (req: Request, res: Response) => {
  const { crypto } = req.params;

  try {
    const price = await getCryptoPrice(crypto);
    if (price === null) {
      return res.status(404).json({ message: "Crypto not found" });
    }
    res.json({ crypto, price });
  } catch (error) {
    res.status(500).json({ message: "Error fetching price" });
  }
};

export const createAlert = async (req: Request, res: Response) => {
  const { userId, crypto, priceTarget, isAbove } = req.body;

  try {
    const alert = new Alert({ userId, crypto, priceTarget, isAbove });
    await alert.save();
    res.status(201).json(alert);
  } catch (error) {
    res.status(500).json({ message: "Error creating alert" });
  }
};
