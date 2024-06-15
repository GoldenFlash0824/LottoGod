import { useContext } from "react";
import { LotteryContext } from "../pages/LotteryResults";

type RowsPerPage = {
  value: number
};

const rowsPerPageOptions: RowsPerPage[] = [
  {
    value: 5
  },
  {
    value: 10
  },
  {
    value: 20
  },
  {
    value: 50
  }
]

const Pagination = () => {
  const context = useContext(LotteryContext);

  if (!context) {
    return <div>Error: Context not found</div>;
  }

  const { pageNum, setPageNum, rowsPerPage, setRowsPerPage, totalCount } = context;
  const pagesCount = Math.ceil(totalCount / rowsPerPage);

  const createPageLinks = () => {
    const pageLinks = [];
    const maxPagesToShow = 5;
    const halfMaxPages = Math.floor(maxPagesToShow / 2);

    if (pagesCount <= maxPagesToShow) {
      for (let i = 0; i < pagesCount; i++) {
        pageLinks.push(i);
      }
    } else {
      if (pageNum <= halfMaxPages) {
        for (let i = 0; i < maxPagesToShow; i++) {
          pageLinks.push(i);
        }
        pageLinks.push("...");
        pageLinks.push(pagesCount - 1);
      } else if (pageNum >= pagesCount - halfMaxPages - 1) {
        pageLinks.push(0);
        pageLinks.push("...");
        for (let i = pagesCount - maxPagesToShow; i < pagesCount; i++) {
          pageLinks.push(i);
        }
      } else {
        pageLinks.push(0);
        pageLinks.push("...");
        for (let i = pageNum - halfMaxPages; i <= pageNum + halfMaxPages; i++) {
          pageLinks.push(i);
        }
        pageLinks.push("...");
        pageLinks.push(pagesCount - 1);
      }
    }
    return pageLinks;
  };

  return (
    <div className="flex gap-x-4 gap-y-3">
      <div className="flex items-center gap-3">
        <div>
          <span className="text-md font-semibold text-black dark:text-white">
            Row
          </span>
        </div>
        <div className="relative z-20 inline-block">
          <select
            value={rowsPerPage}
            onChange={(e) => { setRowsPerPage(parseInt(e.target.value)) }}
            className="relative z-20 inline-flex appearance-none bg-transparent py-1 pl-3 pr-8 text-sm font-medium border-[1.5px] border-stroke focus:border-primary active:border-primary dark:border-form-strokedark dark:focus:border-primary rounded"
          >
            {rowsPerPageOptions.map((row) => (
              <option key={row.value} value={row.value}>{row.value}</option>
            ))}
          </select>
          <span className="absolute top-1/2 right-3 z-10 -translate-y-1/2">
            <svg
              width="10"
              height="6"
              viewBox="0 0 10 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.47072 1.08816C0.47072 1.02932 0.500141 0.955772 0.54427 0.911642C0.647241 0.808672 0.809051 0.808672 0.912022 0.896932L4.85431 4.60386C4.92785 4.67741 5.06025 4.67741 5.14851 4.60386L9.09079 0.896932C9.19376 0.793962 9.35557 0.808672 9.45854 0.911642C9.56151 1.01461 9.5468 1.17642 9.44383 1.27939L5.50155 4.98632C5.22206 5.23639 4.78076 5.23639 4.51598 4.98632L0.558981 1.27939C0.50014 1.22055 0.47072 1.16171 0.47072 1.08816Z"
                fill="#637381"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1.22659 0.546578L5.00141 4.09604L8.76422 0.557869C9.08459 0.244537 9.54201 0.329403 9.79139 0.578788C10.112 0.899434 10.0277 1.36122 9.77668 1.61224L9.76644 1.62248L5.81552 5.33722C5.36257 5.74249 4.6445 5.7544 4.19352 5.32924C4.19327 5.32901 4.19377 5.32948 4.19352 5.32924L0.225953 1.61241C0.102762 1.48922 -4.20186e-08 1.31674 -3.20269e-08 1.08816C-2.40601e-08 0.905899 0.0780105 0.712197 0.211421 0.578787C0.494701 0.295506 0.935574 0.297138 1.21836 0.539529L1.22659 0.546578ZM4.51598 4.98632C4.78076 5.23639 5.22206 5.23639 5.50155 4.98632L9.44383 1.27939C9.5468 1.17642 9.56151 1.01461 9.45854 0.911642C9.35557 0.808672 9.19376 0.793962 9.09079 0.896932L5.14851 4.60386C5.06025 4.67741 4.92785 4.67741 4.85431 4.60386L0.912022 0.896932C0.809051 0.808672 0.647241 0.808672 0.54427 0.911642C0.500141 0.955772 0.47072 1.02932 0.47072 1.08816C0.47072 1.16171 0.50014 1.22055 0.558981 1.27939L4.51598 4.98632Z"
                fill="#637381"
              />
            </svg>
          </span>
        </div>
        <div>
          <span className="text-md font-semibold text-black dark:text-white">
            per page
          </span>
        </div>
      </div>
      <nav>
        <ul className="flex items-center -space-x-px h-8 text-sm">
          <li>
            <button
              onClick={() => setPageNum(pageNum > 0 ? pageNum - 1 : 0)}
              className="flex items-center justify-center px-3 h-8 ms-0 leading-tight bg-white border border-e-0 border-stroke rounded-s-lg hover:bg-gray hover:text-black dark:bg-transparent dark:border-form-strokedark dark:text-bg-black-2 white dark:hover:bg-graydark dark:hover:text-white"
              disabled={pageNum === 0}
            >
              <span className="sr-only">Previous</span>
              <svg className="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
              </svg>
            </button>
          </li>
          {createPageLinks().map((page, index) => (
            <li key={index}>
              {page === "..." ? (
                <span className="flex items-center justify-center px-3 h-8 leading-tight bg-white border border-stroke dark:bg-transparent dark:border-form-strokedark dark:text-bg-black-2">...</span>
              ) : (
                <button
                  onClick={() => typeof page === 'number' && setPageNum(page)}
                  className={`flex items-center justify-center px-3 h-8 leading-tight ${pageNum === page ? 'bg-gray text-black border border-stroke' : 'bg-white border border-stroke hover:bg-gray hover:text-black dark:bg-transparent dark:border-form-strokedark dark:text-bg-black-2 dark:hover:bg-graydark dark:hover:text-white'}`}
                >
                  {typeof page === 'number' && page + 1}
                </button>
              )}
            </li>
          ))}
          <li>
            <button
              onClick={() => setPageNum(pageNum < pagesCount - 1 ? pageNum + 1 : pagesCount - 1)}
              className="flex items-center justify-center px-3 h-8 leading-tight bg-white border border-stroke rounded-e-lg hover:bg-gray hover:text-black dark:bg-transparent dark:border-form-strokedark dark:text-bg-black-2 dark:hover:bg-graydark dark:hover:text-white"
              disabled={pageNum === pagesCount - 1}
            >
              <span className="sr-only">Next</span>
              <svg className="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
              </svg>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Pagination;