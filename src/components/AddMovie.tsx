
const AddMovie = () => {
  return (
    <div className="border-2 border-slate-800 rounded-md p-4">
    <p className="text-2xl text-center">Film hinzufügen</p>
    <form id="addmovie" className="mt-4" hx-post="/api/movie" hx-swap="outerHTML" hx-target="#movielist">
      <div className="flex flex-col space-y-4">
        <label>
          <span className="pr-2">Titel</span>
          <input className="border-2 border-slate-700 rounded-md" type="text" name="title" />
        </label>
        <label>
          <span className="pr-2">Jahr</span>
          <input className="border-2 border-slate-700 rounded-md" type="number" name="year" />
        </label>
        <label>
          <span className="pr-2">Bewertung</span>
          <input className="border-2 border-slate-700 rounded-md" type="number" name="rating" />
        </label>
        <button className="border-2 border-slate-700 px-3 rounded-md" type="submit">Hinzufügen</button>
      </div>
    </form>
  </div>
  )
}

export default AddMovie