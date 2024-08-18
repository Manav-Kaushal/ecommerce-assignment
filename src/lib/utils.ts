import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatCurrency = ({
  amount,
  maxDecimal = 2,
  currency = "USD",
  locale = "en-US",
}: {
  amount: number;
  maxDecimal?: number;
  currency?: string;
  locale?: string;
}) => {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
    maximumFractionDigits: maxDecimal,
  }).format(amount);
};
