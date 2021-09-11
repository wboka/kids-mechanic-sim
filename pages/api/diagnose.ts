import type { NextApiRequest, NextApiResponse } from "next";

const RESPONSES: Array<string> = [
  "a flat tire",
  "a rusty bolt",
  "a bad engine",
  "4 bald tires",
  "a cracked windshield",
  "a missing door handle",
];

type Data = {
  year: number;
  make: string;
  model: string;
  type: string;
  mileage: number;
  problem: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const responseIndex: number = Math.floor(Math.random() * RESPONSES.length);

  res.status(200).json({
    year: req.body.year,
    make: req.body.make,
    model: req.body.model,
    type: req.body.type,
    mileage: req.body.mileage,
    problem: RESPONSES[responseIndex],
  });
}
