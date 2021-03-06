export interface DataType {
  id?: number;
  title?: string;
  client?: string;
  due?: string;
  count?: number;
  amount?: number;
  method?: Array<string>;
  material?: Array<string>;
  status?: string;
  docs?: number;
}
