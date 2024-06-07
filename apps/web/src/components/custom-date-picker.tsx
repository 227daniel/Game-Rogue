'use client';

import { Calendar } from '@ui/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@ui/components/ui/popover';
import { cn } from '@ui/lib/utils';
import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import { useEffect, useState } from 'react';

type CustomInputDatePickerProps = {
  onSelect?: (value: Date) => void;
  defaultValue?: Date;
};

export default function CustomInputDatePicker({
  onSelect,
  defaultValue,
}: CustomInputDatePickerProps) {
  const [date, setDate] = useState<Date>();
  useEffect(() => {
    if (onSelect && date) {
      onSelect(date);
    }
  }, [date, onSelect]);

  useEffect(() => {
    if (defaultValue) {
      setDate(new Date(defaultValue));
    }
  }, []);
  return (
    <Popover>
      <PopoverTrigger asChild>
        <div
          className={cn(
            'w-full flex justify-between border items-center rounded-[4px] border-DEFAULT border-[#e9e9e933] bg-transparent px-4 py-3 text-white hover:border-white'
          )}
        >
          {date && format(date, 'PPpp')}
          <CalendarIcon className="mr-2 size-6" />
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
      </PopoverContent>
    </Popover>
  );
}
