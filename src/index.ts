import { DynamoDbAdapter } from "./adapters/DynamoDbAdapter";
import { DatabaseType} from "./types/ConfigurationTypes";

class AdapterFactory{
    private type: DatabaseType;
    private config: any;

    constructor(type: DatabaseType){
        this.type = type;
    } 
    createAdapter(){
            if (this.type === DatabaseType.MYSQL2) {

                // TODO: Create and return MYSQL2 Adapter.

            } else if (this.type === DatabaseType.DYNAMODB) {

                return new DynamoDbAdapter(this.config);

            } else if (this.type === DatabaseType.CLOUDFIRESTORE) {

                // TODO: Create and return Cloud Firestore Adapter.

            }
    }

}

export default AdapterFactory;