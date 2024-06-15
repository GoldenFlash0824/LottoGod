import { Dispatch, SetStateAction, createContext, useEffect, useState } from "react";
import Table from '../components/LotteryResults/Table';
import { getLotteries } from "../api/lottery";

type Lottery = {
  type: number,
  state: string,
  date: Date,
  tod: string,
  first_num: number,
  second_num: number,
  third_num: number,
  fourth_num: number,
  wildBall: number
}

type LotteryContextType = {
  lotteries: Lottery[],
  state: string,
  setState: Dispatch<SetStateAction<string>>,
  type: string,
  setType: Dispatch<SetStateAction<string>>,
  startDate: Date,
  setStartDate: Dispatch<SetStateAction<Date>>
  endDate: Date,
  setEndDate: Dispatch<SetStateAction<Date>>,
  pageNum: number,
  setPageNum: Dispatch<SetStateAction<number>>,
  rowsPerPage: number,
  setRowsPerPage: Dispatch<SetStateAction<number>>,
  totalCount: number,
  setTotalCount: Dispatch<SetStateAction<number>>
}

export const LotteryContext = createContext<LotteryContextType | null>(null);

const LotteryResults = () => {
  const [state, setState] = useState<string>('arkansas');
  const [type, setType] = useState<string>('cash3');
  const [startDate, setStartDate] = useState<Date>(() => {
    const date = new Date();
    date.setMonth(date.getMonth() - 1);
    return date;
  });
  const [endDate, setEndDate] = useState<Date>(new Date());
  const [pageNum, setPageNum] = useState<number>(1);
  const [rowsPerPage, setRowsPerPage] = useState<number>(5);
  const [lotteries, setLotteries] = useState<Lottery[]>([]);
  const [totalCount, setTotalCount] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchLotteries = async () => {
      setLoading(true);
      const lotteries = await getLotteries({ state, type, startDate, endDate, pageNum, rowsPerPage });
      setLotteries(lotteries.data);
      setTotalCount(lotteries.total_count);
      setLoading(false);
    };
    fetchLotteries();
  }, [state, type, startDate, endDate, pageNum, rowsPerPage]);

  return (
    <>
      {loading ? (
        <div className="flex h-full items-center justify-center">
          <div className="h-16 w-16 animate-spin rounded-full border-4 border-solid border-primary border-t-transparent"></div>
        </div>
      ) : (
        <LotteryContext.Provider value={{ lotteries, state, setState, type, setType, startDate, setStartDate, endDate, setEndDate, pageNum, setPageNum, rowsPerPage, setRowsPerPage, totalCount, setTotalCount }}>
          <h2 className="text-title-md2 font-semibold text-black dark:text-white mb-6">
            Lottery Result
          </h2>
          <Table />
        </LotteryContext.Provider >
      )
      }
    </>
  )
}

export default LotteryResults;