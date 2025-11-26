export interface BreathtakingAsset {
  name: string;
  slug: string;
  group?: string;
  element: React.ReactNode;
}

export interface BreathtakingAssetGroup {
  name: string;
  slug: string;
  description: string;
}

export interface BreathtakingAssetPackage {
  assets: BreathtakingAsset[];
  groups: BreathtakingAssetGroup[];
}
