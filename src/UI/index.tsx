// ICONS
export { default as appIcon } from "../assets/icons/home.svg";
export { default as backupIcon } from "../assets/icons/backup.svg";
export { default as calendarIcon } from "../assets/icons/calendar.svg";
export { default as chartIcon } from "../assets/icons/chart.svg";
export { default as conversionIcon } from "../assets/icons/conversionIcon.svg";
export { default as deleteIcon } from "../assets/icons/delete.svg";
export { default as elementIcon } from "../assets/icons/element.svg";
export { default as expandIcon } from "../assets/icons/expand.svg";
export { default as faviconIcon } from "../assets/icons/favicon.svg";
export { default as formIcon } from "../assets/icons/form.svg";
export { default as homeIcon } from "../assets/icons/home.svg";
export { default as imgIcon } from "../assets/icons/img.svg";
export { default as logIcon } from "../assets/icons/log.svg";
export { default as noteIcon } from "../assets/icons/note.svg";
export { default as notificationsIcon } from "../assets/icons/notifications.svg";
export { default as orderIcon } from "../assets/icons/order.svg";
export { default as postIcon } from "../assets/icons/post.svg";
export { default as post2Icon } from "../assets/icons/post2.svg";
export { default as productIcon } from "../assets/icons/product.svg";
export { default as product2Icon } from "../assets/icons/productIcon.svg";
export { default as profileIcon } from "../assets/icons/profile.svg";
export { default as revenueIcon } from "../assets/icons/revenueIcon.svg";
export { default as searchIcon } from "../assets/icons/search.svg";
export { default as settingIcon } from "../assets/icons/setting.svg";
export { default as settingsIcon } from "../assets/icons/settings.svg";
export { default as userIcon } from "../assets/icons/user.svg";
export { default as user2Icon } from "../assets/icons/userIcon.svg";
export { default as viewIcon } from "../assets/icons/view.svg";

// IMAGE
export const Image = ({
  iconSrc,
  iconStyle,
  IconAlt,
  iconTitle,
}: {
  iconSrc: string;
  iconStyle: object;
  IconAlt: string;
  iconTitle: string;
}) => <img src={iconSrc} alt={IconAlt} title={iconTitle} style={iconStyle} />;
