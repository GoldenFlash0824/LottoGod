import CardFour from '../../base_components/CardFour.tsx';
import CardOne from '../../base_components/CardOne.tsx';
import CardThree from '../../base_components/CardThree.tsx';
import CardTwo from '../../base_components/CardTwo.tsx';
import ChartOne from '../../base_components/ChartOne.tsx';
import ChartThree from '../../base_components/ChartThree.tsx';
import ChartTwo from '../../base_components/ChartTwo.tsx';
import ChatCard from '../../base_components/ChatCard.tsx';
import MapOne from '../../base_components/MapOne.tsx';
import TableOne from '../../base_components/TableOne.tsx';

const ECommerce = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <CardOne />
        <CardTwo />
        <CardThree />
        <CardFour />
      </div>

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <ChartOne />
        <ChartTwo />
        <ChartThree />
        <MapOne />
        <div className="col-span-12 xl:col-span-8">
          <TableOne />
        </div>
        <ChatCard />
      </div>
    </>
  );
};

export default ECommerce;
