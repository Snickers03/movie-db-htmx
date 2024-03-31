import { connectToDatabase } from "@/database";
import { Movie, generateMovieHTMLResponse, generateMoviesHTMLResponse, parseFormBody } from "@/utils/htmxHelper";
import { ObjectId } from "mongodb";

type Params = {
    movieId: string
}

export async function GET(request: Request, context: { params: Params }) {
    try {
        const db = await connectToDatabase(process.env.DATABASE_URL as string);
        const collection = db.collection("movie");
        const movieId = context.params.movieId;
    
        const movie = await collection.findOne({ _id: new ObjectId(movieId) }) as unknown as Movie;
    
    return generateMovieHTMLResponse(movie);
    } catch (error) {
        console.error(error);
        return Error("Internal Server Error");
    }

}


export async function DELETE(request: Request, context: { params: Params }) {
    try {
    const db = await connectToDatabase(process.env.DATABASE_URL as string);
    const collection = db.collection("movie");


    const movieId = context.params.movieId;
    await collection.deleteOne({ _id: new ObjectId(movieId) });
    
    const movies = (await collection.find().toArray()) as unknown as Movie[];

    return generateMoviesHTMLResponse(movies);
  } catch (error) {
    console.error(error);
    return Error("Internal Server Error");
  }
}

export async function PUT(req: Request, context: { params: { movieId: string } }) {
    try {
        const db = await connectToDatabase(process.env.DATABASE_URL as string);
        const collection = db.collection("movie");
        const movieId = context.params.movieId;


        const contentType = req.headers.get('Content-Type');

        let body: any;
        if (contentType === 'application/json') {
            body = await req.json();
        } else if (contentType === 'application/x-www-form-urlencoded') {
            const rawData = await req.text();
            body = parseFormBody(rawData);
        } else {
            throw new Error(`Unsupported content type: ${contentType}`);
        }
    
        await collection.updateOne({ _id: new ObjectId(movieId) }, { $set: body });
    
        const movies = (await collection.find().toArray()) as unknown as Movie[];

        return generateMoviesHTMLResponse(movies);
    } catch (error) {
        console.error(error);
        return Error("Internal Server Error");
    }
    }
