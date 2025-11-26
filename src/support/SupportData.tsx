import type {
  BreathtakingAsset,
  BreathtakingAssetGroup,
  BreathtakingAssetPackage,
} from "../AssetTypes";

import Action from "./action.mdx";
import ClarionHeights from "./clarion-heights.mdx";
import ZetaCity from "./zeta-city.mdx";

const supportAssets: BreathtakingAsset[] = [
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

const supportGroups: BreathtakingAssetGroup[] = [];

const supportPackage = {
  assets: supportAssets,
  groups: supportGroups,
};

export default supportPackage as BreathtakingAssetPackage;
