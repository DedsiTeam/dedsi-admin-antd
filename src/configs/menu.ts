export interface IMenuItem {
    key: string;
    label: string;
    title: string;
    permissionCode: string
    children?: IMenuItem[];
}

export const menuData: IMenuItem[] = [
    {
        key: '/dashboard',
        label: 'dashboard',
        title: 'dashboard',
        permissionCode: 'dashboard'
    }
]