import LocalForage from "localforage";
import "localforage-getitems";
import "localforage-setitems";

LocalForage.config({
  name: "Test Storage",
  version: 1,
  storeName: " Local Storage",
  description: "Cache for Applications",
});

export default LocalForage;
