import type { Preview } from "@storybook/react";
import '@/presentation/styles/normalize.css'
import '@/presentation/styles/global.css'
import '@/presentation/styles/variables.css'

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
