import { DynamoDbAdapter } from "./adapters/DynamoDbAdapter";
import { AdapterInterface } from "./interfaces/AdapterInterface";
import { CloudFirestoreConfig, DatabaseType, DynamoDBConfig, MySQL2Config} from "./types/ConfigurationTypes";

class AdapterFactory{
    private type: DatabaseType;
    private config: DynamoDBConfig | MySQL2Config | CloudFirestoreConfig;

    constructor(type: DatabaseType,config: DynamoDBConfig | MySQL2Config | CloudFirestoreConfig){
        this.type = type;
        this.config = config;
    } 
    createAdapter(): AdapterInterface {
            if (this.type === DatabaseType.MYSQL2) {
                // TODO: Create and return MYSQL2 Adapter.

            } else if (this.type === DatabaseType.DYNAMODB) {

                return new DynamoDbAdapter(this.config as DynamoDBConfig);

            } else if (this.type === DatabaseType.CLOUDFIRESTORE) {

                // TODO: Create and return Cloud Firestore Adapter.

            }
    }

}

export default AdapterFactory;
