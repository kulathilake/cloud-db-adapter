import { AdapterInterface } from "../interfaces/AdapterInterface";
import { AWSDynamoDBConfig } from "../types/ConfigurationTypes";

export class AWSDynamoDbAdapter implements AdapterInterface{
    private client: any;
    constructor(config:AWSDynamoDBConfig){
        // TODO
    }
    count(): number {
        throw new Error("Method not implemented.");
    }

    readOne() {
        throw new Error("Method not implemented.");
    }
    readAll(): any[] {
        throw new Error("Method not implemented.");
    }
    writeOne(): void {
        throw new Error("Method not implemented.");
    }
    writeAll(): void {
        throw new Error("Method not implemented.");
    }
    updateOne(): void {
        throw new Error("Method not implemented.");
    }
    updateAll(): void {
        throw new Error("Method not implemented.");
    }
    removeOne(): void {
        throw new Error("Method not implemented.");
    }
    removeAll(): void {
        throw new Error("Method not implemented.");
    }

    getClient() {
        throw new Error("Method not implemented.");
    }
}