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
