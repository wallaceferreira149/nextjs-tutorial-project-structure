import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Sidebar } from "../sidebar/SideBar";
import { IPrimaryLayout, PrimaryLayout } from "./PrimaryLayout";
import { mockPrimaryLayoutProps } from "./PrimaryLayout.mocks";

export default {
  title: "templates/PrimaryLayout",
  component: PrimaryLayout,
  args: {},
} as ComponentMeta<typeof PrimaryLayout>;

const Template: ComponentStory<typeof PrimaryLayout> = (args) => (
  <PrimaryLayout {...args}>
    <Sidebar />
  </PrimaryLayout>
);

export const Base = Template.bind({});

Base.args = {
  ...mockPrimaryLayoutProps.base,
} as IPrimaryLayout;
