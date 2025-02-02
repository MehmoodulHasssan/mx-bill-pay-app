export function formatDate(dateString: string): string {
  // Create a Date object from the input string
  const date = new Date(dateString);

  // Define options for formatting the date and time
  const options: Intl.DateTimeFormatOptions = {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  };

  // Format the date using Intl.DateTimeFormat
  const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);

  // Split the formatted date into components and customize the format
  const [day, month, year, time] = formattedDate.split(' ');

  // Return the formatted string in the desired format
  return `${day}, ${month} ${year} at ${time}`;
}
