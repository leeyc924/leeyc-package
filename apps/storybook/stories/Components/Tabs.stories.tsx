import { Tabs, TabsProps } from '@components';
import { Meta, StoryFn } from '@storybook/react';
import { useState } from 'react';

const story: Meta<TabsProps> = {
  component: Tabs,
  tags: ['autodocs'],
  parameters: {},
};

export default story;

export const Default: StoryFn<TabsProps> = () => {
  const [id, setId] = useState('1');
  return (
    <>
      <Tabs selectedTabId={id} onClick={tabId => setId(tabId)}>
        <Tabs.TabList
          tabItemList={[
            { tabId: '1', label: '1' },
            { tabId: '2', label: '2' },
            { tabId: '3', label: '3' },
          ]}
        />
        <Tabs.TabPanel label="1번탭" tabId="1">
          1번탭
        </Tabs.TabPanel>
        <Tabs.TabPanel label="2번탭" tabId="2">
          2번탭
        </Tabs.TabPanel>
        <Tabs.TabPanel label="3번탭" tabId="3">
          3번탭
        </Tabs.TabPanel>
      </Tabs>
    </>
  );
};
