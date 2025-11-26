import { Link } from "react-router";
import type { BreathtakingAssetPackage } from "./AssetTypes";

interface AssetListProps {
  prefix: string;
  assetPackage: BreathtakingAssetPackage;
  children?: React.ReactNode;
}

function AssetList(props: AssetListProps) {
  const { prefix, assetPackage, children } = props;

  return (
    <>
      {children}
      <ul>
        {assetPackage.assets.map((asset) => (
          <li>
            <Link to={`/${prefix}/${asset.slug}`}>{asset.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default AssetList;
