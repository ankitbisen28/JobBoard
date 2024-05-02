import { Banner } from "../components/Banner";
import Card from "../components/Card";

export const Home = () => {
  return <>
    <Banner />
    <h1 className="text-5xl font-semibold text-center my-4">Latest Jobs</h1>
    <div className="md:container  mx-auto px-6 py-6">
      <Card />
    </div>

  </>
};