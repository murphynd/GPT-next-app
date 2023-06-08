import { prisma } from "app/api/client";
import Trending from "./(home)/Trending";

//server compoqnet to get data from db
const getPosts = async () => {
  console.log("getPosts");
  const posts = await prisma.post.findMany();
  return posts;
};

async function Home() {
  //const posts = await getPosts();
  //console.log("posts", posts);
  return (
    <main className='px-10 leading-7'>
      <Trending />
      <div className='md:flex gap-10 mb-5'>
        <div className='basis-3/4'>
          {/* <Tech techPosts={techPosts} />
          <Travel travelPosts={travelPosts} />
          <Other otherPosts={otherPosts} /> */}
          <div className='hidden md:block'>{/* <Subscribe /> */}</div>
        </div>
        <div className='basis-1/4'>{/* <Sidebar /> */}</div>
      </div>
    </main>
  );
}
export default Home;
