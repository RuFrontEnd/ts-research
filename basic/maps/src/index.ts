// yarn add parcel-bundler -g => 偵測到<script src="./[fileName].ts"></script> 則自動編譯 .ts => .js 套件
// 啟動 parcel => yarn parcel ./basic/maps/index.html
import { User } from "./User";
import { Company } from "./Company";
import { CustomMap } from "./CustomMap";

const user = new User();
console.log("user", user);
const company = new Company();
console.log("company", company);

new CustomMap("map", 1, 0, 0);
