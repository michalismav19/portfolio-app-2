export interface Skill {
  name: string;
  level: string;
}

export interface Work {
  name: string;
  labels: Label[];
  description: string;
  data: Data[];
}

export interface Label {
  type: string;
  value: string;
}
export interface Data {
  value: string;
}

export interface Other {
  label: string;
  title: string;
  year: string;
  university: string;
}

export interface Seminars {
  label: string;
  title: string;
  year: string;
  description: string;
}
