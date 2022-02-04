// 宣告語句 declare
// 檔名以 .d.ts 命名 => ts 會去解析型別檔案( 可供全域使用 )

declare type declaredStrVariableType = string;

// 命名空間
namespace Variables {
  export type name = string;
  export interface NamespaceProps {
    propA: string;
    propB: number;
    propC: boolean;
  }
}
