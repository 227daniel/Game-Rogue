'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { DateValue } from '@internationalized/date';
import { TEventCreate, ZEvent } from '@repo/types';
import { useQueryClient } from '@tanstack/react-query';
import * as nextuibutton from '@ui/components/nextui/button';
import { DatePicker } from '@ui/components/nextui/date-picker';
import { Input, Textarea } from '@ui/components/nextui/input';
import { Select, SelectItem } from '@ui/components/nextui/select';
import { Button } from '@ui/components/ui/button';
import { Pencil, PlusIcon } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { ColorPicker } from '@/components/color-picker';
import {
  course_type_data,
  event_format_data,
  game_data,
  platform_data,
  QUERY_KEYS,
  region_data,
  seed_type_data,
  time_zones_data,
} from '@/config/const';
import { useUpdateEvent } from '@/hooks/use-event';

export default function EventCreatePageComponent(props: { organizationId?: string }) {
  const { organizationId } = props;
  const [event_graphic, setEvent_graphic] = useState<File>();
  const [rulebook_file, setRulebook_file] = useState<File>();
  const [terms_conditions_file, setTerms_conditions_file] = useState<File>();
  const [terms_privacy_policy_file, setTerms_privacy_policy_file] = useState<File>();
  const [event_logo_dark, setEvent_logo_dark] = useState<File>();
  const [event_logo_light, setEvent_logo_light] = useState<File>();
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { isValid, isSubmitting, errors },
  } = useForm<TEventCreate>({
    mode: 'onChange',
    resolver: zodResolver(ZEvent),
    defaultValues: {
      organizationId,
    },
  });
  const { mutate: createEvent, isPending } = useUpdateEvent();
  const queryClient = useQueryClient();
  const onSubmit = (data: TEventCreate) => {
    createEvent(
      {
        data,
        files: {
          event_graphic,
          rulebook_file,
          terms_conditions_file,
          terms_privacy_policy_file,
          event_logo_dark,
          event_logo_light,
        },
      },
      {
        onError(error) {
          toast.error(error.message);
        },
        onSuccess() {
          toast.success(`Event ${data.name} created successfully`);
          reset();
          queryClient.invalidateQueries({
            queryKey: [QUERY_KEYS.events],
          });
        },
      }
    );
  };
  return (
    <div className="flex flex-1">
      <form onSubmit={handleSubmit(onSubmit)} className="flex w-full flex-col justify-start gap-4">
        <div className="w-full">
          <h6 className="my-4 text-white">Event Logo</h6>
          <div className="flex w-full items-center justify-center gap-6">
            <div className="flex items-start gap-2">
              <div className="flex flex-col justify-start gap-4">
                <Button className="uppercase" asChild>
                  <label htmlFor="dark_upload" className="cursor-pointer">
                    <input
                      type="file"
                      accept="image/*"
                      name="dark_upload"
                      id="dark_upload"
                      onChange={(e) => {
                        if (e.target.files?.[0]) setEvent_logo_dark(e.target.files[0]);
                      }}
                      hidden
                    />
                    upload dark logo
                  </label>
                </Button>
                <Button
                  type="button"
                  className="uppercase"
                  onClick={() => setEvent_logo_dark(undefined)}
                >
                  remove dark logo
                </Button>
              </div>
              <div className="flex h-[180px] flex-col justify-end">
                <Image
                  className="mt-auto"
                  src={
                    event_logo_dark !== undefined
                      ? URL.createObjectURL(event_logo_dark)
                      : '/static/images/home/dark_logo.png'
                  }
                  alt=""
                  width={200}
                  height={200}
                />
              </div>
            </div>
            <div className="flex items-start gap-2">
              <div className="flex flex-col justify-start gap-4">
                <Button className="uppercase" asChild>
                  <label htmlFor="light_upload" className="cursor-pointer">
                    <input
                      type="file"
                      accept="image/*"
                      name="light_upload"
                      id="light_upload"
                      hidden
                      onChange={(e) => {
                        if (e.target.files?.[0]) setEvent_logo_light(e.target.files[0]);
                      }}
                    />
                    upload light logo
                  </label>
                </Button>
                <Button
                  type="button"
                  className="uppercase"
                  onClick={() => setEvent_logo_light(undefined)}
                >
                  remove light logo
                </Button>
              </div>
              <div className="flex h-[180px] flex-col justify-end">
                <Image
                  className="mt-auto"
                  src={
                    event_logo_light !== undefined
                      ? URL.createObjectURL(event_logo_light)
                      : '/static/images/home/light_logo.png'
                  }
                  alt=""
                  width={200}
                  height={200}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <h6 className="my-2 text-white">Event Graphic</h6>
          <div className="relative w-full">
            <Image
              src={
                event_graphic !== undefined
                  ? URL.createObjectURL(event_graphic)
                  : '/static/images/home/banner_image.png'
              }
              className="h-[300px] w-full max-w-full rounded-md border-DEFAULT border-white/20 object-cover"
              height={300}
              width={1000}
              alt=""
            />
            <label
              htmlFor="banner_upload"
              className="absolute bottom-4 right-4 cursor-pointer rounded-full p-2 text-white duration-200 hover:bg-white/10 active:bg-white/20 active:transition-colors"
            >
              <Pencil className="size-6" />
              <input
                type="file"
                accept="image/*"
                name="banner_upload"
                id="banner_upload"
                hidden
                onChange={(e) => {
                  if (e.target.files?.[0]) setEvent_graphic(e.target.files[0]);
                }}
              />
            </label>
          </div>
        </div>
        <Input
          {...register('name')}
          label={'Event Name'}
          isInvalid={!!errors['name']}
          errorMessage={errors['name']?.message}
          variant="bordered"
        />
        <Textarea
          {...register('tagline')}
          isInvalid={!!errors['tagline']}
          errorMessage={errors['tagline']?.message}
          label={'Tagline'}
          variant="bordered"
        />

        <div className="grid w-full grid-cols-2 gap-4">
          <Select label="Event Format" {...register('event_format')} variant="bordered">
            {event_format_data.map((item, i) => (
              <SelectItem key={`item-${i}`} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </Select>
          <Select label="Course Type" {...register('course_type')} variant="bordered">
            {course_type_data.map((item, i) => (
              <SelectItem key={`item-${i}`} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </Select>
          <Select label="Seed Type" {...register('seed_type')} variant="bordered">
            {seed_type_data.map((item, i) => (
              <SelectItem key={`item-${i}`} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </Select>
          <Input
            label="Team limit"
            type="number"
            {...register('team_limit', { min: 0, valueAsNumber: true })}
            isInvalid={!!errors['team_limit']}
            errorMessage={errors['team_limit']?.message}
            variant="bordered"
          />

          <DatePicker
            label="Start date"
            onChange={(e: DateValue) => {
              if (e) {
                setValue('start_date', e?.toString());
              }
            }}
            isInvalid={!!errors['start_date']}
            errorMessage={errors['start_date']?.message}
            variant="bordered"
          />
          <DatePicker
            label="End date"
            onChange={(e: DateValue) => {
              if (e) {
                setValue('end_date', e?.toString());
              }
            }}
            isInvalid={!!errors['end_date']}
            errorMessage={errors['end_date']?.message}
            variant="bordered"
          />
          <DatePicker
            label="Registration Opens"
            onChange={(e: DateValue) => {
              if (e) {
                setValue('registration_opens_date', e?.toString());
              }
            }}
            isInvalid={!!errors['registration_opens_date']}
            errorMessage={errors['registration_opens_date']?.message}
            variant="bordered"
          />
          <DatePicker
            label="Registration Ends"
            onChange={(e: DateValue) => {
              if (e) {
                setValue('registration_ends_date', e?.toString());
              }
            }}
            isInvalid={!!errors['registration_ends_date']}
            errorMessage={errors['registration_ends_date']?.message}
            variant="bordered"
          />
          <Input
            label="Prize Pool"
            type="number"
            {...register('prize_pool', { min: 0, valueAsNumber: true })}
            isInvalid={!!errors['prize_pool']}
            errorMessage={errors['prize_pool']?.message}
            variant="bordered"
          />
          <Input
            label="Entry Fee"
            type="number"
            {...register('entry_fee', { min: 0, valueAsNumber: true })}
            isInvalid={!!errors['entry_fee']}
            errorMessage={errors['entry_fee']?.message}
            variant="bordered"
          />
          <Select
            label="Game"
            {...register('gameId')}
            isInvalid={!!errors['gameId']}
            errorMessage={errors['gameId']?.message}
            variant="bordered"
          >
            {game_data.map((item, i) => (
              <SelectItem key={`item-${i}`} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </Select>
          <Select
            label="Platform"
            {...register('platform')}
            isInvalid={!!errors['platform']}
            errorMessage={errors['platform']?.message}
            variant="bordered"
          >
            {platform_data.map((item, i) => (
              <SelectItem key={`item-${i}`} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </Select>
          <Select
            label="Region"
            {...register('region')}
            isInvalid={!!errors['region']}
            errorMessage={errors['region']?.message}
            variant="bordered"
          >
            {region_data.map((item, i) => (
              <SelectItem key={`item-${i}`} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </Select>
          <Select
            label="Timezone"
            {...register('timezone')}
            isInvalid={!!errors['timezone']}
            errorMessage={errors['timezone']?.message}
            variant="bordered"
          >
            {time_zones_data.map((item, i) => (
              <SelectItem key={`item-${i}`} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </Select>
        </div>
        <div className="grid w-full grid-cols-3 gap-4">
          <div>
            <div className="mb-6">
              <p className="font-[500] text-white">Add a Rulebook</p>
              <h6 className="text-left text-sm font-[500] text-[#808080]">
                Publicly shared (.pdf) and must be accepted by competitors.
              </h6>
            </div>
            <div>
              <Button className="w-full bg-transparent uppercase" variant={'outline'} asChild>
                <label htmlFor="rule_book_upload" className="cursor-pointer">
                  <input
                    type="file"
                    accept="application/pdf"
                    name="rule_book_upload"
                    id="rule_book_upload"
                    hidden
                    onChange={(e) => {
                      if (e.target.files?.[0]) setRulebook_file(e.target.files[0]);
                    }}
                  />
                  <PlusIcon className="mr-2 size-3" />
                  upload
                </label>
              </Button>
            </div>
          </div>
          <div>
            <div className="mb-6">
              <p className="font-[500] text-white">Add Terms and Conditions</p>
              <h6 className="text-left text-sm font-[500] text-[#808080]">
                Must be accepted by competitors and is displayed alongside rulebooks.
              </h6>
            </div>
            <div>
              <Button className="w-full bg-transparent uppercase" variant={'outline'} asChild>
                <label htmlFor="terms_conditions_upload" className="cursor-pointer">
                  <input
                    type="file"
                    accept="application/pdf"
                    name="terms_conditions_upload"
                    id="terms_conditions_upload"
                    hidden
                    onChange={(e) => {
                      if (e.target.files?.[0]) setTerms_conditions_file(e.target.files[0]);
                    }}
                  />
                  <PlusIcon className="mr-2 size-3" />
                  upload
                </label>
              </Button>
            </div>
          </div>
          <div>
            <div className="mb-1">
              <p className="font-[500] text-white">Add Privacy Policy</p>
              <h6 className="text-left text-sm font-[500] text-[#808080]">
                Must be accepted by competitors and is displayed alongside rulebooks and terms and
                conditions.
              </h6>
            </div>
            <div>
              <Button className="w-full bg-transparent uppercase" variant={'outline'} asChild>
                <label htmlFor="privacy_policy_upload" className="cursor-pointer">
                  <input
                    type="file"
                    accept="application/pdf"
                    name="privacy_policy_upload"
                    id="privacy_policy_upload"
                    hidden
                    onChange={(e) => {
                      if (e.target.files?.[0]) setTerms_privacy_policy_file(e.target.files[0]);
                    }}
                  />
                  <PlusIcon className="mr-2 size-3" />
                  upload
                </label>
              </Button>
            </div>
          </div>
        </div>
        <div>
          <h6 className="text-white">
            Event Branding
            <span className="ml-1 cursor-pointer text-sm text-primary">
              It is highly recommended that each color is different.
            </span>
          </h6>
          <div className="mt-2 grid w-full grid-cols-3 gap-4">
            <div>
              <div className="mb-9">
                <p className="font-[500] text-white">Primary</p>
                <h6 className="text-left text-sm font-[500] text-[#808080]">
                  This changes the color of your event card&apos;s border, event title, button
                  colors, and content block titles.
                </h6>
              </div>
              <ColorPicker
                defaultColor="#f5851f"
                onSelect={(value) => setValue('event_branding_primary_color', value)}
              />
            </div>
            <div>
              <div className="mb-4">
                <p className="font-[500] text-white">Secondary</p>
                <h6 className="text-left text-sm font-[500] text-[#808080]">
                  This changes the color of the event graphic border, text inside content blocks,
                  text inside event cards, text inside buttons, and text inside drop-down menus.
                </h6>
              </div>
              <ColorPicker
                defaultColor="#ab5a15"
                onSelect={(value) => setValue('event_branding_secondary_color', value)}
              />
            </div>
            <div>
              <div className="mb-9">
                <p className="font-[500] text-white">Tertiary</p>
                <h6 className="text-left text-sm font-[500] text-[#808080]">
                  This changes the background of event pages, the background of event cards, and the
                  background of drop-down menus.
                </h6>
              </div>
              <ColorPicker
                defaultColor="#f5851f"
                onSelect={(value) => setValue('event_branding_tertiary_color', value)}
              />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-end gap-2">
          <nextuibutton.Button
            type="reset"
            color="secondary"
            isDisabled={isSubmitting}
            isLoading={isSubmitting || isPending}
          >
            Reset
          </nextuibutton.Button>
          <nextuibutton.Button
            type="submit"
            color="success"
            isDisabled={!isValid || isSubmitting}
            isLoading={isSubmitting || isPending}
          >
            Submit
          </nextuibutton.Button>
        </div>
      </form>
    </div>
  );
}
