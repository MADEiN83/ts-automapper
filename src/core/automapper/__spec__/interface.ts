export interface Input {
  first_name?: string;
  last_name?: string;
  age?: string;
  updated_at?: string;
}

export interface Output {
  firstName: string;
  lastName: string;
  age: number;
  updatedAt?: Date;
}
