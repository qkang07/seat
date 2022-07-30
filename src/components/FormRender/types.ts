import { randomId } from './utils';

export type AllDataType = 'number' | 'string' | 'boolean' | 'object' | 'list';
export type DataType =
  | number
  | string
  | boolean
  | Array<any>
  | Record<string, any>;

// export interface IDesignTimeProps  {
//   __isNew?: boolean;
//   __hasChanges?: boolean;
//   // 无头字段，并非真的字段，只是用来定义属性。
//   // 用于 list 类型
//   __headless?: boolean;
//   // 尚处于设计阶段的，未完成的字段，不应被保存。用于List
//   __unfinished?: boolean;
// }
export interface IFieldBase {
  name: string;
  enName?: string;
  // for antd icon, use 'antd-icons:[name]'
  desc?: string;
  icon?: string;
}

export interface IField<P extends Record<string, any> = {}> extends IFieldBase {
  label: string;
  fieldName: string;
  dataType: AllDataType;
  group?: string;
  defaultValue?: DataType;
  lang?: 'en' | 'cn';

  disabled?: boolean;
  designMode?: boolean;
  readOnly?: boolean;
  deleted?: boolean 

  props: P;
}

// editor 可以编辑的属性
// export type IEditableProps<T> = Pick<IField<T>, 'defaultValue' | 'label' | 'fieldName' | 'props' | 'group'>
export type IEditableProps<P extends Record<string, any> = {}> = Pick<
  IField<P>,
  'defaultValue' | 'label' | 'fieldName' | 'props' | 'group' | 'dataType'
>;

export interface IRenderProps<P extends Record<string, any> = {}>
  extends IField<P> {
  value?: DataType;
  onChange?: (v: DataType) => void;
  onValidate?: (res: string[]) => void;
}
export interface IEditorRenderProps<P extends Record<string, any> = {}> {
  field: IField<P>;
  onFieldChange: (field: IEditableProps) => void;
}

export interface IFieldDef<P extends Record<string, any> = {}> {
  meta: IFieldBase;
  // 创建时钩子。当用户在设计时创建了该组件，可以在这里设置一些初始属性。
  onCreate?: (initProps: IField<P>) => IField<P>;
  render: (dom: HTMLDivElement, props: IRenderProps<P>) => any;
  editorRender?: (dom: HTMLDivElement, props: IEditorRenderProps<P>) => any;
  validator?: (v: DataType, field: IField<P>) => string[];
  sdkGetter?: (v: DataType, field: IField<P>) => any;
}

export type defineField = (field: IFieldDef) => IFieldDef;

// 特化的字段
// export interface INumberField extends IFieldBase<number> {
//   dataType: 'number'
// }

// export interface IStringField extends IFieldBase<string> {
//   dataType: 'string'
// }

// export interface IBooleanField extends IFieldBase<boolean> {
//   dataType: 'boolean',
// }

// export interface IObjectField extends IFieldBase<object> {
//   dataType: 'object',
//   children: any[]
// }

// export interface IListField extends IFieldBase<Array<unknown>> {
//   dataType: 'list',
//   children: unknown[]
// }

// export type IAllField = INumberField | IStringField | IBooleanField | IObjectField | IListField

// 渲染字段，不同于 IField，是真是渲染的数据结构
export class RenderField<T extends IField = IField> {
  constructor(
    public field: T,

    // 对于叶子节点，value 才具备受控意义。
    public filledValue: any,
    public originValue?: any,
  ) {
    this.renderKey = randomId();
    // if (value === void 0) {
    //   if (this.componentType === 'object' || this.componentType === 'list') {
    //   } else {
    //     this.value = field.defaultValue;
    //   }
    // }
  }

  parent?: RenderField;
  renderKey: string;
  type: 'renderField' = 'renderField';

  get name() {
    return this.field.name;
  }

  get group() {
    return this.field.group;
  }
  get dataType() {
    return this.field.dataType;
  }

  get deleted() {
    return this.field.deleted;
  }

  // 仅限非叶子节点
  children?: RenderField[];
}

export class FieldGroup<T> {
  constructor(public name: string) {
    this.id = `group_${name}`; // group
  }
  id: string;
  type: 'group' = 'group';
  children: T[] = [];
}




// 自定义字段需要实现的接口
interface CommonFieldDefine {
 
}

export type CreateFieldProps =  {
  dom: HTMLElement
  value: any,
  field: IField
  onValueChange: (v: any) => void
  onValidate: (errs: string[]) => void
}

export type FieldRefType = {
  handleFieldUpdate: (field: IField) => void
  handleValueUpdate: (v: any) => void
}

export type CreateField = (props:CreateFieldProps) => FieldRefType


export function defineCreateField(func: CreateField) {
  return func
}