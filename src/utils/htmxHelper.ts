export const parseFormBody = (body: string) => {
    return body.split('&').reduce((acc: { [key: string]: any }, pair: string) => {
        const [key, value] = pair.split('=');
        acc[decodeURIComponent(key)] = decodeURIComponent(value).replace(/\+/g, ' ');
        return acc;
    }, {});
}

export interface Movie {
    _id: string;
    title: string;
    year: number;
    rating: number;
}


export const generateMoviesHTMLResponse = (movies: Movie[]): Response => {
    const htmlContent = movies
        .map(movie => `
        <div class="border-2 border-slate-700 p-2 mb-2 rounded-lg">
          <h2 class="text-xl">${movie.title}</h2>
          <p>Erscheinungsjahr: ${movie.year}</p>
          <p>Rating: ${movie.rating}</p>
            <button class="border-2 border-slate-700 px-3 rounded-md" hx-get="/api/movie/${movie._id}" hx-target="#editmovie">Bearbeiten</button>
          <button class="border-2 border-slate-700 px-3 rounded-md" hx-delete="/api/movie/${movie._id}" hx-target="#movielist">Löschen</button>
        </div>
      `).join('');

    return new Response(htmlContent, {
        headers: {
            "Content-Type": "text/html",
        },
    });
}

export const generateMovieHTMLResponse = (movie: Movie): Response => {
    return new Response(`
    <div class="border-2 border-slate-800 rounded-md p-4">
    <p class="text-2xl text-center">Film bearbeiten</p>
    <form id="sdf" class="mt-4" hx-put="/api/movie/${movie._id}" hx-swap="outerHTML" hx-target="#movielist">
      <div class="flex flex-col space-y-4">
        <label>
          <span class="pr-2">Titel</span>
          <input class="border-2 border-slate-700 rounded-md" type="text" name="title" value="${movie.title}" />
        </label>
        <label>
          <span class="pr-2">Jahr</span>
          <input class="border-2 border-slate-700 rounded-md" type="number" name="year" value="${movie.year}" />
        </label>
        <label>
          <span class="pr-2">Bewertung</span>
          <input class="border-2 border-slate-700 rounded-md" type="number" name="rating" value="${movie.rating}">
        </label>
        <button class="border-2 border-slate-700 px-3 rounded-md" type="submit">Aktualisieren</button>
      </div>
    </form>
  </div>
    `,
        {
            headers: {
                "Content-Type": "text/html",
            },
        }
    );
}
