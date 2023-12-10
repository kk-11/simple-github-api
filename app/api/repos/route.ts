import type { NextRequest } from "next/server";
// import { repos } from "@/app/mocked";

const baseUrl = "https://api.github.com/users/";

let headers = {};
if (process.env.GITHUB_TOKEN) {
    headers = {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
    };
}

const fetchData = async (user: string) => {
    const data = await fetch(`${baseUrl}${user}/repos`, {
        headers,
    })
        .then((res) => res.json())
        .then((res) => {
            if (res?.message?.includes("API rate limit")) {
                return { message: "API Rate limit exceeded", error: true };
            }
            return res;
        })
        .catch((e) => console.error(e));

    return data;
};

export async function GET(req: NextRequest) {
    const searchParams = req.nextUrl.searchParams;
    const user = searchParams.get("user");
    const result = await fetchData(user as string);

    return Response.json(result);
}
