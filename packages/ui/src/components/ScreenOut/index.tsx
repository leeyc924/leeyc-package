export interface ScreenOutProps {
  text: string;
}

const ScreenOut = ({ text }: ScreenOutProps) => {
  return (
    <span
      style={{
        position: 'absolute',
        overflow: 'hidden',
        width: '1px',
        height: '1px',
        border: 0,
        clip: 'rect(1px, 1px, 1px, 1px)',
      }}
    >
      {text}
    </span>
  );
};

export default ScreenOut;
