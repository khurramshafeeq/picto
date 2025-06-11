import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

export default function Page() {
  const portfolioData = [
    {
      id: 1,
      imageUrl: "portfolio-1.jpg",
      category: "UI-UX DESIGN",
      title: "Product Admin Dashboard",
      description:
        "Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.",
      link: "#",
    },
    {
      id: 2,
      imageUrl: "portfolio-2.jpg",
      category: "UI-UX DESIGN",
      title: "Product Admin Dashboard",
      description:
        "Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.",
      link: "#",
    },
    {
      id: 3,
      imageUrl: "portfolio-3.jpg",
      category: "UI-UX DESIGN",
      title: "Product Admin Dashboard",
      description:
        "Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.",
      link: "#",
    },
    {
      id: 4,
      imageUrl: "portfolio-4.jpg",
      category: "UI-UX DESIGN",
      title: "Product Admin Dashboard",
      description:
        "Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.",
      link: "#",
    },
    {
      id: 5,
      imageUrl: "portfolio-5.jpg",
      category: "UI-UX DESIGN",
      title: "Product Admin Dashboard",
      description:
        "Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.",
      link: "#",
    },
    {
      id: 6,
      imageUrl: "portfolio-6.jpg",
      category: "UI-UX DESIGN",
      title: "Product Admin Dashboard",
      description:
        "Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.",
      link: "#",
    },
  ];
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-16">
        {portfolioData.map((portfolio) => (
          <div
            key={portfolio.id}
            className="bg-white rounded-lg border border-solid border-[#E6E8EB] overflow-hidden "
          >
            <div className="relative h-[248px]">
              <Image
                src={`portfolio/${portfolio.imageUrl}`}
                fill
                className="object-cover"
                alt="blog"
              />
            </div>
            <div className="p-8">
              <div className="text-gray-400 text-xs font-medium">
                {portfolio.category}
              </div>
              <div className="text-gray-900 text-lg font-semibold mb-1">
                {portfolio.title}
              </div>
              <div className="text-gray-600 text-sm mt-3">
                {portfolio.description}
              </div>

              <Link
                href={`/${portfolio.link}`}
                className="p-button p-button-outlined mt-5 text-primary-500 font-bold no-underline"
              >
                Case Study
                <ArrowRightIcon className="size-6 text-primary-500 ml-3" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
