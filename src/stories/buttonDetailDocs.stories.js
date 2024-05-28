import Button from "./react-components/ButtonDetailDocs";
import Icon from "./react-components/Icons";
export default {
  title: "AiStudio/Components/Button/Buttons (Detail Docs)",
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ["primary", "secondary"],
      control: "radio",
    },
    size: {
      options: ["sm", "md", "lg"],
    },
    prefixIcon: {
      control: 'select'
    },
    suffixIcon: {
      control: 'select'
    }
  }
}

const Template = ({ args, label = "Submit", prefixIcon, suffixIcon }) => <Button {...args}>{prefixIcon && prefixIcon !== 'none' && (
  <Icon
    className={`${prefixIcon ?? 'icn-activity'}`}
    variant="default"
  />
)}
  {label}
  {suffixIcon && suffixIcon !== 'none' && (
    <Icon
      className={`${suffixIcon ?? 'icn-activity'}`}
      variant="default"
    />
  )}</Button>;

export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
}

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "secondary",
}

export const PrefixIcon = Template.bind({});
PrefixIcon.args = {
  prefixIcon: "icn-check-circle",
}

export const SuffixIcon = Template.bind({});
SuffixIcon.args = {
  variant: "secondary",
  suffixIcon: "icn-check-circle",
}

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
}
