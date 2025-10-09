import Image from "next/image";

export default function Hero() {
  return (
    <div className="my-16 bg-white p-3 rounded-2xl z-10">
      <Image
        src="/images/image-home-hero-large.webp"
        width={2384}
        height={1060}
        alt="hero large picture"
        className="rounded-xl"
      />
    </div>
  );
}
