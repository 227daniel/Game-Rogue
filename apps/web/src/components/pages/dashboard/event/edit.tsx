'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { TEvent, TEventUpdate, ZEventUpdate } from '@repo/types';
import { useQueryClient } from '@tanstack/react-query';
import { Button } from '@ui/components/ui/button';
import { Input } from '@ui/components/ui/input';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@ui/components/ui/select';
import { Textarea } from '@ui/components/ui/textarea';
import { Pencil, PlusIcon } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { ColorPicker } from '@/components/color-picker';
import CustomInputDatePicker from '@/components/custom-date-picker';
import CustomSelect from '@/components/custom-select';
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
import { useAuthOrganizations } from '@/hooks/use-organization';

type EventUpdatePageComponentProps = {
  initialData: TEvent;
};

export default function EventUpdatePageComponent({ initialData }: EventUpdatePageComponentProps) {
  const { data: organizations } = useAuthOrganizations();
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
    formState: { isSubmitting, errors },
  } = useForm<TEventUpdate>({
    mode: 'onChange',
    resolver: zodResolver(ZEventUpdate),
    defaultValues: {
      ...initialData,
    },
  });
  const { mutate: updateEvent } = useUpdateEvent();
  const queryClient = useQueryClient();
  const onSubmit = (data: TEventUpdate) => {
    updateEvent(
      {
        _id: initialData._id,
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
          toast.success(`Event ${data.name} updated successfully`);
          reset();
          queryClient.invalidateQueries({
            queryKey: [QUERY_KEYS.events],
          });
        },
      }
    );
  };
  console.log(errors);
  return (
    <div className="flex flex-1">
      <form onSubmit={handleSubmit(onSubmit)} className="flex w-full flex-col gap-4">
        <div className="flex w-full flex-col justify-start">
          <div
            className="flex w-full flex-col justify-start px-6 pb-4"
            style={{
              background: 'linear-gradient(to top, rgb(74, 40, 7) -20%, rgb(34, 18, 4) 80%)',
            }}
          >
            <h1 className="mb-4 mt-10 text-[2.2rem] font-bold uppercase italic tracking-tight">
              EDIT EVENT
            </h1>
            <div
              className="mb-6 w-full rounded-md bg-[#180e05] px-7 py-4 shadow-md"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))',
              }}
            >
              <div className="mb-8 w-full">
                <h6 className="my-4 text-[1.25rem] text-white">Event Logo</h6>
                <div className="flex w-full items-center justify-center gap-6">
                  <div className="flex items-start gap-2">
                    <div className="flex flex-col justify-start gap-4">
                      <Button className="bg-primary uppercase" asChild>
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
                        className="bg-primary uppercase"
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
                            : initialData.event_logo_dark ?? '/static/images/home/dark_logo.png'
                        }
                        alt=""
                        width={200}
                        height={200}
                      />
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="flex flex-col justify-start gap-4">
                      <Button className="bg-primary uppercase" asChild>
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
                        className="bg-primary uppercase"
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
                            : initialData.event_logo_light ?? '/static/images/home/light_logo.png'
                        }
                        alt=""
                        width={200}
                        height={200}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-8 w-full">
                <h6 className="my-6 text-[1.25rem] text-white">Event Graphic</h6>
                <div className="relative w-full">
                  <Image
                    src={
                      event_graphic !== undefined
                        ? URL.createObjectURL(event_graphic)
                        : initialData.event_graphic ?? '/static/images/home/banner_image.png'
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
              <div className="mb-8 w-full">
                <div className="grid w-full items-center gap-1.5">
                  <h6 className="text-[1.25rem] text-white">
                    Organization
                    <span className="text-primary"> * </span>
                  </h6>
                  <Select
                    onValueChange={(value) => {
                      setValue('organizationId', value);
                    }}
                    defaultValue={initialData.organizationId}
                  >
                    <SelectTrigger
                      id="custom_select"
                      className="w-full rounded-[4px] border-DEFAULT border-[#e9e9e933] bg-transparent px-8 py-6 text-white hover:border-white"
                    >
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        {organizations?.map((item, i) => (
                          <SelectItem key={`item-${i}`} value={item._id}>
                            {item.name}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="mb-8 w-full">
                <div className="grid w-full items-center gap-1.5">
                  <h6 className="text-[1.25rem] text-white">
                    Event Name
                    <span className="text-primary"> * </span>
                  </h6>
                  <Input
                    className="w-full rounded-[4px] border-DEFAULT border-[#e9e9e933] bg-transparent px-2 py-6 text-white hover:border-white"
                    id="event_name"
                    {...register('name')}
                    // isInvalid={!!errors['name']}
                    // errorMessage={errors['name']?.message}
                  />
                </div>
              </div>
              <div className="mb-8 w-full">
                <div className="grid w-full items-center gap-1.5">
                  <h6 className="text-[1.25rem] text-white">
                    Tagline
                    <span className="text-primary"> * </span>
                  </h6>
                  <Textarea
                    className="mt-1 h-[300px] w-full rounded-[4px] border-DEFAULT border-[#e9e9e933] bg-transparent px-2 py-6 text-white"
                    id="event_name"
                    {...register('tagline')}
                    // isInvalid={!!errors['tagline']}
                    // errorMessage={errors['tagline']?.message}
                  />
                </div>
              </div>
              <div className="mb-8 grid w-full grid-cols-2 gap-4">
                <div className="w-full">
                  <div className="grid w-full items-center gap-1.5">
                    <h6 className="text-[1.25rem] text-white">
                      Event Format
                      <span className="text-primary"> * </span>
                    </h6>
                    <CustomSelect
                      data={event_format_data}
                      onSelect={(value) => setValue('event_format', value)}
                      initialValue={initialData.event_format}
                    />
                  </div>
                </div>
                <div className="w-full">
                  <div className="grid w-full items-center gap-1.5">
                    <h6 className="text-[1.25rem] text-white">
                      Course Type
                      <span className="text-primary"> * </span>
                    </h6>
                    <CustomSelect
                      data={course_type_data}
                      onSelect={(value) => setValue('course_type', value)}
                      initialValue={initialData.course_type}
                    />
                  </div>
                </div>
              </div>
              <div className="mb-8 grid w-full grid-cols-2 gap-4">
                <div className="w-full">
                  <div className="grid w-full items-center gap-1.5">
                    <h6 className="text-[1.25rem] text-white">
                      Seed Type
                      <span className="text-primary"> * </span>
                    </h6>
                    <CustomSelect
                      data={seed_type_data}
                      onSelect={(value) => setValue('seed_type', value)}
                      initialValue={initialData.seed_type}
                    />
                  </div>
                </div>
                <div className="w-full">
                  <div className="grid w-full items-center gap-1.5">
                    <h6 className="text-[1.25rem] text-white">
                      Team Limit
                      <span className="text-primary"> * </span>
                    </h6>
                    <Input
                      className="w-full rounded-[4px] border-DEFAULT border-[#e9e9e933] bg-transparent px-2 py-6 pl-6 text-white hover:border-white"
                      id="event_name"
                      type="number"
                      {...register('team_limit', { min: 0, valueAsNumber: true })}
                      // isInvalid={!!errors['prize_pool']}
                      // errorMessage={errors['prize_pool']?.message}
                    />
                  </div>
                </div>
              </div>
              <div className="mb-8 grid w-full grid-cols-2 gap-4">
                <div className="w-full">
                  <div className="grid w-full items-center gap-1.5">
                    <h6 className="text-[1.25rem] text-white">
                      Start Date
                      <span className="text-primary"> * </span>
                    </h6>
                    <CustomInputDatePicker
                      defaultValue={initialData.start_date}
                      onSelect={(value) => setValue('start_date', value)}
                    />
                  </div>
                </div>
                <div className="w-full">
                  <div className="grid w-full items-center gap-1.5">
                    <h6 className="text-[1.25rem] text-white">
                      End Date
                      <span className="text-primary"> * </span>
                    </h6>
                    <CustomInputDatePicker
                      defaultValue={initialData.end_date}
                      onSelect={(value) => setValue('end_date', value)}
                    />
                  </div>
                </div>
              </div>
              <div className="mb-8 grid w-full grid-cols-2 gap-4">
                <div className="w-full">
                  <div className="grid w-full items-center gap-1.5">
                    <h6 className="text-[1.25rem] text-white">
                      Registration Opens
                      <span className="text-primary"> * </span>
                    </h6>
                    <CustomInputDatePicker
                      onSelect={(value) => setValue('registration_opens_date', value)}
                      defaultValue={initialData.registration_opens_date}
                    />
                  </div>
                </div>
                <div className="w-full">
                  <div className="grid w-full items-center gap-1.5">
                    <h6 className="text-[1.25rem] text-white">
                      Registration Ends
                      <span className="text-primary"> * </span>
                    </h6>
                    <CustomInputDatePicker
                      onSelect={(value) => setValue('registration_ends_date', value)}
                      defaultValue={initialData.registration_ends_date}
                    />
                  </div>
                </div>
              </div>
              <div className="mb-8 grid w-full grid-cols-2 gap-4">
                <div className="w-full">
                  <div className="grid w-full items-center gap-1.5">
                    <h6 className="text-[1.25rem] text-white">
                      Prize Pool
                      <span className="text-primary"> * </span>
                    </h6>
                    <div className="relative w-full">
                      <p className="absolute left-2 top-[0.8rem] text-[1rem] text-[#ffffffb3]">$</p>
                      <Input
                        className="w-full rounded-[4px] border-DEFAULT border-[#e9e9e933] bg-transparent px-2 py-6 pl-6 text-white hover:border-white"
                        id="event_name"
                        type="number"
                        {...register('prize_pool', { min: 0, valueAsNumber: true })}
                        // isInvalid={!!errors['prize_pool']}
                        // errorMessage={errors['prize_pool']?.message}
                      />
                    </div>
                  </div>
                </div>
                <div className="w-full">
                  <div className="grid w-full items-center gap-1.5">
                    <h6 className="text-[1.25rem] text-white">
                      Entry Fee
                      <span className="text-primary ml-1 cursor-pointer text-[1rem]">
                        Link your pay-out method
                      </span>
                      <span className="text-primary"> * </span>
                    </h6>
                    <div className="relative w-full">
                      <p className="absolute left-2 top-[0.8rem] text-[1rem] text-[#ffffffb3]">$</p>
                      <Input
                        className="w-full rounded-[4px] border-DEFAULT border-[#e9e9e933] bg-transparent px-2 py-6 pl-6 text-white hover:border-white"
                        id="event_name"
                        type="number"
                        {...register('entry_fee', { min: 0, valueAsNumber: true })}
                        // isInvalid={!!errors['entry_fee']}
                        // errorMessage={errors['entry_fee']?.message}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-8 grid w-full grid-cols-2 gap-4">
                <div className="w-full">
                  <div className="grid w-full items-center gap-1.5">
                    <h6 className="text-[1.25rem] text-white">
                      Game
                      <span className="text-primary"> * </span>
                    </h6>
                    <CustomSelect
                      initialValue={initialData.game}
                      data={game_data}
                      onSelect={(value) => setValue('game', value)}
                    />
                  </div>
                </div>
                <div className="w-full">
                  <div className="grid w-full items-center gap-1.5">
                    <h6 className="text-[1.25rem] text-white">
                      Platform
                      <span className="text-primary"> * </span>
                    </h6>
                    <CustomSelect
                      initialValue={initialData.platform}
                      data={platform_data}
                      onSelect={(value) => setValue('platform', value)}
                    />
                  </div>
                </div>
              </div>
              <div className="mb-8 grid w-full grid-cols-2 gap-4">
                <div className="w-full">
                  <div className="grid w-full items-center gap-1.5">
                    <h6 className="text-[1.25rem] text-white">
                      Region
                      <span className="text-primary"> * </span>
                    </h6>
                    <CustomSelect
                      initialValue={initialData.region}
                      data={region_data}
                      onSelect={(value) => setValue('region', value)}
                    />
                  </div>
                </div>
                <div className="w-full">
                  <div className="grid w-full items-center gap-1.5">
                    <h6 className="text-[1.25rem] text-white">
                      Time Zone
                      <span className="text-primary"> * </span>
                    </h6>
                    <CustomSelect
                      initialValue={initialData.timezone}
                      data={time_zones_data}
                      onSelect={(value) => setValue('timezone', value)}
                    />
                  </div>
                </div>
              </div>
              <div className="mb-8 grid w-full grid-cols-3 gap-4">
                <div>
                  <div className="mb-10">
                    <p className="text-[1.25rem] font-[500] text-white">Add a Rulebook</p>
                    <h6 className="text-left text-[0.875rem] font-[500] text-[#808080]">
                      Publicly shared (.pdf) and must be accepted by competitors.
                    </h6>
                  </div>
                  <div>
                    <Button
                      className="border-primary/50 hover:bg-primary/20 hover:text-primary w-full bg-transparent uppercase"
                      variant={'outline'}
                      asChild
                    >
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
                  <div className="mb-10">
                    <p className="text-[1.25rem] font-[500] text-white">Add Terms and Conditions</p>
                    <h6 className="text-left text-[0.875rem] font-[500] text-[#808080]">
                      Must be accepted by competitors and is displayed alongside rulebooks.
                    </h6>
                  </div>
                  <div>
                    <Button
                      className="border-primary/50 hover:bg-primary/20 hover:text-primary w-full bg-transparent uppercase"
                      variant={'outline'}
                      asChild
                    >
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
                  <div className="mb-10">
                    <p className="text-[1.25rem] font-[500] text-white">Add Privacy Policy</p>
                    <h6 className="text-left text-[0.875rem] font-[500] text-[#808080]">
                      Must be accepted by competitors and is displayed alongside rulebooks and terms
                      and conditions.
                    </h6>
                  </div>
                  <div>
                    <Button
                      className="border-primary/50 hover:bg-primary/20 hover:text-primary w-full bg-transparent uppercase"
                      variant={'outline'}
                      asChild
                    >
                      <label htmlFor="privacy_policy_upload" className="cursor-pointer">
                        <input
                          type="file"
                          accept="application/pdf"
                          name="privacy_policy_upload"
                          id="privacy_policy_upload"
                          hidden
                          onChange={(e) => {
                            if (e.target.files?.[0])
                              setTerms_privacy_policy_file(e.target.files[0]);
                          }}
                        />
                        <PlusIcon className="mr-2 size-3" />
                        upload
                      </label>
                    </Button>
                  </div>
                </div>
              </div>
              <div className="mb-6">
                <h6 className="text-[1.25rem] text-white">
                  Event Branding
                  <span className="text-primary ml-1 cursor-pointer text-[1rem]">
                    It is highly recommended that each color is different.
                  </span>
                </h6>
                <div className="mt-6 grid w-full grid-cols-3 gap-4">
                  <div>
                    <div className="mb-9">
                      <p className="text-[1rem] font-[500] text-white">Primary</p>
                      <h6 className="text-left text-[0.875rem] font-[500] text-[#808080]">
                        This changes the color of your event card's border, event title, button
                        colors, and content block titles.
                      </h6>
                    </div>
                    <ColorPicker
                      defaultColor={initialData.event_branding_primary_color ?? '#f5851f'}
                      onSelect={(value) => setValue('event_branding_primary_color', value)}
                    />
                  </div>
                  <div>
                    <div className="mb-4">
                      <p className="text-[1rem] font-[500] text-white">Secondary</p>
                      <h6 className="text-left text-[0.875rem] font-[500] text-[#808080]">
                        This changes the color of the event graphic border, text inside content
                        blocks, text inside event cards, text inside buttons, and text inside
                        drop-down menus.
                      </h6>
                    </div>
                    <ColorPicker
                      defaultColor={initialData.event_branding_secondary_color ?? '#ab5a15'}
                      onSelect={(value) => setValue('event_branding_secondary_color', value)}
                    />
                  </div>
                  <div>
                    <div className="mb-4">
                      <p className="text-[1rem] font-[500] text-white">Tertiary</p>
                      <h6 className="text-left text-[0.875rem] font-[500] text-[#808080]">
                        This changes the background of event pages, the background of event cards,
                        and the background of drop-down menus.
                      </h6>
                    </div>
                    <ColorPicker
                      defaultColor={initialData.event_branding_tertiary_color ?? '#f5851f'}
                      onSelect={(value) => setValue('event_branding_tertiary_color', value)}
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-start">
                <Button disabled={isSubmitting} type="submit" className="bg-primary uppercase">
                  save
                </Button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
