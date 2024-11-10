import { POST_QUERYResult } from "@/sanity/types";

type CategoriesProps = {
  categories: NonNullable<POST_QUERYResult>["categories"];
};

export function Categories({ categories }: CategoriesProps) {
  return categories.map((category) => (
    <span
      key={category._id}
      className="whitespace-nowrap rounded-full bg-cyan-50 px-2 py-1 text-sm font-semibold leading-none text-cyan-700"
    >
      {category.title}
    </span>
  ));
}
