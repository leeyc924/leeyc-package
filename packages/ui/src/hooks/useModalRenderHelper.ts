import { useCallback, useEffect, useRef, useState } from 'react';

function useModalRenderHelper({ handleClose, isOpen }: { isOpen: boolean; handleClose(): void }) {
  const [modalDom, setModalDom] = useState<Element | null>();
  const scrollbarWidthRef = useRef(0);

  const getScrollbarWidth = useCallback(() => {
    if (scrollbarWidthRef.current > 0) {
      return scrollbarWidthRef.current;
    }
    const outer = document.createElement('div');
    outer.style.visibility = 'hidden';
    outer.style.overflow = 'scroll'; // forcing scrollbar to appear
    document.body.appendChild(outer);
    const inner = document.createElement('div');
    outer.appendChild(inner);
    const scrollbarWidth = outer.offsetWidth - inner.offsetWidth;
    outer.parentNode?.removeChild(outer);
    scrollbarWidthRef.current = scrollbarWidth;
    return scrollbarWidth;
  }, []);

  const cleanupCloseAfter = useCallback(() => {
    document.body.style.removeProperty('overflow');
    document.body.style.removeProperty('padding-right');
  }, []);

  const handleKeyup = useCallback(
    (e: KeyboardEvent) => e.key?.toUpperCase() === 'ESCAPE' && handleClose(),
    [handleClose],
  );

  useEffect(() => {
    setModalDom(document.querySelector('#modal'));

    return () => {
      cleanupCloseAfter();
    };
  }, [cleanupCloseAfter]);

  // body scroll 조정
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${getScrollbarWidth()}px`;
      return;
    }

    cleanupCloseAfter();
  }, [cleanupCloseAfter, getScrollbarWidth, isOpen]);

  useEffect(() => {
    window.addEventListener('popstate', handleClose);
    return () => {
      window.removeEventListener('popstate', handleClose);
    };
  }, [handleClose]);

  // escape event
  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keyup', handleKeyup);
      return;
    }

    document.removeEventListener('keyup', handleKeyup);
  }, [handleKeyup, isOpen]);

  return { modalDom };
}

export default useModalRenderHelper;
