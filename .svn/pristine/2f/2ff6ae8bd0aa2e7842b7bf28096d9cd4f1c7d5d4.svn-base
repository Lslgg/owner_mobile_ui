import Cookies from 'js-cookie';

const Authorizatior = 'Authorizatior';
const UserToken = 'User-Token';
const TimeSpanKey = 'User-Timespan';
const UserInfo = 'User-Info';
const AppId = 'App-Id';

export function getAuthorizatior() {
  return Cookies.get(Authorizatior);
}

export function setAuthorizatior(token: any) {
  return Cookies.set(Authorizatior, token);
}

export function getUserToken() {
  return Cookies.get(UserToken);
}

export function setUserToken(token: any) {
  return Cookies.set(UserToken, token);
}

export function removeAuthorizatior() {
  return Cookies.remove(Authorizatior);
}

export function removeUserToken() {
  return Cookies.remove(Authorizatior);
}

export function getTimeSpan() {
  return Cookies.get(TimeSpanKey);
}

export function setTimeSpan(timespan: any) {
  return Cookies.set(TimeSpanKey, timespan);
}

export function removeTimeSpan() {
  return Cookies.remove(TimeSpanKey);
}

export function getUserInfo() {
  const info = Cookies.get(UserInfo);
  if (info) {
    const user: UserInfo = JSON.parse(info);
    return user;
  }
  return null;
}

/** 获取门店编号 */
export function getStoreNumber() {
  const user = getUserInfo();
  if (user !== null) {
    return user.storeNumber;
  }
  return '';
}
/** 获取门店名称 */
export function getStoreName() {
  const user = getUserInfo();
  if (user !== null) {
    return user.storeName;
  }
  return '';
}

export function setUserInfo(user: any) {
  return Cookies.set(UserInfo, JSON.stringify(user));
}

export function removeUserInfo() {
  return Cookies.remove(UserInfo);
}

export function getAppId() {
  return Cookies.get(AppId);
}

export function setAppId(appId: string) {
  return Cookies.set(AppId, appId);
}
