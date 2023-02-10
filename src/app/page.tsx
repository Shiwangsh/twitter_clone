import Feed from "@/components/Feed";
import Sidebar from "@/components/Sidebar";
import Widgets from "@/components/Widgets";

export default async function Home() {
  const newsArticle = await getNews();
  const randomUsers = await getRandomUsers();
  return (
    <main className="flex min-h-screen mx-auto">
      <Sidebar />
      <Feed />
      <Widgets
        newsArticle={newsArticle.articles}
        randomUsers={randomUsers.results}
      />
    </main>
  );
}

async function getNews() {
  const res = await fetch(
    "https://saurav.tech/NewsAPI/top-headlines/category/business/us.json"
  );
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function getRandomUsers() {
  const res = await fetch(
    "https://randomuser.me/api/?results=30&inc=name,login,picture"
  );
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
