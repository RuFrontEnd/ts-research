// yarn add parcel-bundler -g => 偵測到<script src="./[fileName].ts"></script> 則自動編譯 .ts => .js 套件
// 啟動 parcel => yarn parcel ./basic/maps/index.html
import { User } from "./User";
import { Company } from "./Company";

const user = new User();
console.log("user", user);
const company = new Company();
console.log("company", company);

console.log("google", google);

new google.maps.Map(document.getElementById("map"), {
  zoom: 1,
  center: {
    lat: 0,
    lng: 0,
  },
});
