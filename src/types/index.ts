/**
 * 通用类型定义
 */

// 基础类型
export type Primitive = string | number | boolean | null | undefined

// 对象类型
export type AnyObject = Record<string, any>
export type StringObject = Record<string, string>
export type NumberObject = Record<string, number>

// 函数类型
export type AnyFunction = (...args: any[]) => any
export type VoidFunction = () => void
export type AsyncFunction = (...args: any[]) => Promise<any>

// 数组类型
export type NonEmptyArray<T> = [T, ...T[]]

// 工具类型
export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>
export type RequiredKeys<T, K extends keyof T> = T & Required<Pick<T, K>>

// 深度相关类型
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P]
}

export type DeepRequired<T> = {
  [P in keyof T]-?: T[P] extends object ? DeepRequired<T[P]> : T[P]
}

// 验证相关类型
export interface ValidationResult {
  isValid: boolean
  message?: string
}

// 性能相关类型
export interface BenchmarkResult {
  name: string
  duration: number
  iterations: number
  hz: number
}
