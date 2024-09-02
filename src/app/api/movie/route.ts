import { connectToDatabase } from "@/database";
import {
  generateMoviesHTMLResponse,
  Movie,
  parseFormBody,
} from "@/utils/htmxHelper";

export async function GET(req: Request) {
  try {
    const db = await connectToDatabase(process.env.DATABASE_URL as string);
    const collection = db.collection("movie");
    const movies = (await collection.find().toArray()) as unknown as Movie[];
    return generateMoviesHTMLResponse(movies);
  } catch (error) {
    console.error(error);
    return Error("Internal Server Error");
  }
}

export async function POST(req: Request) {
  try {
    const db = await connectToDatabase(process.env.DATABASE_URL as string);
    const collection = db.collection("movie");
    const contentType = req.headers.get("Content-Type");

    let body: any;
    if (contentType === "application/json") {
      body = await req.json();
    } else if (contentType === "application/x-www-form-urlencoded") {
      const rawData = await req.text();
      body = parseFormBody(rawData);
    } else {
      throw new Error(`Unsupported content type: ${contentType}`);
    }
    await collection.insertOne(body);
    const movies = (await collection.find().toArray()) as unknown as Movie[];

    return generateMoviesHTMLResponse(movies);
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
