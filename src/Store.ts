import IndexdbWorker from "./IndexdbWorker?worker";
import LocalForage from "./LocalForage";

let idbWorker = null;
if (typeof Worker !== "undefined") idbWorker = new IndexdbWorker();

export default {};
