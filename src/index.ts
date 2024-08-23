export class StringCalculator {
    public add(numberString: string): number {
        if(numberString === '') {
            return 0;
        }
        if(numberString.length === 1) {
            return parseInt(numberString);
        }
        let a = numberString.split(',')[0];
        let b = numberString.split(',')[1];
        let sum = parseInt(a) + parseInt(b);
        return sum;
    }
}
