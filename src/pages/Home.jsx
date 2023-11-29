import RowOne from "../components/Home/RowOne";
import RowTwo from "../components/Home/RowTwo";
import RowThree from "../components/Home/RowThree";
import Stories from "../features/Stories";
import Services from "../ui/Services";
function Home() {
  return (
    <>
      <RowOne />
      <RowTwo />
      <RowThree />
      <Stories />
      <Services />
    </>
  );
}

export default Home;
