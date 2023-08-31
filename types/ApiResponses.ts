interface ProductStatus {
  /**
   * The id of the product.
   */
  id: number;

  /**
   * The name of the product.
   */
  name: string;

  /**
   * The status of the product.
   * "Operational" if the product is working as expected.
   * "AvailabilityIssues" if the product is experiencing some availability issues.
   * "Offline" if the product is unavailable.
   */
  status: "Operational" | "AvailabilityIssues" | "Offline";

  /**
   * This contains subproducts in this product.
   * For example, you have google drive, and a subproduct could be google docs.
   */
  subProductStatus: ProductStatus[];
}

/**
 * Status updates are general messages about the platform, generally these are live updates about incidents posted by the programmers.
 */
interface StatusUpdate {
  /**
   * The id of the status update.
   */
  id: number;

  /**
   * The date the status update was published.
   */
  publicationDate: string;

  /**
   * Is the incident resolved?
   * When true this status update is placed in a history section.
   */
  resolved: boolean;

  /**
   * The message that describes the incident and what we are trying to resolve it.
   */
  message: string;
}
