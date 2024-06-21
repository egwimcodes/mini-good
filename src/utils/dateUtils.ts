export const checkLastCheckin = (lastCheckinDate: string) => {
    const lastCheckin = new Date(lastCheckinDate);
    const now = new Date();

    const differenceInTime = now.getTime() - lastCheckin.getTime();
    const differenceInDays = differenceInTime / (1000 * 60 * 60 * 24);

    if (differenceInDays < 1) {
        return 1; // Less than 24 hours
    } else if (differenceInDays < 2) {
        return 2; // Between 24 and 48 hours
    } else {
        return 3; // More than 48 hours
    }
}
