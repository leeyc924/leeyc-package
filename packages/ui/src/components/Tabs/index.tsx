'use client';

import { forwardRef } from 'react';

const TabsRoot = forwardRef((props, ref) => {
  return <div>TabsRoot</div>;
});
TabsRoot.displayName = 'Tabs.Root';

const TabsList = forwardRef((props, ref) => {
  return <div>TabsList</div>;
});
TabsList.displayName = 'Tabs.List';

const TabsTrigger = forwardRef((props, ref) => {
  return <div>TabsTrigger</div>;
});
TabsTrigger.displayName = 'Tabs.Trigger';

const TabsItem = forwardRef((props, ref) => {
  return <div>TabsItem</div>;
});
TabsItem.displayName = 'Tabs.TabsItem';

const TabsTriggerText = forwardRef((props, ref) => {
  return <div>TabsTriggerText</div>;
});
TabsTriggerText.displayName = 'Tabs.TriggerText';

const TabsContent = forwardRef((props, ref) => {
  return <div>TabsContent</div>;
});
TabsContent.displayName = 'Tabs.Content';

export {
  TabsRoot as Root,
  TabsList as List,
  TabsTrigger as Trigger,
  TabsItem as Item,
  TabsContent as Content,
  TabsTriggerText as TriggerText,
};
