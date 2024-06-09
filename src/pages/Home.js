import {Hero, Meet, Notice, Rating, Tests} from "../componet/index"
const Home = () => {
 
  return (
    <div className="home">
      <Hero />
      <Rating />
      <Meet />
      <Notice />
      <Tests />
    </div>
  );
};

export default Home;
