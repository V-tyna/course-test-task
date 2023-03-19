export const validateLink = async (link: string): Promise<boolean>  => {
  try {
    const response = await fetch(link);
    if (response.ok) {
      return true;
    }
    return false;
  } catch (e) {
    return false;
  }
}
