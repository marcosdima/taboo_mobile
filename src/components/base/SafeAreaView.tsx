import type { DefaultReact } from 'alambre';
import { SafeAreaView } from 'alambre';

export default ({ children, ...props }: DefaultReact.SafeAreaViewProps) => {
  return (
    <SafeAreaView
      {...props}
    >
      {children}
    </SafeAreaView>
  );
};
