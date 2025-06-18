export interface Industry {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export interface Solution {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface NavItem {
  name: string;
  path: string;
  submenu?: NavItem[];
}