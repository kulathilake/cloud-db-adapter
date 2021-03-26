export interface AdapterInterface{

    readOne(): any;
    readAll(): any[];
    writeOne(): void;
    writeAll(): void;
    updateOne(): void;
    updateAll(): void;
    removeOne(): void;
    removeAll(): void;
    count(): number;

    getClient(): any;

}