export interface IFormValues {
  title: string;
  description: string;
  user_id?: string;
  y_position?: number;
  x_position?: number;
  id?: string
}

export interface ITodoProps {
  title: string;
  description: string;
  user_id?: string;
  y_position?: number;
  x_position?: number;
  id?: number | undefined;
}

export interface ICreateToDoFormProps {
  data: IFormValues;
  handleFinish: (values: IFormValues) => void;
}

export interface IDeleteTodoProps {
   (id:number) : void;
}