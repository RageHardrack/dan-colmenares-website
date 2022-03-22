import { Annotations, Parent, TedBy } from "./General";

export interface BlogQuery {
  object: string;
  results: BlogResultsQuery[];
  next_cursor?: string;
  has_more: boolean;
  type: string;
  page?: any;
}

export interface BlogResultsQuery {
  object: string;
  id: string;
  created_time: string;
  created_by: TedBy;
  last_edited_time: string;
  last_edited_by: TedBy;
  title: string;
  icon?: string;
  cover?: string;
  properties: BlogProperties;
  parent: Parent;
  archived: boolean;
  url: string;
}

interface InnerProperties {
  id: string;
  name: string;
  color: string;
}

export interface BlogProperties {
  Status: {
    id: string;
    type: string;
    select: InnerProperties;
  };
  Tags: {
    id: string;
    name: string;
    multi_select: InnerProperties[];
  };
  Name: {
    id: string;
    type: string;
    title: [
      {
        type: string;
        text: {
          content: string;
          link?: string;
        };
        annotations: Annotations;
        plain_text: string;
        href?: string;
      }
    ];
  };
}
