import { ComponentType } from "react";

export type RootStackParamList = {
  Auth: undefined;
  Home: undefined;
  Settings: undefined;
};

export interface IRoute {
  name: keyof RootStackParamList;
  component: ComponentType;
}
