export {};
let declaredStrVariable: declaredStrVariableType = "string"; // 型別在 declare.d 已被定義

// let nameVariable = "myName"; // declare nameSpace 定義物件型別

let nameVariable: Variables.name = "str"; // declare nameSpace 定義變數型別

let namespaceVariable: Variables.NamespaceProps = {
  propA: "string",
  propB: 1,
  propC: true,
}; // declare nameSpace 定義物件型別
