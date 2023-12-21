
import * as fs from 'fs';

const filePath: string = '2022/dayThree/input.txt';

const processFile = (file: string): void => {
    const fileContent = fs.readFileSync(file, 'utf-8');
    const lines = fileContent.split('\n');

    const values = {
        a: 1,
        b: 2,
        c: 3,
        d: 4,
        e: 5,
        f: 6,
        g: 7,
        h: 8,
        i: 9,
        j: 10,
        k: 11,
        l: 12,
        m: 13,
        n: 14,
        o: 15,
        p: 16,
        q: 17,
        r: 18,
        s: 19,
        t: 20,
        u: 21,
        v: 22,
        w: 23,
        x: 24,
        y: 25,
        z: 26,
        A: 27,
        B: 28,
        C: 29,
        D: 30,
        E: 31,
        F: 32,
        G: 33,
        H: 34,
        I: 35,
        J: 36,
        K: 37,
        L: 38,
        M: 39,
        N: 40,
        O: 41,
        P: 42,
        Q: 43,
        R: 44,
        S: 45,
        T: 46,
        U: 47,
        V: 48,
        W: 49,
        X: 50,
        Y: 51,
        Z: 52
    };

    // let totalPriorities: number = 0;

    // for (const line of lines) {
    //     const midpoint: number = Math.floor(line.length / 2);
    //     const firstHalf: string[] = line.slice(0, midpoint).split('');
    //     const secondHalf: string[] = line.slice(midpoint).split('');
    //     // console.log(line, '===>', firstHalf, '+', secondHalf);
    //     const commonCharacters: string = firstHalf.filter(char => secondHalf.includes(char)).filter((value, index, arr) => arr.indexOf(value) === index).join('');
    //     // console.log(commonCharacters);

    //     if (values.hasOwnProperty(commonCharacters)) {
    //         const targetValue: number = values[commonCharacters as keyof typeof values];
    //         // console.log(targetValue);
    //         totalPriorities += targetValue;
    //     };
    // };

    // console.log(totalPriorities);

    //part two
    let totalPrioritiesPartTwo: number = 0;
    let triple: string[] = [];

    for (let i = 0; i < lines.length; i += 3) {
        triple = lines.slice(i, i + 3);
        // console.log(triple, 'in loop');
        const commonChars: Set<string> = triple.reduce((result, actualString): Set<string> => {
            const currentChars = new Set(actualString);
            return new Set([...result].filter(char => currentChars.has(char)));
        }, new Set(triple[0]))
        const letter: string = Array.from(commonChars).join('');
        if (values.hasOwnProperty(letter)) {
            const targetValue: number = values[letter as keyof typeof values];
            // console.log(targetValue);
            totalPrioritiesPartTwo += targetValue;
        };
    };


    console.log(totalPrioritiesPartTwo, 'at the end');

};

processFile(filePath);