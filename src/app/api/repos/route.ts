import type { NextRequest } from "next/server";
// import { repos } from "@/app/mocked";

const baseUrl = "https://api.github.com/users/";

const fetchData = async (user: string) => {
    const data = await fetch(`${baseUrl}${user}/repos`, {
        headers: { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` },
    })
        .then((res) => res.json())
        .catch((e) => {
            throw new Error(`Something went wrong: ${e}`);
        });

    return data;
};

export async function GET(req: NextRequest) {
    const searchParams = req.nextUrl.searchParams;
    const user = searchParams.get("user");
    const result = await fetchData(user as string);

    return Response.json(result);
}
