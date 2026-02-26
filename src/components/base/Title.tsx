import Text from './Text';
import type { AnimadoTypes } from 'alambre';

export default ({ style, ...props }: AnimadoTypes.AnimadoTextProps) => {
  return (
    <Text
      style={[
        {
          fontSize: 24,
          fontWeight: 'bold',
          marginBottom: 8,
        },
        style,
      ]}
      {...props}
    />
  );
};
