import { Item } from "@/types/about";
import Image from "next/image";

type Props = {
  title: string;
  list: Item[];
};

export default function ReusableList({ title, list }: Props) {
  return (
    <div className="w-full grid grid-cols-2 max-lg:grid-cols-1 gap-12 text-neutral-900 ">
      <div className="flex items-start justify-center max-lg:justify-start">
        <p className="text-center text-4xl font-extrabold">{title}</p>
      </div>
      <div className="flex flex-col items-start justify-center gap-y-8">
        {list.map((item, index) => (
          <div
            key={index}
            className="w-full flex flex-row items-start justify-start gap-x-4"
          >
            <Image
              src="/images/icon-bullet-point.svg"
              width={32}
              height={32}
              alt="bullet point"
            />
            <div className="flex flex-col items-start justify-center gap-y-2">
              <p className="text-xl font-bold">{item.heading}</p>
              <p className="text-lg">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
