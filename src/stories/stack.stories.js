import Stack from "./react-components/Stack";
import Button from "./react-components/Button";
export default {
  title: "AiStudio/Components/Stack/Pill",
  component: Stack,
  parameters: {
    docs: {
      description: {
        component: `
\`\`\`jsx
import Stack from "./react-components/Stack";
import Button from "./react-components/Button";
\`\`\`
      `,
      },
    }
  },
  argTypes: {
    numberOfChildren: {
      type: "number",
      table: {
        defaultValue: { summary: '8 childrens' },
      },
    },
    btnVariant: {
      options: ['primary', 'secondary'],
    },
    spacing: {
      table: {
        defaultValue: { summary: '8px' },
      },
    }
  },

  tags: ['autodocs'],
}

const Template = ({ numberOfChildren = 4, btnVariant, ...args }) => <Stack {...args}>{[...Array(numberOfChildren).keys()].map(n => (<Button label={`Pill ${n}`} variant={btnVariant} prefixIcon="icn-check-circle" />))}</Stack>

export const Horizontal = Template.bind({});
Horizontal.args = {
  direction: "row",
  btnVariant: 'primary',
}

export const Vertical = Template.bind({});
Vertical.args = {
  btnVariant: 'secondary',
  direction: "column",
}