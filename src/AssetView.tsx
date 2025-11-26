import { useParams } from "react-router";
import type { BreathtakingAssetPackage } from "./AssetTypes";

interface AssetViewProps {
  assetPackage: BreathtakingAssetPackage;
}

function AssetView(props: AssetViewProps) {
  const { assetPackage } = props;
  const { asset } = useParams();
  const assetLc = asset?.toLowerCase() ?? "";

  const foundAsset = assetPackage.assets.find(
    (assetData) => assetData.slug.toLowerCase() == assetLc
  );

  if (!foundAsset) {
    return (
      <>
        <h1>Not Found</h1>
      </>
    );
  }

  return foundAsset.element;
}

export default AssetView;
