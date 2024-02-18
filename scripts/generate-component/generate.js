const fs = require('fs');
const path = require('path');

const [, , componentName] = process.argv;

function parsePascalCase(input) {
  let result = input.replace(/[_\-!@#$%^&*()]/g, (_, c) => c.toUpperCase());
  result = result.replace(/\s+/g, '');

  return result.charAt(0).toUpperCase() + result.slice(1);
}

function main() {
  const pascalComponentName = parsePascalCase(componentName);
  const COMPONENT_PATH = path.resolve(`packages/ui/src/components/${pascalComponentName}`);
  const STORYBOOK_PATH = path.resolve(`apps/storybook/stories/Components/${pascalComponentName}`);

  const componentSnipet = `import { ReactNode } from 'react';
import * as styles from './index.css';

export interface ${pascalComponentName}Props {
  children: ReactNode;
}

const ${pascalComponentName} = ({ children }: ${pascalComponentName}Props) => {
  return <div className={styles.container}>{children}</div>;
};

export default ${pascalComponentName};
`;

  const styleSnipet = `import { style } from '@vanilla-extract/css';
import { palette } from '../../styles';

export const container = style({});
`;

  const storybookSnipet = `import { ${pascalComponentName}, ${pascalComponentName}Props } from '@components';
import { Meta, StoryObj } from '@storybook/react';

const story: Meta<${pascalComponentName}Props> = {
  component: ${pascalComponentName},
  tags: ['autodocs'],
  parameters: {},
};

export default story;

export const Default: StoryObj<${pascalComponentName}Props> = {
  args: {
    children: '${pascalComponentName}',
  },
};
`;

  fs.mkdirSync(COMPONENT_PATH);
  console.log(`success ${pascalComponentName} directory`);
  fs.appendFileSync(`${COMPONENT_PATH}/index.tsx`, componentSnipet);
  console.log('success index.tsx');
  fs.appendFileSync(`${COMPONENT_PATH}/index.css.ts`, styleSnipet);
  console.log('success index.css.ts');
  fs.appendFileSync(`${STORYBOOK_PATH}.stories.tsx`, storybookSnipet);
  console.log('success stories.tsx');
}

main();
