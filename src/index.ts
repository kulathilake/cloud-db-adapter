import { AWSDynamoDbAdapter } from "./adapters/AWSDynamoDbAdapter";
import { AdapterInterface } from "./interfaces/AdapterInterface";
import { 
    DatabaseType,
    GCPFirestoreConfig, 
    AWSDynamoDBConfig, 
    MySQL2Config
} from "./types/ConfigurationTypes";


class AdapterFactory{
    private type: DatabaseType;
    private config: AWSDynamoDBConfig | MySQL2Config | GCPFirestoreConfig;

    constructor(type: DatabaseType,config: AWSDynamoDBConfig | MySQL2Config | GCPFirestoreConfig){
        this.type = type;
        this.config = config;
    } 
    createAdapter(): AdapterInterface {
            if (this.type === DatabaseType.MYSQL2) {
                // TODO: Create and return MYSQL2 Adapter.

            } else if (this.type === DatabaseType.AWSDYNAMODB) {
                return new AWSDynamoDbAdapter(this.config as AWSDynamoDBConfig);

            } else if (this.type === DatabaseType.GCPFIRESTORE) {

                // TODO: Create and return Cloud Firestore Adapter.

            }
    }

}


export default AdapterFactory;
export {DatabaseType};