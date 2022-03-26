export interface Publicacion {
  object: string;
  id: string;
  created_time: Date;
  last_edited_time: Date;
  created_by: TedBy;
  last_edited_by: TedBy;
  cover: null;
  icon: null;
  parent: Parent;
  archived: boolean;
  properties: Properties;
  url: string;
}

export interface TedBy {
  object: string;
  id: string;
}

export interface Parent {
  type: string;
  database_id: string;
}

export interface Properties {
  Status: Status;
  Image_URL: ImageURL;
  Tags: Tags;
  Fecha_Publicacion: FechaDePublicacion;
  Slug: ImageURL;
  Post: Post;
}

export interface FechaDePublicacion {
  id: string;
  type: string;
  date: DateClass;
}

export interface DateClass {
  start: Date;
  end: null;
  time_zone: null;
}

export interface ImageURL {
  id: string;
  type: string;
  rich_text: RichText[];
}

export interface RichText {
  type: string;
  text: Text;
  annotations: Annotations;
  plain_text: string;
  href: null;
}

export interface Annotations {
  bold: boolean;
  italic: boolean;
  strikethrough: boolean;
  underline: boolean;
  code: boolean;
  color: string;
}

export interface Text {
  content: string;
  link: null;
}

export interface Post {
  id: string;
  type: string;
  title: RichText[];
}

export interface Status {
  id: string;
  type: string;
  select: Select;
}

export interface Select {
  id: string;
  name: string;
  color: string;
}

export interface Tags {
  id: string;
  type: string;
  multi_select: Select[];
}
