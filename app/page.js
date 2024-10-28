export default async function Home() {
  const response = await fetch("https://jsonplaceholder.typicode.com/albums");
  const albums = await response.json();

  return (
    <>
      {albums.map((album) => (
        <div key={album.id}>
          <p>{album.title}</p>
          <p>{album.id}</p>
        </div>
      ))}
    </>
  );
}
