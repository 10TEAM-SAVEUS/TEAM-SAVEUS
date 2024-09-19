export async function getFile(download_url?: string) {
  if (download_url) {
    try {
      const fileCodes = await fetch(download_url);

      return await fileCodes.text();
    } catch (e) {
      console.log(e);
      return null;
    }
  }
  return null;
}
