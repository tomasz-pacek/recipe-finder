import Image from "next/image";

export default function BuiltForRealLife() {
  return (
    <div className="w-screen">
      <div className="container mx-auto flex flex-row items-center justify-between gap-8 max-lg:flex-col">
        {/* TEXT SECTION */}
        <div className="flex flex-col text-neutral-900 items-start justify-center w-1/2 space-y-4 max-lg:w-full">
          <h2 className="font-extrabold text-4xl">Built for real life</h2>
          <p className="text-lg text-pretty">
            Cooking shouldn’t be complicated. These recipes come in under{" "}
            <b>30 minutes</b> of active time, fit busy schedules, and taste good
            enough to repeat.{" "}
          </p>
          <p className="text-lg text-pretty">
            Whether you’re new to the kitchen or just need fresh ideas, we’ve
            got you covered.
          </p>
        </div>
        {/* IMAGE */}
        <div className="w-1/2 max-lg:w-full">
          <Image
            src="/images/image-home-real-life-large.webp"
            width={1270}
            height={900}
            alt="woman cutting salad on board"
            className="rounded-xl"
          />
        </div>
      </div>
    </div>
  );
}
