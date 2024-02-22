import { DataGrid, DataGridProps } from '@components';
import { Meta, StoryObj } from '@storybook/react';

const story: Meta<DataGridProps> = {
  component: DataGrid,
  tags: ['autodocs'],
  parameters: {},
};

export default story;

export const Default: StoryObj<DataGridProps> = {
  args: {
    columns: [
      { id: 'no', label: 'no', width: 40 },
      {
        id: 'personal',
        label: 'personal',
        children: [
          { id: 'name', label: 'name' },
          { id: 'age', label: 'age' },
          { id: 'location', label: 'location' },
          { id: 'gender', label: 'gender' },
        ],
      },
      {
        id: 'joinDt',
        label: 'joinDt',
      },
      {
        id: 'recentDt',
        label: 'recentDt',
      },
    ],
    dataGridTitleLabel: 'DataGrid',
    rows: [
      { no: 1, name: '홍길동', age: 28, location: '강남', gender: '남', joinDt: '2024.01.01', recentDt: '2024.01.01' },
      { no: 2, name: '홍길동', age: 28, location: '강남', gender: '남', joinDt: '2024.01.01', recentDt: '2024.01.01' },
      { no: 3, name: '홍길동', age: 28, location: '강남', gender: '남', joinDt: '2024.01.01', recentDt: '2024.01.01' },
      { no: 4, name: '홍길동', age: 28, location: '강남', gender: '남', joinDt: '2024.01.01', recentDt: '2024.01.01' },
      { no: 5, name: '홍길동', age: 28, location: '강남', gender: '남', joinDt: '2024.01.01', recentDt: '2024.01.01' },
      { no: 6, name: '홍길동', age: 28, location: '강남', gender: '남', joinDt: '2024.01.01', recentDt: '2024.01.01' },
      { no: 7, name: '홍길동', age: 28, location: '강남', gender: '남', joinDt: '2024.01.01', recentDt: '2024.01.01' },
      { no: 8, name: '홍길동', age: 28, location: '강남', gender: '남', joinDt: '2024.01.01', recentDt: '2024.01.01' },
      { no: 9, name: '홍길동', age: 28, location: '강남', gender: '남', joinDt: '2024.01.01', recentDt: '2024.01.01' },
      { no: 10, name: '홍길동', age: 28, location: '강남', gender: '남', joinDt: '2024.01.01', recentDt: '2024.01.01' },
    ],
  },
};
