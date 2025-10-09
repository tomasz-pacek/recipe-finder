import CookSmarter from "../../../components/CookSmarter";
import AboutHero from "./_components/AboutHero";
import BeyondThePlate from "./_components/BeyondThePlate";
import ReusableList from "./_components/ReusableList";
import { list1, list2 } from "@/constants/about-lists";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4">
      <AboutHero />
      <hr className="my-24"></hr>
      <ReusableList title="Why we exist" list={list1} />
      <hr className="my-12" />
      <ReusableList title="Our food philosophy" list={list2} />
      <hr className="my-12" />
      <BeyondThePlate />
      <CookSmarter />
    </div>
  );
}
