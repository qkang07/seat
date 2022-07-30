

type ValueTypeName = 'string' | 'number' | 'boolean' | 'record' | 'list'
type ValueType = string | number | boolean | Record<string ,any> | Array<any>

interface IField {
  name: string
  id?: string
  label?: string
  desc: string
  valueType: ValueTypeName
  
}

interface IRenderProps<T extends ValueType = ValueType> extends IField {
  readOnly?: boolean
  designMode?: boolean
  readMode?: boolean
  deletedMode?: boolean
  
  value?: T
  onChange?: (v: T) => void
  onValidate?: (errs?: string[]) => void

}