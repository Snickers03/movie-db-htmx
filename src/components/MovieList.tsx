
const MovieList = () => {
  return (
    <div className="w-1/2">
    <div className="flex justify-between mb-3">
      <h1 className="text-2xl">Movie DB</h1>
        <button className="border-2 border-slate-700 px-3 rounded-md" hx-get="/api/movie" hx-target="#movielist" >
          Filme laden
        </button>
    </div>
    <div id="movielist" className="mt-4">
      <p className="mt-12 text-center">Drücke auf <span className="underline">Filme laden</span> Button oben rechts um alle Filme anzuzeigen.</p>
    </div>
  </div>
  )
}

export default MovieList