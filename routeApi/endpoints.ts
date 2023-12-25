import { BASE_URL_BUSINESS_OWNER, BASE_URL_USERS , BASE_URL_ROLL , BASE_URL_SEARCH_INFORMATION , BASE_URL_BUSINESS_OWNER_INFO_SEARCHED } from "./baseUrlNextApi";

//--business-owner-routes---------------------------------------------------------------------------------------------

//--business-owner-registeration
export const BUSINESS_OWNER = BASE_URL_BUSINESS_OWNER;
export const BUSINESS_OWNER_REGISTER = `${BASE_URL_BUSINESS_OWNER}/register`;
export const BUSINESS_OWNER_LOGIN = `${BASE_URL_BUSINESS_OWNER}/login`;
export const BUSINESS_OWNER_RESEND_EMAIL_VERIFICATION = `${BASE_URL_BUSINESS_OWNER}/resend-email-verification`;
export const BUSINESS_OWNER_VERIFY_EMAIL_TOKEN = `${BASE_URL_BUSINESS_OWNER}/verify-email`;
export const BUSINESS_OWNER_CHANGE_PASSWORD = `${BASE_URL_BUSINESS_OWNER}/change-password`;
export const BUSINESS_OWNER_IS_PASSWORD = `${BASE_URL_BUSINESS_OWNER}/is-password`;
export const BUSINESS_OWNER_PROFILE_IMAGE= `${BASE_URL_BUSINESS_OWNER}/upload-image`  
export const BUSINESS_OWNER_IS_PASSWORD_DELETE_PROFILE_IMAGE = `${BASE_URL_BUSINESS_OWNER}/delete-profile-image` 
export const BUSINESS_OWNER_VALIDATOR_PASSWORD =`${BASE_URL_BUSINESS_OWNER}/validator-password`
export const BUSINESS_OWNER_SEND_LOGO_IMAGE= `${BASE_URL_BUSINESS_OWNER}/upload-logo-image`
export const BUSINESS_OWNER_DELETE_LOGO_IMAGE= `${BASE_URL_BUSINESS_OWNER}/delete-logo-image`
export const BUSINESS_OWNER_SEND_WORK_PLACE_IMAGE= `${BASE_URL_BUSINESS_OWNER}/upload-work-place-image`
export const BUSINESS_OWNER_DELETE_WORK_PLACE_IMAGE= `${BASE_URL_BUSINESS_OWNER}/delete-work-place-image`
export const BUSINESS_OWNER_CHANGE_PASSWORD_FORGOT = `${BASE_URL_BUSINESS_OWNER}/change-password-forgot`


//--business-owner-online-menu
export const BUSINESS_OWNER_ONLINE_MENU = `${BASE_URL_BUSINESS_OWNER}/online-menu`;
export const BUSINESS_OWNER_ONLINE_MENU_ALL_Product = `${BUSINESS_OWNER_ONLINE_MENU}/all-products`;
export const BUSINESS_OWNER_ONLINE_MENU_ADD_PRODUCT = `${BUSINESS_OWNER_ONLINE_MENU}/add-product`;
export const BUSINESS_OWNER_ONLINE_MENU_UPDATE_PRODUCT = `${BUSINESS_OWNER_ONLINE_MENU}/update-product`;
export const BUSINESS_OWNER_ONLINE_MENU_DELETE_PRODUCT = `${BUSINESS_OWNER_ONLINE_MENU}/delete-product`;
export const BUSINESS_OWNER_ONLINE_MENU_FINDE_PRODUCT = `${BUSINESS_OWNER_ONLINE_MENU}/get-product`;
export const BUSINESS_OWNER_ONLINE_MENU_IMAGE_PRODUCT = `${BUSINESS_OWNER_ONLINE_MENU}/upload-product-image`
export const BUSINESS_OWNER_ONLINE_MENU_DELETE_IMAGE_PRODUCT = `${BUSINESS_OWNER_ONLINE_MENU}/delete-product-image`
export const BUSINESS_OWNER_ONLINE_MENU_GET_INFO=`${BUSINESS_OWNER_ONLINE_MENU}/get-online-menu-info`

//--business-owner-routes---------------------------------------------------------------------------------------------


//--roll-routes-------------------------------------------------------------------------------------------------------
export const GET_ROLL_INFORMATION = `${BASE_URL_ROLL}/get-roll-algoritm`;
export const SEND_ROLL_ADJUSTED = `${BASE_URL_ROLL}/roll-adjusted-send`
export const GET_ROLL_ADJUSTED = `${BASE_URL_ROLL}/roll-adjusted-get`
export const GET_ROLL_USER = `${BASE_URL_ROLL}/get-roll`



//--roll-routes-------------------------------------------------------------------------------------------------------



//--users-------------------------------------------------------------------------------------------------------------
export const USERS = BASE_URL_USERS;
export const USERS_REGISTER = `${BASE_URL_USERS}/register`;
export const USERS_LOGIN = `${BASE_URL_USERS}/login`;
export const USERS_RESEND_EMAIL_VERIFICATION = `${BASE_URL_USERS}/resend-email-verification`;
export const USERS_VERIFY_EMAIL_TOKEN = `${BASE_URL_USERS}/verify-email`;
export const USERS_UPDATE_INFORMATION = `${BASE_URL_USERS}/update-information`;
export const USERS_IS_PASSWORD = `${BASE_URL_USERS}/is-password`;
export const USERS_GET_DISCOUNT_EYEROLL = `${BASE_URL_USERS}/get-discount-eyeRoll`
export const USERS_REMOVE_EXPIRE_DISCOUNT_EYEROLL=`${BASE_URL_USERS}/remove-expire-discount-eyeRoll`
export const USERS_CHANGE_PASSWORD_FORGOT=`${BASE_URL_USERS}/change-password-forgot`



//--search-information
export const SEARCH_INFORMATION = BASE_URL_SEARCH_INFORMATION

//--get-businessOwner-infos-searched

export const BUSINESSOWNER_SEARCHED_INFOS = BASE_URL_BUSINESS_OWNER_INFO_SEARCHED