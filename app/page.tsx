import { prisma } from "app/api/client";

//server compoqnet to get data from db
const getPosts = async () => {
  console.log("getPosts");
  const posts = await prisma.post.findMany();
  return posts;
};

async function Home() {
  const posts = await getPosts();
  console.log("posts", posts);
  return <main>Hello</main>;
}
export default Home;
