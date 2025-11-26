import Navbar from "./Navbar";

import HomeArticle from "./home.mdx";

function Home() {
  return (
    <>
      <Navbar />
      <main className="container">
        <HomeArticle />
      </main>
    </>
  );
}

export default Home;
