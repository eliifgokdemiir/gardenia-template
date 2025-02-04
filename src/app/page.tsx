//@refresh
import Wrapper from "@/layout/DefaultWrapper";
import HomeFourMain from "./home-4/page";
import MetaData from "@/hooks/useMetaData";

const Home = () => {
  return (
    <>
    <MetaData pageTitle="Mazali Patisserie & Coffee">
      <Wrapper>
        <main>
         <HomeFourMain/>
        </main>
      </Wrapper>
    </MetaData>
    </>
  );
};

export default Home;
