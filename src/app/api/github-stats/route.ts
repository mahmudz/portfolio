// File: src/pages/api/github-activity.ts
import * as cheerio from "cheerio";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
    try {
        const searchParams = req.nextUrl.searchParams as URLSearchParams;

        const url = `https://github.com/users/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}/contributions?${searchParams.toString()}`;

        // Fetch the HTML
        const response = await fetch(url);
        if (!response.ok) {
            return Response.json({ error: `Failed to fetch URL: ${url}` });
        }

        const html = await response.text();

        // Load HTML with cheerio
        const $ = cheerio.load(html);

        // Select the target div
        const rawData = $(".js-activity-overview-graph-container").attr("data-percentages");

        if (!rawData) {
            return Response.json({ error: "No data-percentages attribute found" });
        }

        // Decode HTML entities (&quot; → ")
        const decoded = rawData.replace(/&quot;/g, '"');

        let parsed;
        
        try {
            parsed = JSON.parse(decoded);
        } catch {
            return Response.json({ error: "Failed to parse JSON from data-percentages" });
        }

        parsed = Object.entries(parsed).map((item: any) => ({category: item[0], value: item[1]}))

        return Response.json(parsed);
    } catch (err: any) {
        return Response.json({ error: err.message || "Something went wrong" });
    }
}
