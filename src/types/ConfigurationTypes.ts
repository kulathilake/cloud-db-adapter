export enum DatabaseType{
    AWSDYNAMODB = 'dynamo-db',
    MYSQL2 = 'mysql2',
    GCPFIRESTORE = 'cloud-firestore'
}

export type AWSDynamoDBConfig = {
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

export type GCPFirestoreConfig = {

}