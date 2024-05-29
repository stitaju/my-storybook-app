import Button from "./react-components/Button";

export default {
  title: "AiStudio/Components/Button/ Buttons",
  component: Button,
  parameters: {
    docs: {
      description: {
        component: `
\`\`\`jsx
import Button from './{project_path_here}/react-components/Button';
\`\`\`
        `,
      },
    },
    design: {
      type: "figma",
      url: "https://www.figma.com/proto/CDSUjP1zPGZyftGvkpi1AK/DS-Core-components?node-id=881-3625&t=SIl1pHsMfREd7fST-0&scaling=min-zoom&page-id=881%3A3624",
    },
  },
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

const Template = (args) => <Button {...args}></Button>

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
