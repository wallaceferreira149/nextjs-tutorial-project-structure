// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { ISearchData } from "../../lib/search/types";

import database from "../../lib/search/database.json";

interface IApiSearchRequest extends NextApiRequest {
  body: { searchTerm?: string };
}

export type IApiSearchReponseData = ISearchData[];

export default function handler(
  req: IApiSearchRequest,
  res: NextApiResponse<IApiSearchReponseData>
) {
  const {
    body: { searchTerm },
  } = req;

  if (req.method === "POST" && searchTerm && searchTerm.length > 0) {
    const searchPattern = new RegExp(searchTerm, "i");
    const filteredResults = database.filter((result) => {
      return (
        searchPattern.test(result.title) || searchPattern.test(result.text)
      );
    });
    res.status(200).json(filteredResults);
  } else {
    res.status(400).json([]);
  }
}
