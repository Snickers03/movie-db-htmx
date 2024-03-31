
const MovieList = () => {
  return (
    <div className="w-1/2">
    <div className="flex justify-between mb-3">
      <h1 className="text-2xl">Movie DB</h1>
        <button className="border-2 border-slate-700 px-3 rounded-md" hx-get="/api/movie" hx-target="#movielist">Refresh</button>
    </div>

    

    
  </div>
  )
}

export default MovieList