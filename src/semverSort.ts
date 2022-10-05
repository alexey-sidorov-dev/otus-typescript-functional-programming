export function semverSort(unsortedVersions: string[]): string[] {
  const varsions = JSON.parse(JSON.stringify(unsortedVersions));

  return varsions.sort((a: string, b: string): number => {
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
