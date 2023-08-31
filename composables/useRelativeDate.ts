import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime"

dayjs.extend(relativeTime)



/**
 * Returns a relative date string from a given date string.
 * @param date The date string to convert to a relative date string.
 * @returns A relative date string.
 * @example
 * const date = "2021-01-01T00:00:00.000Z";
 * const relativeDate = useRelativeDate(date);
 * console.log(relativeDate.value); // "1 year ago"
 *
 * @example
 * const date = ref("2021-01-01T00:00:00.000Z");
 * const relativeDate = useRelativeDate(date);
 * console.log(relativeDate.value); // "1 year ago"
 */
export default function useRelativeDate(
  date: string | Ref<string>
): Ref<string> {
  const result = ref<string>("Unknown");

  result.value = dayjs(`${date}`).fromNow() 


  return result;
}
