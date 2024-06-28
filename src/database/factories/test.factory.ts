import { setSeederFactory } from 'typeorm-extension';
import { Test } from '../entities/test.entity';

export default setSeederFactory(Test, (faker) => {
    const test = new Test();
    test.name = faker.person.firstName('male');
    test.description = faker.person.bio();
    test.email = faker.internet.exampleEmail();

    return test;
})