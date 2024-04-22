import type { Meta, StoryObj } from "@storybook/react";

import NowList from ".";

const meta = {
  component: NowList,
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
} satisfies Meta<typeof NowList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    data: [],
  },
};
