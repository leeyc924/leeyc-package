import { ReactNode } from 'react';
import { createPortal } from 'react-dom';
import FocusTrap from 'focus-trap-react';
import Icon from '@breadlee/icons';
import { classnames } from '@breadlee/utils';
import useModalRenderHelper from '@hooks/useModalRenderHelper';
import { palette } from '@styles';
import Typography from '../Typography';
import Button from '../Button';
import * as styles from './index.css';

export interface ModalProps {
  size?: 'small' | 'meidum' | 'large';
  children: ReactNode;
  hasDimmed?: boolean;
  isOpen: boolean;
  useDimmedClose?: boolean;
  title?: ReactNode;
  subTitle?: ReactNode;
  submitText: string;
  checkValidBeforeSubmit?(): boolean;
  onSubmit?(): void;
  cancelText: string;
  checkValidBeforeCancel?(): boolean;
  onCancel?(): void;
  useCloseButton?: boolean;
  checkValidBeforeClose?(): boolean;
  onClose?(): void;
}

const Modal = ({
  cancelText,
  checkValidBeforeCancel,
  checkValidBeforeClose,
  checkValidBeforeSubmit,
  children,
  hasDimmed = true,
  isOpen,
  onCancel,
  onClose,
  onSubmit,
  submitText,
  subTitle,
  title,
  useCloseButton = true,
  useDimmedClose = true,
}: ModalProps) => {
  if (submitText && !onSubmit) {
    throw new Error('onSubmit prop을 작성해주세요');
  }
  if (cancelText && !onCancel) {
    throw new Error('onCancel prop을 작성해주세요');
  }
  if ((useCloseButton || useDimmedClose) && !onClose) {
    throw new Error('onClose prop을 작성해주세요');
  }

  const handleSubmit = () => {
    if (checkValidBeforeSubmit ? checkValidBeforeSubmit() : true) {
      onSubmit?.();
    }
  };
  const handleCancel = () => {
    if (checkValidBeforeCancel ? checkValidBeforeCancel() : true) {
      onCancel?.();
    }
  };
  const handleClose = () => {
    if (checkValidBeforeClose ? checkValidBeforeClose() : true) {
      onClose?.();
    }
  };

  const { modalDom } = useModalRenderHelper({ isOpen, handleClose });

  return !(modalDom && isOpen)
    ? null
    : createPortal(
        <FocusTrap open={isOpen}>
          <div className={styles.container} role="dialog">
            {hasDimmed && (
              <div
                className={styles.dimmed}
                role="presentation"
                tabIndex={0}
                {...(useDimmedClose && { onClick: handleClose })}
              />
            )}
            <section className={classnames(styles.section['base'])}>
              {title && (
                <header className={styles.header}>
                  {typeof title === 'string' ? (
                    <div className={styles.title}>
                      <Typography color="onSurfaceVariant" component="h2" variant="H2" isEllipsisOneLine>
                        {title}
                      </Typography>
                      {subTitle && (
                        <span className={styles.subTitle}>
                          <Typography color="onSurfaceVariant" component="h3" variant="D1" weight="regular">
                            {subTitle}
                          </Typography>
                        </span>
                      )}
                    </div>
                  ) : (
                    title
                  )}
                </header>
              )}
              <main className={styles.main}>{children}</main>
              {(submitText || cancelText) && (
                <footer className={styles.footer}>
                  <>
                    {cancelText && (
                      <Button color="primary" size="xlarge" variant="outline" isFullWidth onClick={handleCancel}>
                        {cancelText}
                      </Button>
                    )}
                    {submitText && (
                      <Button color="primary" size="xlarge" isFullWidth onClick={handleSubmit}>
                        {submitText}
                      </Button>
                    )}
                  </>
                </footer>
              )}
              {useCloseButton && (
                <button className={styles.close} type="button" onClick={handleClose}>
                  <Icon color={palette.onSurfaceVariant} irName="닫기" name="close" size={16} />
                </button>
              )}
            </section>
          </div>
        </FocusTrap>,
        modalDom,
      );
};

export default Modal;
