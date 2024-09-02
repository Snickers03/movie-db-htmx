const MovieList = () => {
  return (
    <div className='w-1/2'>
      <div className='mb-3 flex justify-between'>
        <h1 className='text-2xl'>Movie DB</h1>
        <button
          className='rounded-md border-2 border-slate-700 px-3'
          hx-get='/api/movie'
          hx-target='#movielist'
        >
          Filme laden
        </button>
      </div>
      <div id='movielist' className='mt-4'>
        <p className='mt-12 text-center'>
          Drücke auf <span className='underline'>Filme laden</span> Button oben
          rechts um alle Filme anzuzeigen.
        </p>
      </div>
    </div>
  );
};

export default MovieList;
