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
    <div className="max-sm:p-[10px] sm:p-[16px] md:p-[32px]">
      <div className="rounded-lg bg-[#241A12] max-sm:p-[5px] sm:p-[16px] md:p-[32px]">
        <div className="header flex">
          <h2 className="flex-1 uppercase text-white max-sm:text-[12px] sm:text-[18px] md:text-[24px]">
            rolling leaderboard
          </h2>
          <div className="selectGroup flex max-sm:space-x-1 sm:space-x-4">
            <Select
              classNames={{
                mainWrapper: ' max-sm:w-[80px] xl:w-[180px] sm:w-[130px]',
                trigger: 'bg-foreground sm:px-2 max-sm:px-1 md:px-4 py-[6px] rounded',
                listboxWrapper: 'max-h-[400px]',
                value:
                  '!text-white font-bold uppercase sm:text-[12px] max-sm:text-[8px] md:text-[16px] lg:text-[16px] xl:text-[18px]',
              }}
              placeholder="Game"
            >
              <SelectItem key={1}>rainbow six siege</SelectItem>
            </Select>
            <Select
              classNames={{
                mainWrapper: ' max-sm:w-[80px] xl:w-[180px] sm:w-[130px]',
                trigger: 'bg-foreground sm:px-2 max-sm:px-1 md:px-4 py-[6px] rounded',
                listboxWrapper: 'max-h-[400px]',
                value:
                  '!text-white font-bold uppercase sm:text-[12px] max-sm:text-[8px] md:text-[16px] lg:text-[16px] xl:text-[18px]',
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
                mainWrapper: ' max-sm:w-[80px] xl:w-[180px] sm:w-[130px]',
                trigger: 'bg-foreground sm:px-2 max-sm:px-1 md:px-4 py-[6px] rounded',
                listboxWrapper: 'max-h-[400px]',
                value:
                  '!text-white font-bold uppercase sm:text-[12px] max-sm:text-[8px] md:text-[16px] lg:text-[16px] xl:text-[18px]',
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
              td: 'sm:h-[50px] max-sm:h-[30px]',
            }}
          >
            <TableHeader>
              <TableColumn className="max-sm:p-0 max-sm:text-[8px]">RANK</TableColumn>
              <TableColumn className="max-sm:p-0 max-sm:text-[8px]">TEAM NAME</TableColumn>
              <TableColumn className="max-sm:p-0 max-sm:text-[8px]">CHANGE</TableColumn>
              <TableColumn className="max-sm:p-0 max-sm:text-[8px]">OVERALL</TableColumn>
              <TableColumn className="max-sm:p-0 max-sm:text-[8px]">ORGANIZATION</TableColumn>
              <TableColumn className="max-sm:p-0 max-sm:text-[8px]">MANAGER</TableColumn>
              <TableColumn className="max-sm:p-0 max-sm:text-[8px]">GR</TableColumn>
            </TableHeader>
            <TableBody>
              {mockDatas.map((item, i) => (
                <TableRow className="border-b-1 h-[30px] border-b-gray-700" key="1">
                  <TableCell className="max-sm:text-[8px]">{i + 1}</TableCell>
                  <TableCell className="max-sm:text-[8px]">{'Title' + String(i + 1)}</TableCell>
                  <TableCell className="text-green-600">+1</TableCell>
                  <TableCell className="max-sm:text-[8px]">0-0-0</TableCell>
                  <TableCell className="max-sm:text-[8px]">
                    <></>
                  </TableCell>
                  <TableCell className="max-sm:text-[8px]">Ivan Vil</TableCell>
                  <TableCell className="max-sm:text-[8px]">0.0</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
