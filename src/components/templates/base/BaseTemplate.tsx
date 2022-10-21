export interface IBaseTemplate {
  sampleProps: string;
}

export const BaseTemplate: React.FC<IBaseTemplate> = ({ sampleProps }) => {
  return <div className="">{sampleProps}</div>;
};
