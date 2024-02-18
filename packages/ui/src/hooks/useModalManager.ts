import { useCallback, useRef, useState } from 'react';

interface UseModalParam<T extends string, U extends T[]> {
  /**
   * 현재 사용되고 있는 모달의 id list
   **/
  idList: U;
  /**
   * 기본으로 열려있는 모달
   **/
  defaultOpenId?: U[number];
  /**
   * 모달 여러개 사용 유무
   */
  useMultiOpen?: boolean;
}

function useModalManager<T extends string, U extends T[]>({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  defaultOpenId,
  idList,
  useMultiOpen = false,
}: UseModalParam<T, U>) {
  const [modalOpenId, setModalOpenId] = useState<U[number] | null>(defaultOpenId ?? null);
  const openList = useRef(defaultOpenId ? [defaultOpenId] : []);

  const openModal = useCallback(
    (id: U[number]) => {
      if (useMultiOpen) {
        openList.current.push(id);
      }
      setModalOpenId(id);
    },
    [useMultiOpen],
  );

  const closeModal = useCallback(() => {
    if (useMultiOpen) {
      openList.current.splice(openList.current.length - 1, 1);
      setModalOpenId(openList.current[openList.current.length - 1]);
      return;
    }
    setModalOpenId(null);
  }, [useMultiOpen]);

  /**
   * useMultiOpen 상태에서 모든 모달 닫기
   **/
  const closeAllModal = useCallback(() => {
    openList.current = [];
    setModalOpenId(null);
  }, []);

  return { modalOpenId, closeAllModal, openModal, closeModal };
}

export default useModalManager;
