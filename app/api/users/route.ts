const baseUrl = "https://api.github.com/search/users?q=";
import type { NextRequest } from "next/server";
// import { users } from "./../../mocked";

let headers = {};
if (process.env.GITHUB_TOKEN) {
    headers = {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
    };
}
const fetchData = async (qs: string) => {
    const data = await fetch(`${baseUrl}${qs}`, {
        headers,
    })
        .then((res) => res.json())
        .then((res) => {
            if (res?.message?.includes("API rate limit")) {
                return { message: "API Rate limit exceeded", error: true };
            }
            return res?.items?.splice(0, 5) || res;
        })
        .catch((e) => console.error(e));
    

    return data;
};

export async function GET(req: NextRequest) {
    const searchParams = req.nextUrl.searchParams;
    const query = searchParams.get("qs");
    const result = await fetchData(query as string);

    return Response.json(result);
}
