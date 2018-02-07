interface IAppEvent {
    topic: string,
    data: any,
    handler: (e: any, data: any) => void;
}

interface IMediators {
    publish(e: IAppEvent): void;
    subscribe(e: IAppEvent): void;
    unsubscribe(e: IAppEvent): void;
}