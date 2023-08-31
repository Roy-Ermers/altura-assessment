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
  const pending = ref(false);
  const statusUpdates: Ref<StatusUpdate[] | undefined> = ref();
  const productStatus: Ref<ProductStatus | undefined> = ref();

  const refetch = async (): Promise<void> => {
    pending.value = true;

    const API_ENDPOINT = "https://strapi.altura.io/status" as const;
    const response: any = await $fetch(API_ENDPOINT);
    
    statusUpdates.value = response.statusUpdates;
    productStatus.value = response.productStatus; 

    pending.value = false;
  };


  return { productStatus, statusUpdates, pending, refetch } as useStatusReturn;
}
