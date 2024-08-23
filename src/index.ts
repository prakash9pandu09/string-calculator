/**
 * String calculator class
 */
export class StringCalculator {
    /**
     * 
     * @param numberString 
     * @returns sum of numbers
     */
    public add(numberString: string): number {
        let sum: number = 0;
        if(numberString === '') {
            return sum;
        }
        if(numberString.length === 1) {
            sum = parseInt(numberString);
            return sum;
        }

        const numStrArray: string[] = numberString.split(',');
        
        numStrArray.forEach((numStr: string) => {
            sum += parseInt(numStr);
        });

        return sum;
    }
}
