import { useContext } from "react"
import moment from "moment"
import { LotteryContext } from "../../pages/LotteryResults"

type Option = {
  name: string,
  value: string
}

const states: Option[] = [
  {
    name: 'Arkansas',
    value: 'arkansas'
  },
  {
    name: 'Georgia',
    value: 'georgia'
  },
  {
    name: 'Mississippi',
    value: 'mississippi'
  },
  {
    name: 'Tennessee',
    value: 'tennessee'
  }
]

const types: Option[] = [
  {
    name: 'Cash 3',
    value: 'cash3'
  },
  {
    name: 'Cash 4',
    value: 'cash4'
  }
]

const Header = () => {
  const context = useContext(LotteryContext);

  if (!context) {
    return <div>Error: Context not found</div>
  }

  const { state, setState, type, setType, startDate, setStartDate, endDate, setEndDate } = context;
  return (
    <>
      <div className="flex flex-wrap px-4 py-5 xl:flex-no-wrap gap-x-5 gap-y-3">
        <div className="flex items-center gap-3">
          <div>
            <span className="text-md font-semibold text-black dark:text-white">
              State
            </span>
          </div>
          <div className="relative z-20 inline-block">
            <select
              value={state}
              onChange={(e) => { setState(e.target.value) }}
              className="relative z-20 inline-flex appearance-none bg-transparent py-1 pl-3 pr-8 text-sm font-medium border-[1.5px] border-stroke focus:border-primary active:border-primary dark:border-form-strokedark dark:focus:border-primary rounded"
            >
              {states.map((state) => (
                <option key={state.value} value={state.value}>{state.name}</option>
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
        </div>
        <div className="flex items-center gap-3">
          <div>
            <span className="text-md font-semibold text-black dark:text-white">
              Type
            </span>
          </div>
          <div className="relative z-20 inline-block">
            <select
              value={type}
              onChange={(e) => { setType(e.target.value) }}
              className="relative z-20 inline-flex appearance-none bg-transparent py-1 pl-3 pr-8 text-sm font-medium border-[1.5px] border-stroke focus:border-primary active:border-primary dark:border-form-strokedark rounded dark:focus:border-primary"
            >
              {types.map((type) => (
                <option key={type.value} value={type.value}>{type.name}</option>
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
        </div>
        <div className="flex items-center gap-3">
          <label className="block text-black dark:text-white font-semibold text-md">
            Start Date
          </label>
          <div className="relative">
            <input
              type="date"
              value={moment(startDate).format('YYYY-MM-DD')}
              onChange={(e) => {
                const selectedDate = new Date(e.target.value);
                selectedDate.setDate(selectedDate.getDate() + 1);
                setStartDate(selectedDate);
              }}
              className="custom-input-date custom-input-date-1 w-full text-sm rounded border-[1.5px] border-stroke bg-transparent py-1 px-3 font-medium outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
            />
          </div>
        </div>
        <div className="flex items-center gap-3">
          <label className="block text-black dark:text-white font-semibold text-md">
            End Date
          </label>
          <div className="relative">
            <input
              type="date"
              value={moment(endDate).format('YYYY-MM-DD')}
              onChange={(e) => {
                const selectedDate = new Date(e.target.value);
                selectedDate.setDate(selectedDate.getDate() + 1);
                setEndDate(selectedDate);
              }}
              className="custom-input-date custom-input-date-1 w-full text-sm rounded border-[1.5px] border-stroke bg-transparent py-1 px-3 font-medium outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Header;