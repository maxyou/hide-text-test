async function getMessage() {
  return "This page is rendered with a Next.js Server Component.";
}

export default async function Home() {
  const message = await getMessage();

  return (
    <main>
      <h1>Basic Next.js App</h1>
      <p>{message}</p>
    </main>
  );
}
