class LazyLogger {
    private static uniqueObject: LazyLogger;

    private LazyLogger() {}

    public static getLogger(): LazyLogger {
        if (this.uniqueObject == null) {
            this.uniqueObject = new LazyLogger();
        }
        return this.uniqueObject;
    }

    public info(message: string) {
        console.log(`[info] ${message}`);
    }

    public warnning(message: string) {
        console.log(`[warn] ${message}`);
    }
}

let lazeLogger: LazyLogger = LazyLogger.getLogger();
let lazeLogger2: LazyLogger = LazyLogger.getLogger();
lazeLogger.info("1번 : 정보 log");
lazeLogger.warnning("2번 : 경고 log");
lazeLogger.info(`3번 : ${lazeLogger === lazeLogger2}`);
