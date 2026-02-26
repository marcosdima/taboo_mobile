import { AnimadoView } from 'alambre';
import type { DefaultReact } from 'alambre';

export default ({ children, ...props }: DefaultReact.ViewProps) => {
  return (
    <AnimadoView
      {...props}
    >
      {children}
    </AnimadoView>
  );
};
