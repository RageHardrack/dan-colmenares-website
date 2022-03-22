export interface TedBy {
  object: string;
  id: string;
}

export interface Annotations {
  bold: boolean;
  italic: boolean;
  strikethrough: boolean;
  underline: boolean;
  code: boolean;
  color: string;
}

export interface Parent {
  type: string;
  database_id: string;
}
