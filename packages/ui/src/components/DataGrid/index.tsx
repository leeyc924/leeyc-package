import { ReactNode, useEffect, useRef, useState } from 'react';
import { classnames } from '@breadlee/utils';
import Typography from '../Typography';
import * as styles from './index.css';

interface DataGridColumn {
  id: string;
  label: string;
  width?: number;
  flex?: number;
  align?: 'start' | 'center' | 'end';
  children?: DataGridColumn[];
}
type DataGridRow = Record<string, ReactNode>;

export interface DataGridProps {
  dataGridTitleLabel: string;
  columns: DataGridColumn[];
  rows: DataGridRow[];
}

const DataGrid = ({ columns, dataGridTitleLabel, rows }: DataGridProps) => {
  const gridRef = useRef<HTMLDivElement>(null);
  const [columnData, setColumnData] = useState<JSX.Element[]>([]);
  const [rowData, setRowData] = useState<JSX.Element[]>([]);

  useEffect(() => {
    if (!gridRef.current) {
      return;
    }

    const gridWidth = gridRef.current.offsetWidth;
    let totalFlex = 0;
    let totalFlexWidth = gridWidth;
    const columnFlexList: number[] = [];
    function getColumnFlex(column: DataGridColumn) {
      let flex = 0;
      let isRoot = true;
      const queue = [column];
      while (queue.length !== 0) {
        const search = queue.shift();
        if (!search) {
          break;
        }
        if (!search.children || search.children?.length === 0) {
          const childFlex = search.flex;
          if (!childFlex && search.width && isRoot) {
            flex += 0;
            totalFlexWidth -= search.width;
            continue;
          }

          flex += childFlex || 1;
          continue;
        }

        for (let i = 0; i < search.children.length; i++) {
          isRoot = false;
          queue.push(search.children[i]);
        }
      }
      return flex;
    }

    for (let i = 0; i < columns.length; i++) {
      const column = columns[i];
      const flex = getColumnFlex(column);
      totalFlex += flex;
      columnFlexList.push(flex);
    }

    function renderItem(column: DataGridColumn, width: number, row?: DataGridRow) {
      if (!column.children || column.children?.length === 0) {
        if (row) {
          const data = row[column.id];
          return <RowItem column={column} key={column.id} rowItem={data} />;
        }

        return <ColumnItem column={column} key={column.id} />;
      }

      const childWidth = width / column.children.length;

      if (row) {
        return (
          <div className={classnames(styles.columnGroup['base'], styles.columnGroup['body'])} key={column.id}>
            <div
              className={classnames(styles.columnGroup['cells'], styles.columnGroup['body'])}
              style={{ maxWidth: width }}
            >
              {column.children.map(child => renderItem(child, childWidth, row))}
            </div>
          </div>
        );
      }

      return (
        <div className={classnames(styles.columnGroup['base'], styles.columnGroup['body'])} key={column.id}>
          <ColumnItem column={column} isGroup />
          <div className={classnames(styles.columnGroup['cells'])} style={{ maxWidth: width }}>
            {column.children.map(child => renderItem(child, childWidth, row))}
          </div>
        </div>
      );
    }

    const flexWidth = totalFlexWidth / totalFlex;
    const columnData: JSX.Element[] = [];
    const rowData = rows.map((row, i) => (
      <div className={styles.row} key={i}>
        {columns.map((column, j) => {
          const width = columnFlexList[j] * flexWidth || column.width || 50;
          if (i === 0) {
            columnData.push(
              <div
                className={styles.column['base']}
                key={`${column.id}-${i}-${j}`}
                style={{ minWidth: width, maxWidth: width, width }}
              >
                {renderItem(column, width)}
              </div>,
            );
          }
          return (
            <div
              className={classnames(styles.column['base'], styles.column['body'])}
              key={`${column.id}-${i}-${j}`}
              style={{ minWidth: width, maxWidth: width, width }}
            >
              {renderItem(column, width, row)}
            </div>
          );
        })}
      </div>
    ));

    setColumnData(columnData);
    setRowData(rowData);
  }, [columns, rows]);

  return (
    <div aria-label={dataGridTitleLabel} className={styles.container} ref={gridRef} role="table">
      <div className={styles.header} role="row">
        {columnData}
      </div>
      <div className={styles.body} role="rowgroup">
        {rowData}
      </div>
    </div>
  );
};

const ColumnItem = ({ column, isGroup }: { column: DataGridColumn; isGroup?: boolean }) => {
  return (
    <div
      className={classnames(styles.columnItem['base'], styles.columnItem[column.align || 'center'])}
      {...(!isGroup && {
        role: 'columnheader',
        style: {
          ...(column.width
            ? { minWidth: column.width, maxWidth: column.width, width: column.width }
            : { flex: column.flex || 1 }),
        },
      })}
    >
      <Typography
        className={styles.columnItem[column.align || 'center']}
        color="PrimaryOn"
        variant="D1"
        weight="medium"
        isEllipsisOneLine
      >
        {column.label}
      </Typography>
    </div>
  );
};

const RowItem = ({ column, rowItem }: { rowItem: DataGridRow[string]; column: DataGridColumn }) => {
  if (typeof rowItem === 'undefined') {
    return null;
  }

  return (
    <div
      role="cell"
      className={classnames(
        styles.columnItem['base'],
        styles.columnItem[column.align || 'center'],
        styles.columnItem.body,
      )}
      style={{
        ...(column.width
          ? { minWidth: column.width, maxWidth: column.width, width: column.width }
          : { flex: column.flex || 1 }),
      }}
    >
      {typeof rowItem === 'string' || typeof rowItem === 'number' ? (
        <Typography
          className={styles.columnItem[column.align || 'center']}
          color="SurfaceVariant"
          variant="D1"
          weight="regular"
          isEllipsisOneLine
        >
          {rowItem}
        </Typography>
      ) : (
        rowItem
      )}
    </div>
  );
};

export default DataGrid;
