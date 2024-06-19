export const isStreakContinued = (lastCheckinDate: string): boolean => {
    const lastCheckin = new Date(lastCheckinDate);
    const today = new Date();

    lastCheckin.setUTCHours(0, 0, 0, 0);
    today.setUTCHours(0, 0, 0, 0);

    const differenceInTime = today.getTime() - lastCheckin.getTime();
    const differenceInDays = differenceInTime / (1000 * 60 * 60 * 24);

    return differenceInDays <= 1; // Adjust the condition based on your requirement
};

export const isSameDate = (date1: string, date2: Date): boolean => {
    const d1 = new Date(date1);
    const d2 = new Date(date2);

    d1.setUTCHours(0, 0, 0, 0);
    d2.setUTCHours(0, 0, 0, 0);

    return d1.getTime() === d2.getTime();
};
