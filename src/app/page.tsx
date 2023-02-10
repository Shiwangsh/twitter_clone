import Feed from "@/components/Feed";
import Sidebar from "@/components/Sidebar";
import Widgets from "@/components/Widgets";

export default async function Home() {
  const newsArticle = await getNews();
  return (
    <main className="flex min-h-screen mx-auto">
      <Sidebar />
      <Feed />
      <Widgets newsArticle={newsArticle.articles} />
    </main>
  );
}

export async function getNews() {
  const res = await fetch(
    "https://saurav.tech/NewsAPI/top-headlines/category/business/us.json"
  );
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
