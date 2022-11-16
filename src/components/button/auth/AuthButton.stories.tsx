import { ComponentMeta, ComponentStory } from "@storybook/react";
import { AuthButton, IAuthButton } from "./AuthButton";
import { mockAuthButtonProps } from "./AuthButton.mocks";

export default {
  title: "button/AuthButton",
  component: AuthButton,
  args: {},
} as ComponentMeta<typeof AuthButton>;

const Template: ComponentStory<typeof AuthButton> = (args) => (
  <AuthButton {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockAuthButtonProps.base,
} as IAuthButton;
