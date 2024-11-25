import { KeyboardEventHandler, RefObject, useCallback, useEffect, useRef } from 'react';
import { parseToNumber } from '@breadlee/utils';

const useCalendarKeyEvent = (dateGridElRef: RefObject<HTMLDivElement>, attrName: string) => {
  const focusRef = useRef<{
    dateElTable: (HTMLButtonElement | undefined)[][];
    enableDateElTable: HTMLButtonElement[][];
    enableDateElList: HTMLButtonElement[];
  }>({
    dateElTable: [],
    enableDateElList: [],
    enableDateElTable: [],
  });

  useEffect(() => {
    const rowEl = dateGridElRef.current?.getElementsByTagName('ul') ?? [];

    const dateElTable: (HTMLButtonElement | undefined)[][] = [];
    const enableDateElTable: HTMLButtonElement[][] = [];
    const enableDateElList: HTMLButtonElement[] = [];
    for (let i = 0; i < rowEl.length; i++) {
      const colEl = rowEl[i].children;
      dateElTable.push([]);
      enableDateElTable.push([]);
      for (let j = 0; j < colEl.length; j++) {
        const buttonEl = colEl[j].children[0] as HTMLButtonElement;
        const isDisabled = buttonEl.getAttribute('disabled');
        if (typeof isDisabled !== 'string') {
          dateElTable[i].push(buttonEl);
          enableDateElList.push(buttonEl);
          enableDateElTable[i].push(buttonEl);
        }
      }
    }

    focusRef.current = {
      dateElTable,
      enableDateElList,
      enableDateElTable,
    };
  }, [dateGridElRef]);

  const handleKeyDown = useCallback<KeyboardEventHandler<HTMLButtonElement>>(
    e => {
      const focusDom = document.activeElement;
      const { dateElTable, enableDateElList, enableDateElTable } = focusRef.current;
      const currentTableFocusIndex = [
        parseToNumber(focusDom?.parentElement?.parentElement?.getAttribute('aria-rowindex'), -1),
        parseToNumber(focusDom?.getAttribute('aria-colindex'), -1),
      ];
      const currentListFocusIndex = enableDateElList.findIndex(el => el === focusDom);

      if (currentTableFocusIndex[0] < 0 || currentListFocusIndex < 0) {
        return;
      }

      const dateElTableLength = dateElTable.length;
      const enableDateElListLength = enableDateElList.length;

      function focusChange(focusDate: string | null) {
        if (!focusDate) {
          return;
        }

        for (let i = 0; i < enableDateElListLength; i++) {
          const buttonEl = enableDateElList[i];
          if (buttonEl.getAttribute(attrName) === focusDate) {
            buttonEl.focus();
          }
        }
      }

      function isExistDate(date: string) {
        if (!date) {
          return false;
        }

        return enableDateElList.some(dateEl => dateEl.getAttribute(attrName) === date);
      }

      switch (e.key) {
        case 'ArrowRight': {
          e.preventDefault();
          focusChange(enableDateElList[(currentListFocusIndex + 1) % enableDateElListLength].getAttribute(attrName));
          return;
        }
        case 'ArrowLeft': {
          e.preventDefault();
          focusChange(
            enableDateElList[
              (currentListFocusIndex - 1 + enableDateElListLength) % enableDateElListLength
            ].getAttribute(attrName),
          );
          return;
        }
        case 'ArrowUp': {
          e.preventDefault();
          const index = [...currentTableFocusIndex];
          let nextDate = '';
          while (!nextDate) {
            index[0] = (index[0] - 1 + dateElTableLength) % dateElTableLength;
            const date = dateElTable[index[0]][index[1]]?.getAttribute(attrName);
            if (date && isExistDate(date)) {
              nextDate = date;
            }
          }
          focusChange(nextDate);
          return;
        }
        case 'ArrowDown': {
          const index = [...currentTableFocusIndex];
          let nextDate = '';
          while (!nextDate) {
            index[0] = (index[0] + 1) % dateElTableLength;
            const date = dateElTable[index[0]][index[1]]?.getAttribute(attrName);
            if (date && isExistDate(date)) {
              nextDate = date;
            }
          }
          focusChange(nextDate);
          return;
        }
        case 'Home': {
          e.preventDefault();
          const [y] = currentTableFocusIndex;
          focusChange(enableDateElTable[y][0].getAttribute(attrName));
          return;
        }
        case 'End': {
          e.preventDefault();
          const [y] = currentTableFocusIndex;
          focusChange(enableDateElTable[y][enableDateElTable[y].length - 1].getAttribute(attrName));
          return;
        }
        case 'PageUp': {
          e.preventDefault();
          focusChange(enableDateElListLength > 0 ? enableDateElList[0].getAttribute(attrName) : '');
          return;
        }
        case 'PageDown': {
          e.preventDefault();
          focusChange(
            enableDateElListLength > 0 ? enableDateElList[enableDateElListLength - 1].getAttribute(attrName) : '',
          );
          return;
        }
        default:
          return;
      }
    },
    [attrName],
  );

  return handleKeyDown;
};

export default useCalendarKeyEvent;
