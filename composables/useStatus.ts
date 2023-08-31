interface useStatusReturn {
  /**
   * The status of the product.
   */
  productStatus: Ref<ProductStatus>;
  /**
   * The status updates.
   */
  statusUpdates: Ref<StatusUpdate[]>;

  /**
   * Indicates whether the status is currently being fetched.
   * true on first load and when refetching.
   */
  pending: Ref<boolean>;

  /**
   * Fetches the status again.
   * updates productStatus and statusUpdates.
   */
  refetch: () => Promise<void>;
}
export default function useStatus(): useStatusReturn {
  // use the following variables:
  const API_ENDPOINT = "https://strapi.altura.io/status" as const;

  // TODO: implement this function using the $fetch function from nuxt.

  return {} as useStatusReturn;
}
