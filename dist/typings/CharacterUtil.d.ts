declare class AsyncBlockingQueue<T> {
    private resolvers;
    private promises;
    private _add;
    enqueue(item: T | null): void;
    dequeue(): Promise<T | null>;
}
export { AsyncBlockingQueue };
