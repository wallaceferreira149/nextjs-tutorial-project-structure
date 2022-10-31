import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ISearchResult, SearchResult } from "./SearchResult";
import { mockSearchResultProps } from "./SearchResult.mocks";

export default {
  title: "utility/SearchResult",
  component: SearchResult,
  args: {},
} as ComponentMeta<typeof SearchResult>;

const Template: ComponentStory<typeof SearchResult> = (args) => (
  <SearchResult {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockSearchResultProps.base,
} as ISearchResult;
