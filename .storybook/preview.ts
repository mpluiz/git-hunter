import type { Preview } from "@storybook/react";

import '@/presentation/assets/styles/normalize.css'
import '@/presentation/assets/styles/global.css'
import '@/presentation/assets/styles/variables.css'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
