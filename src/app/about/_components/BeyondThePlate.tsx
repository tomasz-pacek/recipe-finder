import Image from "next/image";

export default function BeyondThePlate() {
  return (
    <div className="w-full grid grid-cols-3 max-lg:grid-cols-1 gap-12 text-neutral-900">
      <div className="flex flex-col items-start justify-center gap-y-4">
        <h2 className="font-extrabold text-5xl">Beyond the plate</h2>
        <p className="text-pretty text-lg">
          We believe food is a catalyst for community and well-being. By sharing
          approachable recipes, we hope to:
        </p>
        <ul className="list-disc ml-6 text-lg text-pretty">
          <li>Encourage family dinners and social cooking.</li>
          <li>Reduce reliance on single-use packaging and delivery waste.</li>
          <li>Spark curiosity about seasonal produce and local agriculture.</li>
        </ul>
      </div>
      <Image
        src="/images/image-about-beyond-the-plate-large.webp"
        width={1488}
        height={800}
        alt="family in kitchen with vegetables in hand"
        className="rounded-2xl col-span-2"
      />
    </div>
  );
}
