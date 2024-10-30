"use client";

import { ButtonPrimary } from "@/components/Button";
import Image from "next/image";
import Link from "next/link";
import { BodyText } from "@/components/Text";

type TJobListProps = {
  position_name: string;
  division: string;
  employment_type: string;
  area: string;
  url: string;
};

const JobListItem = ({
  position_name,
  division,
  employment_type,
  area,
  url,
}: TJobListProps) => {
  return (
    <div className="pt-10 pb-20 font-inter text-12 leading-[20px] border-t border-gray-cloud text-black grid grid-cols-3">
      <div className="col-span-2 flex flex-col gap-16 mobile-min:gap-32">
        <div className="font-supplymono text-sm mobile-min:text-xl lg:h-[70px] lg:text-clip lg:text-ellipsis flex uppercase">
          {position_name}
        </div>
        <div className="flex flex-col items-start mobile-min:grid mobile-min:grid-cols-3">
          <div className="flex gap-10 items-center">
            <Image
              src="/images/icon/file_user_fill.svg"
              width={12}
              height={13}
              alt="file_user_fill"
            />
            <BodyText type="body3">{division}</BodyText>
          </div>
          <div className="flex gap-10 items-center">
            <Image
              src="/images/icon/date_solid.svg"
              width={14}
              height={11}
              alt="date_solid"
            />
            <BodyText type="body3">{employment_type}</BodyText>
          </div>
          <div className="flex gap-10 items-center">
            <Image
              src="/images/icon/place_icon.svg"
              width={16}
              height={24}
              alt="place_icon"
            />
            <BodyText type="body3">{area}</BodyText>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-end">
        <Link target="_blank" href={url || ""}>
          <ButtonPrimary className="uppercase">Apply</ButtonPrimary>
        </Link>
      </div>
    </div>
  );
};

export default JobListItem;
