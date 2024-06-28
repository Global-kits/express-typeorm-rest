import { setSeederFactory } from 'typeorm-extension';
import { Test } from '../entities/test.entity';
import { faker } from '@faker-js/faker';

export default setSeederFactory(Test, () => {
    const test = new Test();
    test.name = faker.person.firstName('male');
    test.description = faker.person.bio();
    test.email = faker.internet.exampleEmail();

    return test;
})