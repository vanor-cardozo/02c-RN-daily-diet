import { timeFormatter } from "./timeFormatter";

export function dateFormatter(dateString: string) {
  const date = new Date(dateString);

  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  const formattedTime = timeFormatter(dateString);

  const formattedDate = `${day}/${month}/${year} às ${formattedTime} `;

  return formattedDate;
}
