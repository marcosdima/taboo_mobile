import type { AnimadoTypes } from 'alambre';
import { AnimadoText } from 'alambre';
import { useLightDark } from '@config';

export default ({ style, ...props }: AnimadoTypes.AnimadoTextProps) => {
  const { theme: { color } } = useLightDark();
  return (
    <AnimadoText
      style={[style,  { color }]}
      {...props}
    />
  );
};
