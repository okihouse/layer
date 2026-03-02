export class Utilities {
    static isMobile(): boolean {
        return /Mobi|Android/i.test(navigator.userAgent);
    }

    static isAndroid(): boolean {
        return /Android/i.test(navigator.userAgent);
    }
}