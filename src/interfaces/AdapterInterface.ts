export interface AdapterInterface{
    client: any;
    
    readOne(): any;
    readAll(): any[];
    writeOne(): void;
    writeAll(): void;
    updateOne(): void;
    updateAll(): void;
    removeOne(): void;
    removeAll(): void;

    getClient(): any;

}