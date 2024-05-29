import Icon from "./react-components/Icons";

export default {
  title: "AiStudio/Components/Icons",
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/ZkPJwF003a3AGlGv1HBehK/Design-updates-file?node-id=5692-290826&t=utOJdufNLl3z6ZtI-4",
    },
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
