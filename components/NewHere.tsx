import Link from "next/link";

type Props = {
  url: string;
  text: string;
  linkText: string;
};

export default function NewHere({ url, text, linkText }: Props) {
  return (
    <div className="text-center font-semibold">
      <p className="text-neutral-900">
        {text}{" "}
        <Link className="text-neutralIndigo" href={url}>
          {linkText}
        </Link>
      </p>
    </div>
  );
}
