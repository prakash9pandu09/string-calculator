export class StringCalculator {
    public add(numberString: string): number {
        if(numberString === '') {
            return 0;
        }
        return parseInt(numberString);
    }
}
