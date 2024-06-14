'use client';
import { Avatar, AvatarIcon } from '@ui/components/nextui/avatar';
import { Button } from '@ui/components/nextui/button';
import { Select, SelectItem } from '@ui/components/nextui/select';
import { Tab, Tabs } from '@ui/components/nextui/tabs';
import React, { useCallback } from 'react';

import rehypeParse from 'rehype-parse';
import rehypeRemark from 'rehype-remark';
import rehypeStringify from 'rehype-stringify';
import { remark } from 'remark';
import remarkGfm from 'remark-gfm';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import remarkStringify from 'remark-stringify';

import RichTextInput from './RichTextInput';

import RightBar from './rightbar';
import { ChangeIcon, HeartIcon, MessageIcon } from '@/components/icons/icons';

const htmlToMarkdown = (htmlText: string) => {
  const file = remark()
    .use(rehypeParse, { emitParseErrors: true, duplicateAttribute: false })
    .use(rehypeRemark)
    .use(remarkStringify)
    .use(remarkGfm)
    .processSync(htmlText);
  return String(file);
};
const markdownToHtml = (markdownText: string) => {
  const file = remark()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeStringify)
    .processSync(markdownText);
  return String(file);
};

export default function Home() {
  const [content, setContent] = React.useState('');
  const [markContent, setMarkContent] = React.useState('');
  const [mockData, setMockData] = React.useState([
    {
      name: 'Jon Appleseed',
      content: 'This platform is fucking dogshit',
      avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
    },
    {
      name: '2K REPTILES GAMING',
      content: 'hlo1',
      avatar: '',
    },
    {
      name: 'Jon Appleseed',
      content: 'This platform is fucking dogshit',
      avatar: '',
    },
    {
      name: 'Jon Appleseed',
      content: 'This platform is fucking dogshit',
      avatar: '',
    },
  ]);

  const onContentChange = useCallback(
    (newContent: string) => {
      setContent(newContent);
      setMarkContent(htmlToMarkdown(newContent));
    },
    [setContent, setMarkContent]
  );

  const onPost = useCallback(() => {
    const temp = mockData.reverse();
    temp.push({
      name: 'Jon',
      avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
      content: markContent,
    });
    temp.reverse();
    setMockData([...temp]);
  }, [mockData, markContent]);
  return (
    <>
      {/* md */}
      <div className="max-sm:hidden sm:hidden md:block">
        <div className="grid grid-cols-12">
          <div className="col-span-9 border-x border-x-gray-500">
            <div className="grid grid-cols-12 space-x-0">
              <div className="col-span-12 flex h-[74px] items-start justify-between p-4">
                <h4
                  className="text-[34px] leading-[42px] md:hidden 2xl:block"
                  style={{ fontFamily: 'industry' }}
                >
                  HOME
                </h4>
                <div className="flex space-x-4">
                  <Select
                    classNames={{
                      mainWrapper: 'text-[20px] xl:min-w-[180px] md:min-w-[130px]',
                      trigger: 'bg-foreground px-4 py-[6px] rounded',
                      listboxWrapper: 'max-h-[400px]',
                      value: '!text-white font-bold uppercase md:text-[10px] xl:text-[14px]',
                    }}
                    placeholder="Change Game"
                  >
                    <SelectItem key={1}>rainbow six siege</SelectItem>
                  </Select>
                  <Select
                    classNames={{
                      mainWrapper: 'text-[20px] xl:min-w-[180px] md:min-w-[130px]',
                      trigger: 'bg-foreground px-4 py-[6px] rounded',
                      listboxWrapper: 'max-h-[400px]',
                      value: '!text-white font-bold uppercase md:text-[10px] xl:text-[14px]',
                    }}
                    placeholder="Change Region"
                  >
                    <SelectItem key={1}>North America</SelectItem>
                    <SelectItem key={2}>Latin America</SelectItem>
                    <SelectItem key={3}>Europe</SelectItem>
                  </Select>
                  <Select
                    classNames={{
                      mainWrapper: 'text-[20px] xl:min-w-[180px] md:min-w-[130px]',
                      trigger: 'bg-foreground px-4 py-[6px] rounded',
                      listboxWrapper: 'max-h-[400px]',
                      value: '!text-white font-bold uppercase md:text-[10px] xl:text-[14px]',
                    }}
                    placeholder="Change Platform"
                  >
                    <SelectItem key={1}>Xbox</SelectItem>
                    <SelectItem key={2}>PC</SelectItem>
                    <SelectItem key={3}>PS4</SelectItem>
                    <SelectItem key={4}>Cross-Platform</SelectItem>
                  </Select>
                </div>
              </div>
            </div>
            <div className="spacing-x-0 grid grid-cols-12">
              <div className="col-span-12">
                <Tabs
                  key="photos"
                  variant="underlined"
                  aria-label="Tabs variants"
                  classNames={{
                    tab: 'h-12',
                    tabList: 'text-center',
                  }}
                  fullWidth
                >
                  <Tab key="recommended" title="RECOMMENDED">
                    <div className="relative px-0 py-2">
                      <div className="tweet-container">
                        <RichTextInput
                          content={content}
                          className="tweet-textedit"
                          placeholder="What's new?"
                          handleContentChange={onContentChange}
                        />
                        <div className="absolute bottom-4 right-6">
                          <Button
                            className="bg-foreground h-10 rounded-2xl text-white"
                            onClick={onPost}
                          >
                            Post
                          </Button>
                        </div>
                      </div>
                    </div>
                    {mockData.map((item, i) => (
                      <div key={i} className="flex border-t  border-t-gray-500 p-[16px]">
                        <div className="pr-[16px]">
                          <Avatar
                            src={item.avatar}
                            size="lg"
                            icon={<AvatarIcon />}
                            classNames={{
                              base: 'bg-gradient-to-br from-[#FFB457] to-[#FF705B]',
                              icon: 'text-black/80',
                            }}
                          />
                        </div>
                        <div className="flex-1">
                          <h4 className="name text-[24px]">{item.name}</h4>
                          <p className="text-[#808080]">{item.name}</p>
                          <div
                            className="html-wrapper"
                            style={{
                              color: 'white',
                              fontSize: 16,
                            }}
                            dangerouslySetInnerHTML={{
                              __html: markdownToHtml(item.content),
                            }}
                          ></div>
                          <br />
                          <div className="actionGroup flex space-x-6">
                            <button className="flex items-center">
                              <MessageIcon />
                              &nbsp;&nbsp;<span className="text-white">{0}</span>
                            </button>
                            <button className="flex items-center">
                              <ChangeIcon />
                              &nbsp;&nbsp;<span className="text-white">{0}</span>
                            </button>
                            <button className="flex items-center">
                              <HeartIcon />
                              &nbsp;&nbsp;<span className="text-white">{0}</span>
                            </button>
                            <button className="flex items-center">
                              <ChangeIcon />
                              &nbsp;&nbsp;<span className="text-white">{0}</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </Tab>
                  <Tab key="following" title="FOLLOWING">
                    <div className="relative px-0 py-2">
                      <div className="tweet-container">
                        <RichTextInput
                          content={content}
                          className="tweet-textedit"
                          placeholder="What's new?"
                          handleContentChange={onContentChange}
                        />
                        <div className="absolute bottom-4 right-6">
                          <Button
                            className="bg-foreground h-10 rounded-2xl text-white"
                            onClick={onPost}
                          >
                            Post
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Tab>
                </Tabs>
              </div>
            </div>
          </div>
          <div className="col-span-3 p-[20px]">
            <RightBar />
          </div>
        </div>
      </div>
      {/* max-sm */}
      <div className="max-sm:block max-sm:px-2 sm:block md:hidden">
        <RightBar />
        <br />
        <div className="space-y-2">
          <Select
            classNames={{
              mainWrapper: 'min-w-[180px]',
              trigger: 'bg-foreground px-4 py-[6px] rounded',
              listboxWrapper: 'max-h-[400px]',
              value: '!text-white font-bold uppercase',
            }}
            placeholder="Change Game"
          >
            <SelectItem key={1}>rainbow six siege</SelectItem>
          </Select>
          <Select
            classNames={{
              mainWrapper: 'min-w-[180px]',
              trigger: 'bg-foreground px-4 py-[6px] rounded',
              listboxWrapper: 'max-h-[400px]',
              value: '!text-white font-bold uppercase',
            }}
            placeholder="Change Region"
          >
            <SelectItem key={1}>North America</SelectItem>
            <SelectItem key={2}>Latin America</SelectItem>
            <SelectItem key={3}>Europe</SelectItem>
          </Select>
          <Select
            classNames={{
              mainWrapper: 'min-w-[200px]',
              trigger: 'bg-foreground px-4 py-[6px] rounded',
              listboxWrapper: 'max-h-[400px]',
              value: '!text-white font-bold uppercase',
            }}
            placeholder="Change Platform"
          >
            <SelectItem key={1}>Xbox</SelectItem>
            <SelectItem key={2}>PC</SelectItem>
            <SelectItem key={3}>PS4</SelectItem>
            <SelectItem key={4}>Cross-Platform</SelectItem>
          </Select>
        </div>
        <div className="spacing-x-0 grid grid-cols-12">
          <div className="col-span-12">
            <Tabs
              key="photos"
              variant="underlined"
              aria-label="Tabs variants"
              classNames={{
                tab: 'h-12',
                tabList: 'text-center',
              }}
              fullWidth
            >
              <Tab key="recommended" title="RECOMMENDED">
                <div className="relative px-0 py-2">
                  <div className="tweet-container">
                    <RichTextInput
                      content={content}
                      className="tweet-textedit"
                      placeholder="What's new?"
                      handleContentChange={onContentChange}
                    />
                    <div className="absolute bottom-4 right-6">
                      <Button
                        className="bg-foreground h-10 rounded-2xl text-white"
                        onClick={onPost}
                      >
                        Post
                      </Button>
                    </div>
                  </div>
                </div>
                {mockData.map((item, i) => (
                  <div key={i} className="flex border-t  border-t-gray-500 p-[16px]">
                    <div className="pr-[16px]">
                      <Avatar
                        src={item.avatar}
                        size="lg"
                        icon={<AvatarIcon />}
                        classNames={{
                          base: 'bg-gradient-to-br from-[#FFB457] to-[#FF705B]',
                          icon: 'text-black/80',
                        }}
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="name max-sm:text-[16px] sm:text-[16px] md:text-[24px]">
                        {item.name}
                      </h4>
                      <p className="text-[#808080] max-sm:text-[14px] sm:text-[14px] md:text-[22px]">
                        {item.name}
                      </p>
                      <div
                        className="html-wrapper text-white max-sm:text-[12px] sm:text-[12px] md:text-[16px]"
                        dangerouslySetInnerHTML={{
                          __html: markdownToHtml(item.content),
                        }}
                      ></div>
                      <br />
                      <div className="actionGroup flex space-x-6">
                        <button className="flex items-center">
                          <MessageIcon />
                          &nbsp;&nbsp;<span className="text-white">{0}</span>
                        </button>
                        <button className="flex items-center">
                          <ChangeIcon />
                          &nbsp;&nbsp;<span className="text-white">{0}</span>
                        </button>
                        <button className="flex items-center">
                          <HeartIcon />
                          &nbsp;&nbsp;<span className="text-white">{0}</span>
                        </button>
                        <button className="flex items-center">
                          <ChangeIcon />
                          &nbsp;&nbsp;<span className="text-white">{0}</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </Tab>
              <Tab key="following" title="FOLLOWING">
                <div className="relative px-0 py-2">
                  <div className="tweet-container">
                    <RichTextInput
                      content={content}
                      className="tweet-textedit"
                      placeholder="What's new?"
                      handleContentChange={onContentChange}
                    />
                    <div className="absolute bottom-4 right-6">
                      <Button
                        className="bg-foreground h-10 rounded-2xl text-white"
                        onClick={onPost}
                      >
                        Post
                      </Button>
                    </div>
                  </div>
                </div>
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
}
