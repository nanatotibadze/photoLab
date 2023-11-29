import PricesIntroduction from "../components/prices/PricesIntroduction";
import PriceList from "../components/prices/PriceList";
import Table from "../components/prices/Table";
import Final from "../components/Features/Final";

function PricesPage() {
  return (
    <>
      <PricesIntroduction />
      <PriceList />
      <Table />
      <Final />
    </>
  );
}

export default PricesPage;
