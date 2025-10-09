import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-screen mt-24 border-t border-neutral-300">
      <div className="container mx-auto flex flex-row items-center justify-between py-12 max-md:flex-col-reverse gap-y-8">
        <p>Made with &#x2764;&#xFE0F; and &#x1F951;</p>
        <div className="flex flex-row items-center justify-center gap-x-6">
          <Image
            src="/images/icon-instagram.svg"
            width={20}
            height={22}
            alt="instagram icon"
          />
          <Image
            src="/images/icon-bluesky.svg"
            width={20}
            height={22}
            alt="bluesky icon"
          />
          <Image
            src="/images/icon-tiktok.svg"
            width={20}
            height={22}
            alt="tiktok icon"
          />
        </div>
      </div>
    </footer>
  );
}
