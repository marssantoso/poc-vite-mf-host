export interface User {
  id: number
  name: string
  role: string
}

export interface Menu {
  label: string
  path: string
  icon?: string
  submenus?: Menu[]
}

export type Menus = Menu[]
