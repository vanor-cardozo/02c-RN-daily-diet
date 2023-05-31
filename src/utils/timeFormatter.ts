export function timeFormatter(dateString: string) {
  const date = new Date(dateString);

  const hour = date.getHours();
  const minute = date.getMinutes();

  const formattedTime = `${hour.toString().padStart(2, "0")}:${minute
    .toString()
    .padStart(2, "0")}`;

  return formattedTime;
}
