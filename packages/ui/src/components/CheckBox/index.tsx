import Icon from '@breadlee/icons';
import { ComponentPropsWithoutRef, ForwardedRef, ReactNode, forwardRef, memo, useId } from 'react';
import { palette } from '@styles';
import Typography, { TypographyProps } from '../Typography';
import * as styles from './index.css';

export interface CheckBoxProps extends Omit<ComponentPropsWithoutRef<'input'>, 'type'> {
  label: ReactNode;
  typographyProps?: Omit<TypographyProps, 'children'>;
}

const CheckBox = forwardRef(
  ({ label, typographyProps, ...otherProps }: CheckBoxProps, ref: ForwardedRef<HTMLInputElement>) => {
    const uniqueId = useId();

    return (
      <div className={styles.container}>
        <input {...otherProps} className={styles.input} id={uniqueId} ref={ref} type="checkbox" />
        <label className={styles.label} htmlFor={uniqueId}>
          <span className={styles.typo}>
            {typeof label === 'string' ? (
              <Typography color="Gray900" variant="B2" {...typographyProps}>
                {label}
              </Typography>
            ) : (
              label
            )}
          </span>
        </label>
        <span className={styles.icon}>
          <Icon color={palette.PrimaryOn} name="check" size={20} aria-hidden />
        </span>
      </div>
    );
  },
);

export default memo(CheckBox);
