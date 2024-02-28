// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  data: any;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const data = fetch("https://mockend.up.railway.app/api/products").then((response) => response.json());
  res.status(200).json({ data: data });
}
