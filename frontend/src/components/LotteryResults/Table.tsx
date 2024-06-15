import { useContext } from 'react';
import moment from 'moment';
import Header from './Header';
import Pagination from '../../base_components/Pagination';
import { LotteryContext } from '../../pages/LotteryResults';

const Table = () => {
  const context = useContext(LotteryContext);

  if (!context) {
    return <div>Error: Context not found</div>;
  }

  const { lotteries, pageNum, rowsPerPage, type } = context;

  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1 overflow-x-auto">
      <Header />
      {lotteries?.length > 0 ? <>
        <div className="flex flex-col">
          <div className='max-w-full overflow-x-auto'>
            <div className='min-w-[1170px]'>
              <div className="grid grid-cols-12 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
                <div className="col-span-1 flex items-center">
                  <p className="font-medium">No</p>
                </div>
                <div className="col-span-2 flex items-center">
                  <p className="font-medium">Date</p>
                </div>
                <div className="col-span-2 flex items-center">
                  <p className="font-medium">Time of Day</p>
                </div>
                <div className="col-span-3 flex items-center">
                  <p className="font-medium">Result Numbers</p>
                </div>
                {/* <div className="col-span-1 flex items-center">
                  <p className="font-medium">Wild Ball</p>
                </div> */}
              </div>

              {lotteries?.map((lottery, index: number) => (
                <div key={index} className="grid grid-cols-12 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
                  <div className="col-span-1 flex items-center">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                      <p className="text-sm text-black dark:text-white">
                        {pageNum * rowsPerPage + index + 1}
                      </p>
                    </div>
                  </div>
                  <div className="col-span-2 items-center sm:flex">
                    <p className="text-sm text-black dark:text-white">{moment(lottery?.date).format('YYYY-MM-DD')}</p>
                  </div>
                  <div className="col-span-2 flex items-center">
                    <p className="text-sm text-black dark:text-white">{lottery?.tod}</p>
                  </div>
                  <div className="col-span-3 flex items-center">
                    <p className="text-sm text-black dark:text-white">{type === 'cash3' ? lottery?.first_num.toString() + lottery?.second_num.toString() + lottery?.third_num.toString() : lottery?.first_num.toString() + lottery?.second_num.toString() + lottery?.third_num.toString() + (lottery?.fourth_num && lottery?.fourth_num.toString())}</p>
                  </div>
                  {/* <div className="col-span-1 flex items-center">
                    <p className="text-sm text-meta-3">{lottery.wildBall}</p>
                  </div> */}
                </div>
              ))}
            </div>
          </div>
        </div></> : <div className='w-full flex justify-center py-5'>
        <span className="text-xl text-black dark:text-white">
          No data
        </span>
      </div>}
      <div className='w-full flex sm:justify-end mt-5 pb-5'>
        <Pagination />
      </div>
    </div>
  );
};

export default Table;
