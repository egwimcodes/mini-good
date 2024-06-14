import { useCloudStorage } from "@vkruglikov/react-telegram-web-app";

export async function useCloudStorageCustomHook() {
  const { getItem } = useCloudStorage();

  return { getItem };
}