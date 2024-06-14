import React from 'react';

export default function Notifications() {
  return (
    <div className="py-[32px]">
      <div className="follows mb-[16px] rounded-lg border border-solid  border-gray-800 py-[10px]">
        <div className="headEvent flex px-[32px] pb-2">
          <h2 className="text-[24px] text-orange-400">Event</h2>
        </div>
        <hr className="border-gray-800" />
        <div className="py-[16px] pl-[32px]">followed you.</div>
      </div>
      <div className="likes mb-[16px] rounded-lg border border-solid  border-gray-800 py-[10px]">
        <div className="headEvent flex px-[32px] pb-2">
          <h2 className="text-[24px] text-orange-400">Likes</h2>
        </div>
        <hr className="border-gray-800" />
        <div className="pl-[32px] pt-[16px] text-center max-sm:text-[16px] sm:text-[20px] md:text-[24px]">
          NO POST
        </div>
      </div>
      <div className="sahres mb-[16px] rounded-lg border border-solid  border-gray-800 py-[10px]">
        <div className="headEvent flex px-[32px] pb-2">
          <h2 className="text-[24px] text-orange-400">Shares</h2>
        </div>
        <hr className="border-gray-800" />
        <div className="pl-[32px] pt-[16px] text-center max-sm:text-[16px] sm:text-[20px] md:text-[24px]">
          NO POST
        </div>
      </div>
      <div className="tagged mb-[16px] rounded-lg border border-solid  border-gray-800 py-[10px]">
        <div className="headEvent flex px-[32px] pb-2">
          <h2 className="text-[24px] text-orange-400">Tagged</h2>
        </div>
        <hr className="border-gray-800" />
        <button className="w-full pl-[32px] pt-[16px] text-[16px] hover:text-[#F4831F]">
          2 mentioned you in a post.
        </button>
      </div>
      <div className="reply mb-[16px] rounded-lg border border-solid  border-gray-800 py-[10px]">
        <div className="headEvent flex px-[32px] pb-2">
          <h2 className="text-[24px] text-orange-400">Reply</h2>
        </div>
        <hr className="border-gray-800" />
        <div className="pl-[32px] pt-[16px] text-center max-sm:text-[16px] sm:text-[20px] md:text-[24px]">
          NO POST
        </div>
      </div>
    </div>
  );
}
