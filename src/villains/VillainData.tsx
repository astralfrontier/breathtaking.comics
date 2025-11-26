import type {
  BreathtakingAsset,
  BreathtakingAssetGroup,
  BreathtakingAssetPackage,
} from "../AssetTypes";
import Madhesive from "./madhesive.mdx";

const villainAssets: BreathtakingAsset[] = [
  {
    name: "Madhesive",
    slug: "madhesive",
    element: <Madhesive />,
  },
];

const villainGroups: BreathtakingAssetGroup[] = [];

const villainPackage = {
  assets: villainAssets,
  groups: villainGroups,
};

export default villainPackage as BreathtakingAssetPackage;
