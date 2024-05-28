import Icon from "./react-components/Icons";

export default {
  title: "AiStudio/Components/Icons",
  parameters: {
    docs: {
      description: {
        component: `
\`\`\`jsx
import Icon from './react-components/Icons';
\`\`\`
        `,
      },
    }
  },
  component: Icon,
  tags: ['autodocs'],
}

const Template = (args) => <Icon {...args} />

export const IconRedirectLink = Template.bind({});
IconRedirectLink.args = {
  className: "icn-redirect-link",
  variant: "primary"
};

export const IconPin = Template.bind({});
IconPin.args = {
  className: "icn-pin"
};

export const IconModels = Template.bind({});
IconModels.args = {
  className: "icn-models"
};

export const IconLabs = Template.bind({});
IconLabs.args = {
  className: "icn-labs"
};

export const IconDrag = Template.bind({});
IconDrag.args = {
  className: "icn-drag"
};

export const IconCheckCircleFill = Template.bind({});
IconCheckCircleFill.args = {
  className: "icn-check-circle-fill"
};
