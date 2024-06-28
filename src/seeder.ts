import { DataSource, DataSourceOptions } from 'typeorm';
import { runSeeders, SeederOptions } from 'typeorm-extension';
import { Test } from './database/entities/test.entity';
import TestSeeder from './database/seeds/test.seeder';
import TestFactory from './database/factories/test.factory';

(async () => {
    const options: DataSourceOptions & SeederOptions = {
        type: "mysql",
        host: "localhost",
        port: 3306,
        username: "root",
        password: "",
        database: "test",
        entities: [Test],

        seeds: [TestSeeder],
        factories: [TestFactory]
    };

    const dataSource = new DataSource(options);
    await dataSource.initialize();

    await runSeeders(dataSource);
})();