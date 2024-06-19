// utils/dateUtils.ts
export const isStreakContinued = (lastCheckinDate: string): boolean => {
    const lastCheckin = new Date(lastCheckinDate);
    const today = new Date();

    // Set the time part to 0 to only compare dates
    lastCheckin.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0);

    const differenceInTime = today.getTime() - lastCheckin.getTime();
    const differenceInDays = differenceInTime / (1000 * 60 * 60 * 24);

    return differenceInDays <= 1;  // Adjust the condition based on your requirement
};

export const isWithin24Hours = (lastCheckinDate: string): boolean => {
    const lastCheckin = new Date(lastCheckinDate);
    const now = new Date();
    const timeDifference = now.getTime() - lastCheckin.getTime();
    return timeDifference < 24 * 60 * 60 * 1000; // 24 hours in milliseconds
};