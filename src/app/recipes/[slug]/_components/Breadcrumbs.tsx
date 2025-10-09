import { prisma } from "@/lib/prisma";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

type Props = {
  title: string | undefined;
  slug: string;
};

export default async function Breadcrumbs({ title, slug }: Props) {
  return (
    <div className="w-full">
      <Breadcrumb>
        <BreadcrumbList className="text-base font-medium">
          <BreadcrumbItem>
            <BreadcrumbLink href="/recipes">Recipes</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>/</BreadcrumbSeparator>
          <BreadcrumbItem className="text-neutral-900">
            <BreadcrumbLink href={`/recipes/${slug}`}>{title}</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}
