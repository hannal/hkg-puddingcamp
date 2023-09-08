/*
사칙연산기+a 를 조합하여 구현해보세요.
add(), sub(), mul(), div(), mod()
예) 3 곱하는 계산기

function mul3(num) {
    const result1 = add(num, num);
    const result2 = add(result1, num);
    return result2;
}
*/

import { add, sub, mul, div, mod } from './ops';

/**
 * 제곱 연산기
 */
export function square(num1) {
    return mul(num1, num1);
}

/**
 * 부가세 포함 가격 계산기
 */
export function withVat(amount) {
    return add(amount, mul(amount, 0.1));
}

/**
 * 부가세 미포함 가격 계산기
 */
export function withoutVat(amount) {
    return mul(amount, div(10, 11));
}

/**
 * 몫을 구하는 계산기
 */
export function getQuotient(num1, num2) {
    return div(sub(num1, mod(num1, num2)), num2);
}
