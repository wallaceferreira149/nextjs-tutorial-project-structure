import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ISidebar, Sidebar } from "./SideBar";
import { mockSidebarProps } from "./SideBar.mocks";

export default {
  title: "templates/Sidebar",
  component: Sidebar,
  args: {},
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => (
  <Sidebar {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockSidebarProps.base,
} as ISidebar;
