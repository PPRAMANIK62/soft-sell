import { useCallback } from "react";
import { scrollToElement } from "@/lib/utils";

/**
 * A hook that provides a function to handle smooth scrolling for anchor links
 * @param defaultOffset - Default offset from the top of the element (default: 0)
 * @returns A function that handles click events for anchor links
 */
export function useSmoothScroll(defaultOffset: number = 0) {
  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      const href = e.currentTarget.getAttribute("href");

      // Only handle anchor links (those starting with #)
      if (href && href.startsWith("#")) {
        e.preventDefault();

        // Remove the # from the href
        const id = href.substring(1);

        // Get custom offset from data attribute if available
        const customOffset = e.currentTarget.dataset.offset
          ? parseInt(e.currentTarget.dataset.offset, 10)
          : defaultOffset;

        scrollToElement(id, customOffset);
      }
    },
    [defaultOffset],
  );

  return handleClick;
}

export default useSmoothScroll;
