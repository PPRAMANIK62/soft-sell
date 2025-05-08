import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Smoothly scrolls to the element with the given ID
 * @param elementId - The ID of the element to scroll to (without the # prefix)
 * @param offset - Optional offset from the top of the element (default: 0)
 */
export function scrollToElement(elementId: string, offset: number = 0): void {
  const element = document.getElementById(elementId);

  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
}

// Format AI response to improve readability
export const formatAIResponse = (text: string): string => {
  // Convert asterisks to proper markdown bullet points if they're not already
  let formatted = text.replace(/^\s*\*\s+/gm, "- ");

  // Ensure proper line breaks before bullet points
  formatted = formatted.replace(/([^\n])(- )/g, "$1\n\n$2");

  // Add line breaks between paragraphs if they don't exist
  formatted = formatted.replace(/([.!?])\s+([A-Z])/g, "$1\n\n$2");

  // Ensure numbered lists have proper spacing
  formatted = formatted.replace(/(\d+\.)\s+/g, "$1 ");

  return formatted;
};
