import Breadcrumb from '../base_components/Breadcrumb';
import TableOne from '../base_components/TableOne';
import TableThree from '../base_components/TableThree';
import TableTwo from '../base_components/TableTwo';

const Tables = () => {
  return (
    <>
      <Breadcrumb pageName="Tables" />

      <div className="flex flex-col gap-10">
        <TableOne />
        <TableTwo />
        <TableThree />
      </div>
    </>
  );
};

export default Tables;
