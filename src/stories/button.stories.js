import Button from "./react-components/Button";

export default {
  title: "AiStudio/Button",
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ["primary", "secondary"],
      control: "radio",
    },
    size: {
      options: ["sm", "md", "lg"],
      control: 'select'
    }
  }
}

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Click Me!',
  variant: "primary",
  isLoading: false,
}

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Click Me!',
  variant: "secondary",
}

export const Loading = Template.bind({});
Loading.args = {
  label: 'Click Me!',
  variant: "primary",
  isLoading: true,
}
