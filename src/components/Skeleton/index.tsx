export const SkeletonTeamItem = () => (
  <div
    role="status"
    className="w-full animate-pulse border border-gray-200 dark:border-gray-400 rounded-[12px] overflow-hidden"
  >
    <div className="p-12">
      <div className="flex items-center">
        <div className="w-[86px] h-[86px] bg-gray-200 dark:bg-gray-400 shrink-0"></div>
        <div className="w-full pl-12">
          <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-400 w-[50%] mb-12"></div>
          <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-400 w-[70%]"></div>
        </div>
      </div>
    </div>
  </div>
);
