import Link from "next/link";
import React from "react";

import { resolveReference } from "../../../lib/routing";
import { Action, Fact, Nav_NavigationItem } from "../../../models/content-types";

type Props = {
  reference: Fact | Action | Nav_NavigationItem;
};

export const CTAButton = (props: Props) => {
  const factUrl =
    props.reference.elements.reference__external_uri.value ||
      props.reference.elements.reference__content__item_link.linkedItems.length > 0
      ? resolveReference(props.reference)
      : null;
  return (
    <Link href={factUrl ?? ""}>
      <button
        className="bg-mainButtonColor bottom-0 group left-0 hover:bg-mainHoverColor text-white font-bold mt-10 py-2 px-4 rounded"
      >
        <span>{props.reference.elements.reference__label.value}</span>
      </button>
    </Link>
  );
};
