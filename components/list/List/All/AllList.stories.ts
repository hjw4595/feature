import type { Meta, StoryObj } from "@storybook/react";

import AllList from ".";

const meta = {
  component: AllList,
} satisfies Meta<typeof AllList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    data: [],
  },
};
