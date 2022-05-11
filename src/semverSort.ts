export function semverSort(unsortedVersions: string[]): string[] {
  return unsortedVersions.sort((a: string, b: string): number => {
    const aVersions: string[] = a.split(".");
    const bVersions: string[] = b.split(".");
    for (let i = 0; i < bVersions.length; i++) {
      const an = ~~aVersions[i];
      const bn = ~~bVersions[i];
      if (an > bn) return 1;
      if (an < bn) return -1;
    }
    return aVersions.length - bVersions.length;
  });
}
