import AddMovie from "@/components/AddMovie";
import EditMovie from "@/components/EditMovie";
import MovieList from "@/components/MovieList";

export default function Home() {
  return (
    <>
      <script src="https://unpkg.com/htmx.org" defer></script>
      <main className="mt-12 w-2/3 mx-auto flex space-x-8">
        <MovieList />
            <div className="space-y-3">
              <AddMovie />
              <EditMovie />
            </div>
      </main>
    </>
  );
}
