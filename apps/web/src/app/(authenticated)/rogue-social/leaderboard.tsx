import { Select, SelectItem } from '@ui/components/nextui/select';
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from '@ui/components/nextui/table';
import React from 'react';

const mockDatas = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 5, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,
];
export default function Leaderboard() {
  return (
    <div className="p-[32px]">
      <div className="rounded-lg bg-[#241A12] p-[32px]">
        <div className="header flex">
          <h2 className="flex-1 text-[24px] uppercase text-white">rolling leaderboard</h2>
          <div className="selectGroup flex space-x-4">
            <Select
              classNames={{
                mainWrapper: 'min-w-[140px]',
                trigger: 'bg-foreground px-4 py-[6px] rounded',
                listboxWrapper: 'max-h-[400px]',
                value: '!text-white font-bold uppercase',
              }}
              placeholder="Game"
            >
              <SelectItem key={1}>rainbow six siege</SelectItem>
            </Select>
            <Select
              classNames={{
                mainWrapper: 'min-w-[140px]',
                trigger: 'bg-foreground px-4 py-[6px] rounded',
                listboxWrapper: 'max-h-[400px]',
                value: '!text-white font-bold uppercase',
              }}
              placeholder="Platform"
            >
              <SelectItem key={1}>Xbox</SelectItem>
              <SelectItem key={2}>PC</SelectItem>
              <SelectItem key={3}>PS4</SelectItem>
              <SelectItem key={4}>Cross-Platform</SelectItem>
            </Select>
            <Select
              classNames={{
                mainWrapper: 'min-w-[140px]',
                trigger: 'bg-foreground px-4 py-[6px] rounded',
                listboxWrapper: 'max-h-[400px]',
                value: '!text-white font-bold uppercase',
              }}
              placeholder="Region"
            >
              <SelectItem key={1}>North America</SelectItem>
              <SelectItem key={2}>Latin America</SelectItem>
              <SelectItem key={3}>Europe</SelectItem>
            </Select>
          </div>
        </div>
        <div className="main pt-[16px]">
          <Table
            removeWrapper
            aria-label="Example static collection table"
            classNames={{
              th: 'bg-transparent border-b border-b-gray-700',
              td: 'h-[50px]',
            }}
          >
            <TableHeader>
              <TableColumn>RANK</TableColumn>
              <TableColumn>TEAM NAME</TableColumn>
              <TableColumn>CHANGE</TableColumn>
              <TableColumn>OVERALL</TableColumn>
              <TableColumn>ORGANIZATION</TableColumn>
              <TableColumn>MANAGER</TableColumn>
              <TableColumn>GR</TableColumn>
            </TableHeader>
            <TableBody>
              {mockDatas.map((item, i) => (
                <TableRow className="border-b-1 h-[30px] border-b-gray-700" key="1">
                  <TableCell>{i + 1}</TableCell>
                  <TableCell>{'Title' + String(i + 1)}</TableCell>
                  <TableCell className="text-green-600">+1</TableCell>
                  <TableCell>0-0-0</TableCell>
                  <TableCell>
                    <></>
                  </TableCell>
                  <TableCell>Ivan Vil</TableCell>
                  <TableCell>0.0</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
