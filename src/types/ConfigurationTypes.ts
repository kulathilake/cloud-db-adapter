export enum DatabaseType{
    DYNAMODB = 'dynamo-db',
    MYSQL2 = 'mysql2',
    CLOUDFIRESTORE = 'cloud-firestore'
}

export type DynamoDBConfig = {
    aws_access_key_id: string;
    aws_secret_access_key: string;
    aws_region: string;
    aws_apiVersion: string;
}

export type MySQL2Config = {
    mysql_connection: string;
    mysql_username: string;
    mysql_password: string;
    mysql_database: string;
    mysql_pool: boolean;
}

export type CloudFirestoreConfig = {

}