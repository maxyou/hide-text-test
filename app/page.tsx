async function getMessage() {
  return Promise.resolve("Rendered on the server with a Server Component.");
}

export default async function Home() {
  const message = await getMessage();

  return (
    <main style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h1>Basic Next.js Server Components App</h1>
      <p>{message}</p>
    </main>
  );
}
