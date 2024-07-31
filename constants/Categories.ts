export type CategoriesType = typeof categories;
export type CategoryType = typeof categories.gas;
export type CategoryLabelType = keyof typeof categories;

export const categories = {
  gas: {
    label: "Gas",
    color: "#2690f2",
    iconName: "gas station",
  },
  food: {
    label: "Food",
    color: "#11c5a8",
    iconName: "heart",
  },
  recharge: {
    label: "Recharge",
    color: "#febd33",
    iconName: "mobile",
  },
  entertainment: {
    label: "Entertainment",
    color: "#e84040",
    iconName: "ticket",
  },
  miscellaneous: {
    label: "Miscellaneous",
    color: "#ff8a65",
    iconName: "element3",
  },
};
