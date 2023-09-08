import { afterEach, describe, expect, it, vi } from 'vitest';

import * as ops from '../ops';
import { square, withVat, withoutVat, getQuotient } from '../quests';

vi.mock('./ops', async () => {
    const actual = await vi.importActual('../ops');

    return {
        add: vi.spyOn(actual, 'add').mockImplementation(actual.add),
        sub: vi.spyOn(actual, 'sub').mockImplementation(actual.sub),
        mul: vi.spyOn(actual, 'mul').mockImplementation(actual.mul),
        div: vi.spyOn(actual, 'div').mockImplementation(actual.div),
        mod: vi.spyOn(actual, 'mod').mockImplementation(actual.mod),
    };
});

describe('수를 제곱한 결과는 제곱할 수를 자신과 곱한 값과 값과 같다.', async () => {
    // const ops = await vi.importMock('../ops');

    afterEach(() => {
        vi.restoreAllMocks();
    });

    it('mul 함수 없이 구현한 테스트', () => {
        expect(square(3)).toEqual(9);
    });

    it('mul 함수만 사용하여 구현한 테스트', async () => {
        expect(square(3)).toEqual(9);

        // mul 함수가 호출되어야 한다.
        expect(ops.mul).toHaveBeenCalledTimes(1);
    });
});

describe('부가세를 포함한 금액은 기본가에 10%를 더한 값과 같다.', async () => {
    // const ops = await vi.importMock('../ops');

    afterEach(() => {
        vi.restoreAllMocks();
    });

    it('사칙연산기 사용 여부를 확인하지 않은 테스트', () => {
        expect(withVat(1000)).toEqual(1100);
    });

    it('사칙연산기 사용 여부를 확인하는 테스트', () => {
        expect(withVat(1000)).toEqual(1100);
        expect(ops.add).toHaveBeenCalled();
        expect(ops.mul).toHaveBeenCalled();
    });
});

describe('최종가에 10% 부가하지 않은 금액이 부가세를 포함하지 않은 금액이다.', async () => {
    // const ops = await vi.importMock('../ops');

    afterEach(() => {
        vi.restoreAllMocks();
    });

    it('사칙연산기 사용 여부를 확인하지 않은 테스트', () => {
        expect(withoutVat(1100)).toEqual(1000);
    });

    it('나누기 연산기만 사용 여부를 확인하는 테스트', () => {
        expect(withoutVat(1100)).toEqual(1000);
        expect(ops.div).toHaveBeenCalledTimes(1);
    });

    it('나누기, 곱하기 연산기 사용 여부를 확인하는 테스트', () => {
        expect(withoutVat(1100)).toEqual(1000);
        expect(ops.mul).toHaveBeenCalled();
        expect(ops.div).toHaveBeenCalled();
    });

});

describe('몫은 나눈 값에서 나머지를 뺀 값과 같다.', async () => {
    const ops2 = await vi.importMock('./ops');

    afterEach(() => {
        vi.restoreAllMocks();
    });

    it('사칙연산기 사용 여부를 확인하지 않은 테스트', () => {
        expect(getQuotient(1234, 3)).toEqual(411);
    });

    it('사칙연산기 사용 여부를 확인하는 테스트', () => {
        expect(getQuotient(1234, 3)).toEqual(411);
        expect(sub).toHaveBeenCalled();
        expect(mod).toHaveBeenCalled();
    });
});
