import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { Test } from '../entities/test.entity';

export default class TestSeeder implements Seeder {
    public async run(
        dataSource: DataSource,
        factoryManager: SeederFactoryManager
    ): Promise<any> {
        const repository =  dataSource.getRepository(Test);
        await repository.insert([
            {
                name: 'Caleb',
                description: 'Barrows',
                email: 'caleb.barrows@gmail.com',
            }
        ]);

        // ---------------------------------------------------

        const testFactory = await factoryManager.get(Test);
        // save 1 factory generated entity, to the database
        await testFactory.save();

        // save 5 factory generated entities, to the database
        await testFactory.saveMany(5);

    }
}