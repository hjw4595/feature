import type { Meta, StoryObj } from "@storybook/react";

import Tab from ".";

const meta = {
  component: Tab,
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
} satisfies Meta<typeof Tab>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
