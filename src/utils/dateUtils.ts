

export const isSameDate = (date1: string, date2: Date): boolean => {
    const d1 = new Date(date1);
    const d2 = new Date(date2);

    d1.setUTCHours(0, 0, 0, 0);
    d2.setUTCHours(0, 0, 0, 0);

    return d1.getTime() === d2.getTime();
};




export const checkLastCheckin = (lastCheckinDate: string) => {
    const lastCheckin = new Date(lastCheckinDate);
    const now = new Date();

    const differenceInTime = now.getTime() - lastCheckin.getTime();
    const differenceInHours = differenceInTime / (1000 * 60 * 60);

    if (differenceInHours <= 24) {
        return 1;
    } else if (differenceInHours <= 48) {
        return 2;
    } else {
        return 3;
    }
}
