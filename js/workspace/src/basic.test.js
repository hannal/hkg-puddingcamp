import { expect, test } from 'vitest';

test('1AU 거리는 빛이 1초 동안 이동한 거리보다 길다', () => {
    const number1 = 149597870;
    const number2 = 299792458 / 1000;
    expect(number1).toBeGreaterThan(number2);
});

// const number1 = 149597870;
// const number2 = 299792458 / 1000;

// if(number1 > number2) {
//     console.log('1AU 거리는 빛이 1초 동안 이동한 거리보다 길다');
// } else {
//     throw Error('값 비교를 잘못했다.');
// }
