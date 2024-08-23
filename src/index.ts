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

        let delimiter: string | RegExp;
        let numStrArray: string[];
        if(numberString.startsWith('//')) {
            delimiter = numberString.split('\n')[0].split('//')[1];
            let newNumStr = numberString.split('\n')[1];
            numStrArray = newNumStr.split(delimiter);
        } else {
            delimiter = /[,\n]/;
            numStrArray = numberString.split(delimiter);
        }
        
        numStrArray.forEach((numStr: string) => {
            sum += parseInt(numStr);
        });

        return sum;
    }
}

