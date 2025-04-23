import Image from "next/image"
import Link from "next/link";
import { FC } from "react";

import { StandaloneSmartLinkButton } from "../shared/StandaloneSmartLinkButton";

type Props = Readonly<{
  imageUrl: string;
  title: string;
  detailUrl: string;
  price: number | null;
  category: string,
  itemId?: string;
}>;

export const ProductItem: FC<Props> = props => (
  <li className="min-w-full m-0 p-0 relative rounded-lg shadow hover:shadow-xl transition-shadow border border-gray-200 cursor-pointer min-h-full">
    <Link
      href={props.detailUrl}
      className="group no-underline p-0 m-0"
    >
      <StandaloneSmartLinkButton itemId={props.itemId} />

      <div className="flex flex-col gap-2">
        <h5 className="px-4 pt-2 mt-2 text-center text-xl  tracking-wider font-semibold text-gray-900 line-clamp-1">{props.title}</h5>
        <p className="m-0 text-center text-gray-500 text-base not-prose">{props.category}</p>
        <figure className="w-full relative m-0 h-40 not-prose">
          <Image
            src={props.imageUrl}
            alt={props.title}
            fill
            sizes="(max-width: 635px) 100vw, (max-width: 1534px) 50vw, 25vw"
            className="object-contain h-full w-full m-0 p-0 rounded-t-lg"
          />
        </figure>
        {props.price && <p className="m-0 text-center text-xl prose font-normal pb-2">{`${props.price}€`}</p>}
        <button className="group-hover:bg-mainColorHover bg-mainButtonColor text-white block ml-auto w-fit mb-3 mr-4 font-semibold line-clamp-6 hover:bg-mainHoverColor border py-2 px-4 rounded">Detail</button>
      </div>
    </Link>
  </li>
)

ProductItem.displayName = "ListItem";
