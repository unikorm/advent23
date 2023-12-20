
import * as fs from 'fs';

const filePath: string = '2022/dayThree/test.txt';

const processFile = (file: string): void => {
    const fileContent = fs.readFileSync(file, 'utf-8');
    const lines = fileContent.split('\n');

    const a: number = 1;
    const b: number = 2;
    const c: number = 3;
    const d: number = 4;
    const e: number = 5;
    const f: number = 6;
    const g: number = 7;
    const h: number = 8;
    const i: number = 9;
    const j: number = 10;
    const k: number = 11;
    const l: number = 12;
    const m: number = 13;
    const n: number = 14;
    const o: number = 15;
    const p: number = 16;
    const q: number = 17;
    const r: number = 18;
    const s: number = 19;
    const t: number = 20;
    const u: number = 21;
    const v: number = 22;
    const w: number = 23;
    const x: number = 24;
    const y: number = 25;
    const z: number = 26;

    const A: number = 27;
    const B: number = 28;
    const C: number = 29;
    const D: number = 30;
    const E: number = 31;
    const F: number = 32;
    const G: number = 33;
    const H: number = 34;
    const I: number = 35;
    const J: number = 36;
    const K: number = 37;
    const L: number = 38;
    const M: number = 39;
    const N: number = 40;
    const O: number = 41;
    const P: number = 42;
    const Q: number = 43;
    const R: number = 44;
    const S: number = 45;
    const T: number = 46;
    const U: number = 47;
    const V: number = 48;
    const W: number = 49;
    const X: number = 50;
    const Y: number = 51;
    const Z: number = 52;

    const totalPriorities: number = 0;

    for (const line of lines) {
        const midpoint: number = Math.floor(line.length / 2);
        const firstHalf: string = line.slice(0, midpoint);
        const secondHalf: string = line.slice(midpoint);
        // console.log(line, '===>', firstHalf, '+', secondHalf);
    };

};

processFile(filePath);