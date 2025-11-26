import type { BreathtakingAsset } from "../AssetTypes";

import Action from "./action.mdx";
import ClarionHeights from "./clarion-heights.mdx";
import ZetaCity from "./zeta-city.mdx";

const supportData: BreathtakingAsset[] = [
  {
    name: "A.C.T.I.O.N.",
    slug: "action",
    element: <Action />,
  },
  {
    name: "Clarion Heights Academy and Miller Mountain Corrections",
    slug: "clarion-heights",
    element: <ClarionHeights />,
  },
  {
    name: "Zeta City",
    slug: "zeta-city",
    element: <ZetaCity />,
  },
];

export default supportData;
