import Hello from "./components/Hello";

const page = () => {
  console.log("Hello from Next.JS");

  return (
    <main>
      <div>Welcome to Next.JS</div>
      <Hello />
    </main>
  );
};

export default page;
