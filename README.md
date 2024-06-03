# Storybook with React - Getting Started Guide

## Introduction
Storybook is an open-source tool for developing UI components in isolation for React, Vue, and Angular. It helps you build, test, and document components. This guide will walk you through setting up Storybook in a React project from scratch.

## Prerequisites
- Node.js (v12 or later)
- npm (v6 or later) or yarn (v1.22.10 or later)

## Steps to Setup Storybook in a React Project

### 1. Create a New React Project

First, create a new React project using `create-react-app` if you don't have an existing project:

```bash
npx create-react-app my-storybook-app
cd my-storybook-app
```
### 2. Install Storybook
```bash
npx sb init
```
This command will configure Storybook in your project and create the following directory structure:

my-storybook-app/ <br>
├── .storybook/ <br>
├── src/ <br>
│   ├── stories/ <br>
│   └── ...

### 3. Running Storybook
```bash
npm run storybook
```
### 4. Adding a Story
By default, Storybook adds some example stories. Let's create a new story for a React component.

First, create a simple React component:
```bash
// src/components/Button.js
import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ label, onClick }) => (
  <button onClick={onClick}>
    {label}
  </button>
);

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default Button;
```
### 5. Creating a story for this component:
```bash
// src/stories/Button.stories.js
import React from 'react';
import Button from '../components/Button';

export default {
  title: 'Example/Button',
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Button',
};
```
### 6. Adding Addons (Quite Helpful)
Storybook supports a variety of addons to enhance your workflow. For instance, let's add the docs addon:
```bash
npm install @storybook/addon-docs --save-dev
```
Update .storybook/main.js to include the actions addon:
```bash
// .storybook/main.js
module.exports = {
  stories: ['../src/**/*.stories.js'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-docs',
    'Add_Here',
  ],
};
```
### 7. Using the Docs Addon
```bash
// .storybook/main.js
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-docs",
  ],

  // Add this 
  docs: {
    autodocs: 'tag',
  },
```

#### Note: For Global CSS 
Add the Global CSS file in the .storybook/preview.js
```bash
// .storybook/preview.js

/** @type { import('@storybook/react').Preview } */
// import ./your_global.css here
...
```




