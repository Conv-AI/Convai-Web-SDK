declare class Queue<T> {
    private queue;
    put(item: T): Promise<void>;
    get(): Promise<T>;
}
declare function producer(queue: any, audioU8: any, visemeU8: any): Promise<void>;
declare function consumer(queue: any): Promise<any>;
export { producer, consumer, Queue };
