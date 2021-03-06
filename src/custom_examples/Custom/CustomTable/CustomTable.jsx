import classnames from 'classnames';
import CubeLoader from '../../Common/Loaders/CubeLoader/CubeLoader';
import s from './CustomTable.module.scss';

// const initialState = {
//   headers:
// [ 'No', 'ID',
// 'Username', 'Is Active',
// 'Create  Date', 'Last Login Date', 'Last Login IP', 'Locale', 'Edit', 'Delete' ],
//   body: [
//     [ null, 1, 'Simon', 'yes', '2020-09-15T08:33:48.000Z', null, '1.2.3.4', 'EN', null, null ],
//     [ null, 2, 'Exish', 'yes', '2020-09-15T08:33:48.000Z', null, '1.2.3.4', 'EN', null, null ],
//     [ null, 3, 'Smbo', 'yes', '2020-09-15T08:33:48.000Z', null, '1.2.3.4', 'EN', null, null ],
//   ],
// };

const CustomTable = ({
  data, children, loading, isEmpty, className, bgColor, ...props
}) => (
  <div className={s.root}>
    {loading && <div className={s.tableLoading}>
      <CubeLoader size={25} />
      </div>}
    <div className={classnames(s.tableWrapper, { hidden: loading || isEmpty })}>
      <table className={classnames(s.table, { [className]: className })} {...props}>
        {children}
      </table>
    </div>
    {isEmpty && <div className={s.noItems}>
      <div>
        No Data To Display
      </div>
      </div>}
  </div>
);

CustomTable.Header = ({ children, className, ...props }) => (
  <thead className={classnames(s.header, { [className]: className })} {...props}>{children}</thead>
);

CustomTable.Row = ({ children, className, ...props }) => (
  <tr
    className={classnames(s.row, { [className]: className })}
    {...props}>{children}</tr>
);

CustomTable.HeaderCell = ({
  children, sort, className, sortKey, ...props
}) => (
  <th className={classnames(s.headerCell, { 'c-p': sort, [className]: className })} {...props}>
    <div className={'flex-c-c'}>
      <div>
        {children}
      </div>
      {sort && <div className={s.iconWrapper}>
        <div className={classnames(s.sortIcon, {
          [s[sort.top ? 'upIcon' : 'downIcon']]: sort.key === sortKey,
        })} />
      </div>}
    </div>
  </th>
);

CustomTable.Body = ({ children, className, ...props }) => (
  <tbody className={classnames(s.body, { [className]: className })} {...props}>{children}</tbody>
);

CustomTable.Cell = ({
  children, className, bgColor, ...props
}) => (
  <td className={classnames(s.cell, { [className]: className })} {...props}>{children}</td>
);

export default CustomTable;
