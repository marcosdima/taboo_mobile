import type { AnimadoTypes } from 'alambre';
import Text from './Text';

export default ({ style, ...props }: AnimadoTypes.AnimadoTextProps) => {
  return (
    <Text
      style={[
        {
          fontSize: 18,
          opacity: 0.8,
          marginBottom: 6,
        },
        style,
      ]}
      {...props}
    />
  );
};
