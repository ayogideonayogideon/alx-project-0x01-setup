import Header from "../src/components/layout/Header";

const Posts: React.FC = () => (
  <div>
    <Header />
    <main className="p-8">
      <h1 className="text-3xl font-bold">Posts Page</h1>
      <p>Here you’ll find all the latest posts!</p>
    </main>
  </div>
);

export default Posts;