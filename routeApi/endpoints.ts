import { BASE_URL_BUSINESS_OWNER, BASE_URL_USERS } from "./baseUrlNextApi";

//--business-owner-routes

//--business-owner-registeration
export const BUSINESS_OWNER = BASE_URL_BUSINESS_OWNER;
export const BUSINESS_OWNER_REGISTER = `${BASE_URL_BUSINESS_OWNER}/register`;
export const BUSINESS_OWNER_LOGIN = `${BASE_URL_BUSINESS_OWNER}/login`;
export const BUSINESS_OWNER_RESEND_EMAIL_VERIFICATION = `${BASE_URL_BUSINESS_OWNER}/resend-email-verification`;
export const BUSINESS_OWNER_VERIFY_EMAIL_TOKEN = `${BASE_URL_BUSINESS_OWNER}/verify-email`;
export const BUSINESS_OWNER_UPDATE_INFORMATION = `${BASE_URL_BUSINESS_OWNER}/update-information`;
export const BUSINESS_OWNER_IS_PASSWORD = `${BASE_URL_BUSINESS_OWNER}/is-password`;

//--business-owner-online-menu
export const BUSINESS_OWNER_ONLINE_MENU = `${BASE_URL_BUSINESS_OWNER}/online-menu`;
export const BUSINESS_OWNER_ONLINE_MENU_ALL_Product = `${BUSINESS_OWNER_ONLINE_MENU}/all-products`;
export const BUSINESS_OWNER_ONLINE_MENU_ADD_PRODUCT = `${BUSINESS_OWNER_ONLINE_MENU}/add-product`;
export const BUSINESS_OWNER_ONLINE_MENU_UPDATE_PRODUCT = `${BUSINESS_OWNER_ONLINE_MENU}/update-product`;
export const BUSINESS_OWNER_ONLINE_MENU_DELETE_PRODUCT = `${BUSINESS_OWNER_ONLINE_MENU}/delete-product`;
export const BUSINESS_OWNER_ONLINE_MENU_FINDE_PRODUCT = `${BUSINESS_OWNER_ONLINE_MENU}/get-product`;

//--business-owner-routes

//--users
export const USERS = BASE_URL_USERS;
export const USERS_REGISTER = `${BASE_URL_USERS}/register`;
export const USERS_LOGIN = `${BASE_URL_USERS}/login`;
export const USERS_RESEND_EMAIL_VERIFICATION = `${BASE_URL_USERS}/resend-email-verification`;
export const USERS_VERIFY_EMAIL_TOKEN = `${BASE_URL_USERS}/verify-email`;
export const USERS_UPDATE_INFORMATION = `${BASE_URL_USERS}/update-information`;
export const USERS_IS_PASSWORD = `${BASE_URL_USERS}/is-password`;
