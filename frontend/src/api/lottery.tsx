import axios from 'axios';

interface LotteryResponse {
  total_count: number;
  data: any[];
}

export const getLotteries: any = async (state: string, type: string, startDate: Date, endDate: Date, pageNum: number, rowsPerPage: number) => {
  let response: LotteryResponse = { total_count: 0, data: [] };

  const startDateString = startDate?.toISOString();
  const endDateString = endDate?.toISOString();

  await axios.get(`${import.meta.env.VITE_API_URL}/lottery`, {
    params: {
      state: state,
      type: type,
      startDate: startDateString,
      endDate: endDateString,
      pageNum: pageNum,
      rowsPerPage: rowsPerPage
    }
  }).then((res) => {
    if (res.status === 200) {
      response = {
        total_count: res?.data?.total_count,
        data: res?.data?.data
      }
    }
  }).catch((err) => {
    console.error(err);
  });

  return response;
}