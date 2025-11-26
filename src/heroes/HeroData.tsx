import type {
  BreathtakingAsset,
  BreathtakingAssetGroup,
  BreathtakingAssetPackage,
} from "../AssetTypes";
import Radiance from "./radiance.mdx";

const heroAssets: BreathtakingAsset[] = [
  {
    name: "Radiance",
    slug: "radiance",
    element: <Radiance />,
  },
];

const heroGroups: BreathtakingAssetGroup[] = [];

const heroPackage = {
  assets: heroAssets,
  groups: heroGroups,
};

export default heroPackage as BreathtakingAssetPackage;
