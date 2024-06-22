export function canClaim(last_checkin_day: string): boolean {
    // Get the current date
    const currentDate = new Date();

    // Parse the last_checkin_day
    const lastCheckinDate = new Date(last_checkin_day);

    // Calculate the difference in time
    const timeDifference = currentDate.getTime() - lastCheckinDate.getTime();

    // Convert time difference to days
    const dayDifference = timeDifference / (1000 * 3600 * 24);

    // Return true if the difference is more than 1 day, otherwise false
    return dayDifference > 1;
}

export function getCurrentDateFormatted(): string {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const day = String(date.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
}
