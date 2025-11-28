import { Link } from "react-router";
import type {
  BreathtakingAsset,
  BreathtakingAssetGroup,
  BreathtakingAssetPackage,
} from "./AssetTypes";
import { groupBy } from "ramda";
import { useMemo } from "react";

interface AssetListProps {
  prefix: string;
  assetPackage: BreathtakingAssetPackage;
  children?: React.ReactNode;
}

// Only return the asset's group if it exists and also exists in the list of groups
const assetIsInGroups = (groups: BreathtakingAssetGroup[]) => {
  const groupSlugs = groups.map((group) => group.slug);
  return (asset: BreathtakingAsset): string => {
    if (!asset.group) {
      return "";
    } else if (!groupSlugs.includes(asset.group)) {
      return "";
    } else {
      return asset.group;
    }
  };
};

const NULL_GROUP: BreathtakingAssetGroup = {
  slug: "",
  name: "",
  description: "",
};

function AssetList(props: AssetListProps) {
  const { prefix, assetPackage, children } = props;

  const groupedAssets = useMemo(
    () => groupBy(assetIsInGroups(assetPackage.groups), assetPackage.assets),
    [assetPackage.assets, assetPackage.groups]
  );

  return (
    <>
      {children}
      {[NULL_GROUP, ...assetPackage.groups].map((group) => (
        <>
          {group.name && <h1>{group.name}</h1>}
          {group.description && <p>{group.description}</p>}
          {groupedAssets[group.slug] && (
            <ul>
              {groupedAssets[group.slug]?.map((asset) => (
                <li>
                  <Link to={`/${prefix}/${asset.slug}`}>{asset.name}</Link>
                </li>
              ))}
            </ul>
          )}
        </>
      ))}
    </>
  );
}

export default AssetList;
