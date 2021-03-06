type ObjectMap<Key extends string | number | symbol = any, Value = any> = {
  [key in Key]: Value;
};

declare namespace defs {
  export class AuthUserDepartmentVO {
    /** companyId */
    companyId?: number;

    /** departId */
    departId?: number;

    /** userId */
    userId?: number;
  }

  export class BaiduAddress {
    /** address */
    address?: string;

    /** city */
    city?: string;

    /** district */
    district?: string;

    /** province */
    province?: string;
  }

  export class CompanyVO {
    /** companyFullName */
    companyFullName?: string;

    /** companyLogo */
    companyLogo?: string;

    /** companyName */
    companyName?: string;

    /** corpId */
    corpId?: string;

    /** corpSecret */
    corpSecret?: string;

    /** id */
    id?: number;
  }

  export class Customer {
    /** address */
    address?: string;

    /** area */
    area?: string;

    /** brand */
    brand?: string;

    /** carColor */
    carColor?: string;

    /** carNo */
    carNo?: string;

    /** city */
    city?: string;

    /** companyId */
    companyId?: number;

    /** createdBy */
    createdBy?: string;

    /** createdTime */
    createdTime?: string;

    /** customerName */
    customerName?: string;

    /** customerType */
    customerType?: number;

    /** engineNo */
    engineNo?: string;

    /** gender */
    gender?: string;

    /** id */
    id?: number;

    /** lat */
    lat?: number;

    /** lng */
    lng?: number;

    /** mobile */
    mobile?: string;

    /** moduleName */
    moduleName?: string;

    /** moduleNo */
    moduleNo?: string;

    /** openId */
    openId?: string;

    /** photo */
    photo?: string;

    /** province */
    province?: string;

    /** seires */
    seires?: string;

    /** state */
    state?: number;

    /** updatedBy */
    updatedBy?: string;

    /** updatedTime */
    updatedTime?: string;

    /** vehicleName */
    vehicleName?: string;

    /** vin */
    vin?: string;

    /** yearly */
    yearly?: string;
  }

  export class CustomerVO {
    /** address */
    address?: string;

    /** area */
    area?: string;

    /** brand */
    brand?: string;

    /** city */
    city?: string;

    /** companyId */
    companyId?: number;

    /** customerName */
    customerName?: string;

    /** customerType */
    customerType?: number;

    /** id */
    id?: number;

    /** lat */
    lat?: number;

    /** lng */
    lng?: number;

    /** mobile */
    mobile?: string;

    /** photo */
    photo?: string;

    /** province */
    province?: string;

    /** seires */
    seires?: string;

    /** vehicleName */
    vehicleName?: string;

    /** yearly */
    yearly?: string;
  }

  export class JSONObject {}

  export class LoginInfoVO {
    /** avatar */
    avatar?: string;

    /** companyId */
    companyId?: number;

    /** mobile */
    mobile?: string;

    /** name */
    name?: string;

    /** roles */
    roles?: Array<string>;

    /** userId */
    userId?: number;
  }

  export class Map<T0 = any, T1 = any> {}

  export class MpOrderVO {
    /** ???????????? */
    address?: string;

    /** ???????????? */
    area?: string;

    /** ?????? */
    brand?: string;

    /** ????????? */
    carNo?: string;

    /** ???????????? */
    carNoPicture?: string;

    /** ???????????? */
    city?: string;

    /** ???????????? */
    customerName?: string;

    /** ??????????????????(???45??????) */
    damageBodyPicture1?: string;

    /** ??????????????????(???45??????) */
    damageBodyPicture2?: string;

    /** ??????????????? */
    damageNearPicture?: string;

    /** ????????????ID,?????????????????? */
    insureCustomerId?: number;

    /** ?????? */
    lat?: string;

    /** ?????? */
    lng?: string;

    /** ???????????? */
    mobile?: string;

    /** ???????????? */
    orderDate?: string;

    /** ???????????? 0:??????;1,???????????? */
    payType?: number;

    /** ???????????? */
    province?: string;

    /** ???????????????,?????????:10:00 */
    rangTime?: string;

    /** ?????? */
    remark?: string;

    /** ????????? */
    reportNo?: string;

    /** ?????? */
    seires?: string;

    /** ?????? */
    vehicleName?: string;

    /** ?????? */
    yearly?: string;
  }

  export class Order {
    /** address */
    address?: string;

    /** amount */
    amount?: number;

    /** area */
    area?: string;

    /** beginTime */
    beginTime?: string;

    /** brand */
    brand?: string;

    /** carNo */
    carNo?: string;

    /** carNoPicture */
    carNoPicture?: string;

    /** city */
    city?: string;

    /** companyId */
    companyId?: number;

    /** couponAmount */
    couponAmount?: number;

    /** createdBy */
    createdBy?: string;

    /** createdTime */
    createdTime?: string;

    /** customerId */
    customerId?: number;

    /** customerName */
    customerName?: string;

    /** damageBodyPicture1 */
    damageBodyPicture1?: string;

    /** damageBodyPicture2 */
    damageBodyPicture2?: string;

    /** damageNearPicture */
    damageNearPicture?: string;

    /** drivePicture */
    drivePicture?: string;

    /** endTime */
    endTime?: string;

    /** engineNo */
    engineNo?: string;

    /** evaluateContent */
    evaluateContent?: string;

    /** evaluateLevel */
    evaluateLevel?: number;

    /** finishPicture */
    finishPicture?: string;

    /** gender */
    gender?: string;

    /** id */
    id?: number;

    /** insureCustomerId */
    insureCustomerId?: number;

    /** lat */
    lat?: string;

    /** lng */
    lng?: string;

    /** mobile */
    mobile?: string;

    /** moduleName */
    moduleName?: string;

    /** moduleNo */
    moduleNo?: string;

    /** orderDate */
    orderDate?: string;

    /** orderNo */
    orderNo?: string;

    /** payAmount */
    payAmount?: number;

    /** payState */
    payState?: number;

    /** payTime */
    payTime?: string;

    /** payType */
    payType?: number;

    /** province */
    province?: string;

    /** remark */
    remark?: string;

    /** repairDepart */
    repairDepart?: string;

    /** repairUserId */
    repairUserId?: number;

    /** reportNo */
    reportNo?: string;

    /** seires */
    seires?: string;

    /** sifuArriveTime */
    sifuArriveTime?: string;

    /** sifuFinishTime */
    sifuFinishTime?: string;

    /** sifuGoTime */
    sifuGoTime?: string;

    /** state */
    state?: number;

    /** transactionId */
    transactionId?: string;

    /** updatedBy */
    updatedBy?: string;

    /** updatedTime */
    updatedTime?: string;

    /** vehicleName */
    vehicleName?: string;

    /** vin */
    vin?: string;

    /** yearly */
    yearly?: string;
  }

  export class OrderDetail {
    /** amount */
    amount?: number;

    /** createdBy */
    createdBy?: string;

    /** createdTime */
    createdTime?: string;

    /** id */
    id?: number;

    /** orderId */
    orderId?: number;

    /** price */
    price?: number;

    /** productId */
    productId?: number;

    /** productName */
    productName?: string;

    /** productNo */
    productNo?: string;

    /** qty */
    qty?: number;

    /** remark */
    remark?: string;

    /** state */
    state?: number;

    /** updatedBy */
    updatedBy?: string;

    /** updatedTime */
    updatedTime?: string;
  }

  export class OrderPicture {
    /** createdBy */
    createdBy?: string;

    /** createdTime */
    createdTime?: string;

    /** example */
    example?: string;

    /** id */
    id?: number;

    /** orderId */
    orderId?: number;

    /** picSortBy */
    picSortBy?: number;

    /** picture */
    picture?: string;

    /** productId */
    productId?: number;

    /** productName */
    productName?: string;

    /** productNo */
    productNo?: string;

    /** requirement */
    requirement?: string;

    /** sortBy */
    sortBy?: number;

    /** state */
    state?: number;

    /** title */
    title?: string;

    /** updatedBy */
    updatedBy?: string;

    /** updatedTime */
    updatedTime?: string;
  }

  export class OrderVO {
    /** details */
    details?: Array<defs.OrderDetail>;

    /** order */
    order?: defs.Order;
  }

  export class PermissionVO {
    /** code */
    code?: string;

    /** companyId */
    companyId?: number;

    /** groupName */
    groupName?: string;

    /** id */
    id?: number;

    /** permissionName */
    permissionName?: string;

    /** remark */
    remark?: string;
  }

  export class Product {
    /** companyId */
    companyId?: number;

    /** createdBy */
    createdBy?: string;

    /** createdTime */
    createdTime?: string;

    /** description */
    description?: string;

    /** id */
    id?: number;

    /** needPhoto */
    needPhoto?: number;

    /** photo */
    photo?: string;

    /** price */
    price?: number;

    /** productName */
    productName?: string;

    /** productNo */
    productNo?: string;

    /** productType */
    productType?: number;

    /** requirement */
    requirement?: string;

    /** sortBy */
    sortBy?: number;

    /** state */
    state?: number;

    /** thumbPhoto */
    thumbPhoto?: string;

    /** unit */
    unit?: string;

    /** updatedBy */
    updatedBy?: string;

    /** updatedTime */
    updatedTime?: string;
  }

  export class ProductPicture {
    /** createdBy */
    createdBy?: string;

    /** createdTime */
    createdTime?: string;

    /** example */
    example?: string;

    /** id */
    id?: number;

    /** productId */
    productId?: number;

    /** requirement */
    requirement?: string;

    /** sortBy */
    sortBy?: number;

    /** state */
    state?: number;

    /** title */
    title?: string;

    /** updatedBy */
    updatedBy?: string;

    /** updatedTime */
    updatedTime?: string;
  }

  export class ProductVO {
    /** pictures */
    pictures?: Array<defs.ProductPicture>;

    /** product */
    product?: defs.Product;
  }

  export class QueryModel {
    /** limit */
    limit?: number;

    /** orderBy */
    orderBy?: string;

    /** page */
    page?: number;

    /** params */
    params?: ObjectMap<any, object>;

    /** query */
    query?: string;
  }

  export class RepairUserVO {
    /** beginTime */
    beginTime?: string;

    /** endTime */
    endTime?: string;

    /** title */
    title?: string;

    /** userId */
    userId?: number;

    /** userName */
    userName?: string;

    /** value */
    value?: string;
  }

  export class Resp<T0 = any> {
    /** ????????? */
    code?: number;

    /** ???????????? */
    data?: T0;

    /** ???????????? */
    msg?: string;
  }

  export class RoleVO {
    /** companyId */
    companyId?: number;

    /** id */
    id?: number;

    /** permissionList */
    permissionList?: Array<number>;

    /** remark */
    remark?: string;

    /** roleName */
    roleName?: string;

    /** state */
    state?: number;
  }

  export class TeamDetail {
    /** createdBy */
    createdBy?: string;

    /** createdTime */
    createdTime?: string;

    /** id */
    id?: number;

    /** objectId */
    objectId?: number;

    /** objectName */
    objectName?: string;

    /** state */
    state?: number;

    /** teamId */
    teamId?: number;

    /** updatedBy */
    updatedBy?: string;

    /** updatedTime */
    updatedTime?: string;

    /** userType */
    userType?: number;
  }

  export class TeamInfo {
    /** citys */
    citys?: string;

    /** companyId */
    companyId?: number;

    /** createdBy */
    createdBy?: string;

    /** createdTime */
    createdTime?: string;

    /** id */
    id?: number;

    /** state */
    state?: number;

    /** teamName */
    teamName?: string;

    /** updatedBy */
    updatedBy?: string;

    /** updatedTime */
    updatedTime?: string;

    /** workBeginTime */
    workBeginTime?: string;

    /** workEndTime */
    workEndTime?: string;
  }

  export class TeamVO {
    /** details */
    details?: Array<defs.TeamDetail>;

    /** team */
    team?: defs.TeamInfo;
  }

  export class Type {
    /** typeName */
    typeName?: string;
  }

  export class UserCompany {
    /** avatar */
    avatar?: string;

    /** companyId */
    companyId?: number;

    /** createdBy */
    createdBy?: string;

    /** createdTime */
    createdTime?: string;

    /** email */
    email?: string;

    /** gender */
    gender?: number;

    /** id */
    id?: number;

    /** openUserId */
    openUserId?: string;

    /** position */
    position?: string;

    /** roleId */
    roleId?: number;

    /** state */
    state?: number;

    /** updatedBy */
    updatedBy?: string;

    /** updatedTime */
    updatedTime?: string;

    /** userFullName */
    userFullName?: string;

    /** userId */
    userId?: number;

    /** userName */
    userName?: string;
  }

  export class UserTerritory {
    /** area */
    area?: string;

    /** city */
    city?: string;

    /** companyId */
    companyId?: number;

    /** createdBy */
    createdBy?: string;

    /** createdTime */
    createdTime?: string;

    /** id */
    id?: number;

    /** province */
    province?: string;

    /** state */
    state?: number;

    /** updatedBy */
    updatedBy?: string;

    /** updatedTime */
    updatedTime?: string;

    /** userId */
    userId?: number;
  }

  export class UserVO {
    /** avatar */
    avatar?: string;

    /** companyId */
    companyId?: number;

    /** email */
    email?: string;

    /** gender */
    gender?: number;

    /** id */
    id?: number;

    /** mobile */
    mobile?: string;

    /** position */
    position?: string;

    /** roleId */
    roleId?: number;

    /** territories */
    territories?: Array<defs.UserTerritory>;

    /** userFullName */
    userFullName?: string;

    /** userName */
    userName?: string;
  }

  export class WxJsapiSignature {
    /** appId */
    appId?: string;

    /** nonceStr */
    nonceStr?: string;

    /** signature */
    signature?: string;

    /** timestamp */
    timestamp?: number;

    /** url */
    url?: string;
  }
}

declare namespace API {
  /**
   * Company Controller
   */
  export namespace company {
    /**
     * ????????????????????????
     * /v1/company/getDepartments
     */
    export namespace getDepartments {
      export class Params {
        /** companyId */
        companyId: number;
      }

      export type Response = defs.Resp<JSONArray>;
      export const init: Response;
      export function request(params: Params): Promise<defs.Resp<JSONArray>>;
    }

    /**
     * ???????????????????????????????????????
     * /v1/company/getList
     */
    export namespace getList {
      export class Params {}

      export type Response = defs.Resp<Array<defs.ObjectMap>>;
      export const init: Response;
      export function request(
        params: Params,
      ): Promise<defs.Resp<Array<defs.ObjectMap>>>;
    }

    /**
     * query
     * /v1/company/query
     */
    export namespace query {
      export class Params {}

      export type Response = defs.Resp<defs.JSONObject>;
      export const init: Response;
      export function request(
        params: Params,
        bodyParams: defs.QueryModel,
      ): Promise<defs.Resp<defs.JSONObject>>;
    }

    /**
     * ??????????????????
     * /v1/company/save
     */
    export namespace save {
      export class Params {}

      export type Response = defs.Resp<string>;
      export const init: Response;
      export function request(
        params: Params,
        bodyParams: defs.CompanyVO,
      ): Promise<defs.Resp<string>>;
    }

    /**
     * ??????????????????
     * /v1/company/syncUser
     */
    export namespace syncUser {
      export class Params {
        /** companyId */
        companyId: number;
      }

      export type Response = defs.Resp<string>;
      export const init: Response;
      export function request(params: Params): Promise<defs.Resp<string>>;
    }
  }

  /**
   * Cp Controller
   */
  export namespace cp {
    /**
     * ?????????????????????
     * /v1/cp/login
     */
    export namespace login {
      export class Params {
        /** appId */
        appId?: string;
        /** code */
        code?: string;
      }

      export type Response = defs.Resp<defs.JSONObject>;
      export const init: Response;
      export function request(
        params: Params,
      ): Promise<defs.Resp<defs.JSONObject>>;
    }
  }

  /**
   * Cs Order Controller
   */
  export namespace csOrder {
    /**
     * exports
     * /v1/csorder/exports
     */
    export namespace exports {
      export class Params {}

      export type Response = any;
      export const init: Response;
      export function request(
        params: Params,
        bodyParams: defs.QueryModel,
      ): Promise<any>;
    }

    /**
     * ????????????
     * /v1/csorder/handleOrder
     */
    export namespace handleOrder {
      export class Params {}

      export type Response = defs.Resp<string>;
      export const init: Response;
      export function request(
        params: Params,
        bodyParams: ObjectMap<any, object>,
      ): Promise<defs.Resp<string>>;
    }

    /**
     * query
     * /v1/csorder/query
     */
    export namespace query {
      export class Params {}

      export type Response = defs.Resp<defs.JSONObject>;
      export const init: Response;
      export function request(
        params: Params,
        bodyParams: defs.QueryModel,
      ): Promise<defs.Resp<defs.JSONObject>>;
    }
  }

  /**
   * Customer Controller
   */
  export namespace customer {
    /**
     * exports
     * /v1/customer/exports
     */
    export namespace exports {
      export class Params {}

      export type Response = any;
      export const init: Response;
      export function request(
        params: Params,
        bodyParams: defs.QueryModel,
      ): Promise<any>;
    }

    /**
     * ?????????????????????????????????
     * /v1/customer/getRangeCustomer
     */
    export namespace getRangeCustomer {
      export class Params {
        /** lat */
        lat: number;
        /** lng */
        lng: number;
        /** mileage */
        mileage: number;
      }

      export type Response = defs.Resp<Array<defs.ObjectMap>>;
      export const init: Response;
      export function request(
        params: Params,
      ): Promise<defs.Resp<Array<defs.ObjectMap>>>;
    }

    /**
     * query
     * /v1/customer/query
     */
    export namespace query {
      export class Params {}

      export type Response = defs.Resp<defs.JSONObject>;
      export const init: Response;
      export function request(
        params: Params,
        bodyParams: defs.QueryModel,
      ): Promise<defs.Resp<defs.JSONObject>>;
    }

    /**
     * ??????????????????
     * /v1/customer/save
     */
    export namespace save {
      export class Params {}

      export type Response = defs.Resp<string>;
      export const init: Response;
      export function request(
        params: Params,
        bodyParams: defs.Customer,
      ): Promise<defs.Resp<string>>;
    }

    /**
     * ????????????.
     * /v1/customer/uploadFile
     */
    export namespace uploadFile {
      export class Params {}

      export type Response = defs.Resp<string>;
      export const init: Response;
      export function request(params: Params): Promise<defs.Resp<string>>;
    }
  }

  /**
   * File Controller
   */
  export namespace file {
    /**
     * ????????????.
     * /v1/file/uploadFile
     */
    export namespace uploadFile {
      export class Params {}

      export type Response = defs.Resp;
      export const init: Response;
      export function request(params: Params): Promise<defs.Resp>;
    }
  }

  /**
   * ??????????????????????????????
   */
  export namespace mp {
    /**
     * ????????????
     * /v1/mp/appointment
     */
    export namespace appointment {
      export class Params {}

      export type Response = defs.Resp<string>;
      export const init: Response;
      export function request(
        params: Params,
        bodyParams: defs.MpOrderVO,
      ): Promise<defs.Resp<string>>;
    }

    /**
     * ???????????????????????????
     * /v1/mp/bindMobile
     */
    export namespace bindMobile {
      export class Params {
        /** mobile */
        mobile?: string;
        /** smsCode */
        smsCode?: string;
      }

      export type Response = defs.Resp;
      export const init: Response;
      export function request(params: Params): Promise<defs.Resp>;
    }

    /**
     * ????????????????????????
     * /v1/mp/getAppointmentList
     */
    export namespace getAppointmentList {
      export class Params {}

      export type Response = defs.Resp<Array<defs.ObjectMap>>;
      export const init: Response;
      export function request(
        params: Params,
      ): Promise<defs.Resp<Array<defs.ObjectMap>>>;
    }

    /**
     * ??????????????????????????????
     * /v1/mp/getPayQrCode
     */
    export namespace getPayQrCode {
      export class Params {
        /** orderId */
        orderId?: number;
      }

      export type Response = defs.Resp<string>;
      export const init: Response;
      export function request(params: Params): Promise<defs.Resp<string>>;
    }

    /**
     * ??????????????????
     * /v1/mp/getPromotionList
     */
    export namespace getPromotionList {
      export class Params {}

      export type Response = defs.Resp<Array<defs.ObjectMap>>;
      export const init: Response;
      export function request(
        params: Params,
      ): Promise<defs.Resp<Array<defs.ObjectMap>>>;
    }

    /**
     * ???????????????????????????????????????
     * /v1/mp/getRangTime
     */
    export namespace getRangTime {
      export class Params {
        /** area */
        area?: string;
        /** city */
        city?: string;
        /** orderDate */
        orderDate?: string;
      }

      export type Response = defs.Resp<Array<string>>;
      export const init: Response;
      export function request(
        params: Params,
      ): Promise<defs.Resp<Array<string>>>;
    }

    /**
     * ?????????????????????
     * /v1/mp/login
     */
    export namespace login {
      export class Params {
        /** code */
        code?: string;
        /** mobile */
        mobile?: string;
      }

      export type Response = defs.Resp<defs.CustomerVO>;
      export const init: Response;
      export function request(
        params: Params,
      ): Promise<defs.Resp<defs.CustomerVO>>;
    }

    /**
     * query
     * /v1/mp/query
     */
    export namespace query {
      export class Params {}

      export type Response = defs.Resp<defs.JSONObject>;
      export const init: Response;
      export function request(
        params: Params,
        bodyParams: defs.QueryModel,
      ): Promise<defs.Resp<defs.JSONObject>>;
    }

    /**
     * ?????????????????????
     * /v1/mp/sendSmsCode
     */
    export namespace sendSmsCode {
      export class Params {
        /** mobile */
        mobile?: string;
      }

      export type Response = defs.Resp;
      export const init: Response;
      export function request(params: Params): Promise<defs.Resp>;
    }

    /**
     * ???????????????JSAPI??????
     * /v1/mp/wxConfig
     */
    export namespace wxConfig {
      export class Params {
        /** pageUrl */
        pageUrl?: string;
      }

      export type Response = defs.Resp<defs.WxJsapiSignature>;
      export const init: Response;
      export function request(
        params: Params,
      ): Promise<defs.Resp<defs.WxJsapiSignature>>;
    }
  }

  /**
   * ??????????????????
   */
  export namespace order {
    /**
     * ????????????
     * /v1/order/beginRepair
     */
    export namespace beginRepair {
      export class Params {
        /** id */
        id?: number;
      }

      export type Response = defs.Resp<string>;
      export const init: Response;
      export function request(params: Params): Promise<defs.Resp<string>>;
    }

    /**
     * ????????????
     * /v1/order/cannel
     */
    export namespace cannel {
      export class Params {
        /** id */
        id?: number;
      }

      export type Response = defs.Resp<string>;
      export const init: Response;
      export function request(params: Params): Promise<defs.Resp<string>>;
    }

    /**
     * ????????????
     * /v1/order/delete
     */
    export namespace remove {
      export class Params {
        /** id */
        id?: number;
      }

      export type Response = defs.Resp<string>;
      export const init: Response;
      export function request(params: Params): Promise<defs.Resp<string>>;
    }

    /**
     * ????????????
     * /v1/order/evaluate
     */
    export namespace evaluate {
      export class Params {
        /** content */
        content?: string;
        /** id */
        id?: number;
        /** rate */
        rate?: number;
      }

      export type Response = defs.Resp<string>;
      export const init: Response;
      export function request(params: Params): Promise<defs.Resp<string>>;
    }

    /**
     * exports
     * /v1/order/exports
     */
    export namespace exports {
      export class Params {}

      export type Response = any;
      export const init: Response;
      export function request(
        params: Params,
        bodyParams: defs.QueryModel,
      ): Promise<any>;
    }

    /**
     * ????????????
     * /v1/order/finishRepair
     */
    export namespace finishRepair {
      export class Params {
        /** finishPicture */
        finishPicture?: string;
        /** id */
        id?: number;
      }

      export type Response = defs.Resp<string>;
      export const init: Response;
      export function request(params: Params): Promise<defs.Resp<string>>;
    }

    /**
     * ????????????????????????
     * /v1/order/getAllRepair
     */
    export namespace getAllRepair {
      export class Params {
        /** companyId */
        companyId?: string;
      }

      export type Response = defs.Resp<Array<defs.UserCompany>>;
      export const init: Response;
      export function request(
        params: Params,
      ): Promise<defs.Resp<Array<defs.UserCompany>>>;
    }

    /**
     * ?????????????????????????????????
     * /v1/order/getBaiduAddress
     */
    export namespace getBaiduAddress {
      export class Params {
        /** lat */
        lat?: string;
        /** lng */
        lng?: string;
      }

      export type Response = defs.Resp<defs.BaiduAddress>;
      export const init: Response;
      export function request(
        params: Params,
      ): Promise<defs.Resp<defs.BaiduAddress>>;
    }

    /**
     * ????????????7??????????????????
     * /v1/order/getOrderDateList
     */
    export namespace getOrderDateList {
      export class Params {
        /** area */
        area?: string;
        /** city */
        city?: string;
        /** companyId */
        companyId?: string;
        /** orderDate */
        orderDate?: string;
        /** orderId */
        orderId?: string;
      }

      export type Response = defs.Resp<JSONArray>;
      export const init: Response;
      export function request(params: Params): Promise<defs.Resp<JSONArray>>;
    }

    /**
     * ??????????????????
     * /v1/order/getOrderPictures
     */
    export namespace getOrderPictures {
      export class Params {
        /** id */
        id?: number;
      }

      export type Response = defs.Resp<
        defs.ObjectMap<string, Array<defs.OrderPicture>>
      >;
      export const init: Response;
      export function request(
        params: Params,
      ): Promise<defs.Resp<defs.ObjectMap<string, Array<defs.OrderPicture>>>>;
    }

    /**
     * ????????????????????????
     * /v1/order/getRepairUser
     */
    export namespace getRepairUser {
      export class Params {
        /** area */
        area?: string;
        /** city */
        city?: string;
        /** companyId */
        companyId?: string;
        /** orderDate */
        orderDate?: string;
        /** orderId */
        orderId?: string;
      }

      export type Response = defs.Resp<Array<defs.RepairUserVO>>;
      export const init: Response;
      export function request(
        params: Params,
      ): Promise<defs.Resp<Array<defs.RepairUserVO>>>;
    }

    /**
     * notifyCallback
     * /v1/order/notifyCallback
     */
    export namespace notifyCallback {
      export class Params {}

      export type Response = any;
      export const init: Response;
      export function request(params: Params): Promise<any>;
    }

    /**
     * notifyCallback
     * /v1/order/notifyCallback
     */
    export namespace headNotifyCallback {
      export class Params {}

      export type Response = any;
      export const init: Response;
      export function request(params: Params): Promise<any>;
    }

    /**
     * notifyCallback
     * /v1/order/notifyCallback
     */
    export namespace postNotifyCallback {
      export class Params {}

      export type Response = any;
      export const init: Response;
      export function request(params: Params): Promise<any>;
    }

    /**
     * notifyCallback
     * /v1/order/notifyCallback
     */
    export namespace putNotifyCallback {
      export class Params {}

      export type Response = any;
      export const init: Response;
      export function request(params: Params): Promise<any>;
    }

    /**
     * notifyCallback
     * /v1/order/notifyCallback
     */
    export namespace deleteNotifyCallback {
      export class Params {}

      export type Response = any;
      export const init: Response;
      export function request(params: Params): Promise<any>;
    }

    /**
     * notifyCallback
     * /v1/order/notifyCallback
     */
    export namespace optionsNotifyCallback {
      export class Params {}

      export type Response = any;
      export const init: Response;
      export function request(params: Params): Promise<any>;
    }

    /**
     * notifyCallback
     * /v1/order/notifyCallback
     */
    export namespace patchNotifyCallback {
      export class Params {}

      export type Response = any;
      export const init: Response;
      export function request(params: Params): Promise<any>;
    }

    /**
     * query
     * /v1/order/query
     */
    export namespace query {
      export class Params {}

      export type Response = defs.Resp<defs.JSONObject>;
      export const init: Response;
      export function request(
        params: Params,
        bodyParams: defs.QueryModel,
      ): Promise<defs.Resp<defs.JSONObject>>;
    }

    /**
     * ????????????
     * /v1/order/repairGo
     */
    export namespace repairGo {
      export class Params {
        /** id */
        id?: number;
      }

      export type Response = defs.Resp<string>;
      export const init: Response;
      export function request(params: Params): Promise<defs.Resp<string>>;
    }

    /**
     * ??????????????????
     * /v1/order/save
     */
    export namespace save {
      export class Params {}

      export type Response = defs.Resp<string>;
      export const init: Response;
      export function request(
        params: Params,
        bodyParams: defs.OrderVO,
      ): Promise<defs.Resp<string>>;
    }

    /**
     * ????????????
     * /v1/order/submit
     */
    export namespace submit {
      export class Params {
        /** id */
        id?: number;
      }

      export type Response = defs.Resp<string>;
      export const init: Response;
      export function request(params: Params): Promise<defs.Resp<string>>;
    }

    /**
     * ??????????????????
     * /v1/order/updatePicture
     */
    export namespace updatePicture {
      export class Params {
        /** fileUrl */
        fileUrl?: string;
        /** id */
        id?: number;
      }

      export type Response = defs.Resp<string>;
      export const init: Response;
      export function request(params: Params): Promise<defs.Resp<string>>;
    }
  }

  /**
   * ????????????
   */
  export namespace permission {
    /**
     * ????????????
     * /v1/permission/delete
     */
    export namespace remove {
      export class Params {
        /** id */
        id?: number;
      }

      export type Response = defs.Resp<string>;
      export const init: Response;
      export function request(params: Params): Promise<defs.Resp<string>>;
    }

    /**
     * ????????????
     * /v1/permission/getPermission
     */
    export namespace getPermission {
      export class Params {
        /** companyId */
        companyId?: number;
      }

      export type Response = defs.Resp<Array<defs.JSONObject>>;
      export const init: Response;
      export function request(
        params: Params,
      ): Promise<defs.Resp<Array<defs.JSONObject>>>;
    }

    /**
     * query
     * /v1/permission/query
     */
    export namespace query {
      export class Params {}

      export type Response = defs.Resp<defs.JSONObject>;
      export const init: Response;
      export function request(
        params: Params,
        bodyParams: defs.QueryModel,
      ): Promise<defs.Resp<defs.JSONObject>>;
    }

    /**
     * ????????????
     * /v1/permission/save
     */
    export namespace save {
      export class Params {}

      export type Response = defs.Resp<string>;
      export const init: Response;
      export function request(
        params: Params,
        bodyParams: defs.PermissionVO,
      ): Promise<defs.Resp<string>>;
    }
  }

  /**
   * Product Controller
   */
  export namespace product {
    /**
     * query
     * /v1/product/query
     */
    export namespace query {
      export class Params {}

      export type Response = defs.Resp<defs.JSONObject>;
      export const init: Response;
      export function request(
        params: Params,
        bodyParams: defs.QueryModel,
      ): Promise<defs.Resp<defs.JSONObject>>;
    }

    /**
     * ??????????????????
     * /v1/product/save
     */
    export namespace save {
      export class Params {}

      export type Response = defs.Resp<string>;
      export const init: Response;
      export function request(
        params: Params,
        bodyParams: defs.ProductVO,
      ): Promise<defs.Resp<string>>;
    }
  }

  /**
   * Role Controller
   */
  export namespace role {
    /**
     * ??????????????????
     * /v1/role/delete
     */
    export namespace remove {
      export class Params {
        /** roleId */
        roleId?: number;
      }

      export type Response = defs.Resp<string>;
      export const init: Response;
      export function request(params: Params): Promise<defs.Resp<string>>;
    }

    /**
     * query
     * /v1/role/query
     */
    export namespace query {
      export class Params {}

      export type Response = defs.Resp<defs.JSONObject>;
      export const init: Response;
      export function request(
        params: Params,
        bodyParams: defs.QueryModel,
      ): Promise<defs.Resp<defs.JSONObject>>;
    }

    /**
     * ????????????
     * /v1/role/save
     */
    export namespace save {
      export class Params {}

      export type Response = defs.Resp<string>;
      export const init: Response;
      export function request(
        params: Params,
        bodyParams: defs.RoleVO,
      ): Promise<defs.Resp<string>>;
    }
  }

  /**
   * Team Controller
   */
  export namespace team {
    /**
     * ????????????
     * /v1/team/delete
     */
    export namespace remove {
      export class Params {
        /** id */
        id?: number;
      }

      export type Response = defs.Resp<string>;
      export const init: Response;
      export function request(params: Params): Promise<defs.Resp<string>>;
    }

    /**
     * query
     * /v1/team/query
     */
    export namespace query {
      export class Params {}

      export type Response = defs.Resp<defs.JSONObject>;
      export const init: Response;
      export function request(
        params: Params,
        bodyParams: defs.QueryModel,
      ): Promise<defs.Resp<defs.JSONObject>>;
    }

    /**
     * ??????????????????
     * /v1/team/save
     */
    export namespace save {
      export class Params {}

      export type Response = defs.Resp<string>;
      export const init: Response;
      export function request(
        params: Params,
        bodyParams: defs.TeamVO,
      ): Promise<defs.Resp<string>>;
    }
  }

  /**
   * ??????????????????
   */
  export namespace user {
    /**
     * ??????????????????
     * /v1/user/changeCompany
     */
    export namespace changeCompany {
      export class Params {
        /** companyId */
        companyId?: number;
      }

      export type Response = defs.Resp<Array<string>>;
      export const init: Response;
      export function request(
        params: Params,
      ): Promise<defs.Resp<Array<string>>>;
    }

    /**
     * ?????????????????????
     * /v1/user/findDepartmentList
     */
    export namespace findDepartmentList {
      export class Params {
        /** companyId */
        companyId: number;
        /** userId */
        userId: number;
      }

      export type Response = defs.Resp<Array<number>>;
      export const init: Response;
      export function request(
        params: Params,
      ): Promise<defs.Resp<Array<number>>>;
    }

    /**
     * ??????????????????
     * /v1/user/info
     */
    export namespace info {
      export class Params {}

      export type Response = defs.Resp<defs.LoginInfoVO>;
      export const init: Response;
      export function request(
        params: Params,
      ): Promise<defs.Resp<defs.LoginInfoVO>>;
    }

    /**
     * ??????
     * /v1/user/login
     */
    export namespace login {
      export class Params {
        /** ?????? */
        password?: string;
        /** ????????? */
        username?: string;
      }

      export type Response = defs.Resp;
      export const init: Response;
      export function request(params: Params): Promise<defs.Resp>;
    }

    /**
     * ??????
     * /v1/user/logout
     */
    export namespace logout {
      export class Params {}

      export type Response = defs.Resp<string>;
      export const init: Response;
      export function request(params: Params): Promise<defs.Resp<string>>;
    }

    /**
     * query
     * /v1/user/query
     */
    export namespace query {
      export class Params {}

      export type Response = defs.Resp<defs.JSONObject>;
      export const init: Response;
      export function request(
        params: Params,
        bodyParams: defs.QueryModel,
      ): Promise<defs.Resp<defs.JSONObject>>;
    }

    /**
     * ??????????????????
     * /v1/user/save
     */
    export namespace save {
      export class Params {}

      export type Response = defs.Resp<string>;
      export const init: Response;
      export function request(
        params: Params,
        bodyParams: defs.UserVO,
      ): Promise<defs.Resp<string>>;
    }

    /**
     * ???????????????
     * /v1/user/syncCorp
     */
    export namespace syncCorp {
      export class Params {}

      export type Response = defs.Resp<string>;
      export const init: Response;
      export function request(params: Params): Promise<defs.Resp<string>>;
    }

    /**
     * ???????????????????????????
     * /v1/user/updateAuthUserDepartment
     */
    export namespace updateAuthUserDepartment {
      export class Params {}

      export type Response = defs.Resp;
      export const init: Response;
      export function request(
        params: Params,
        bodyParams: Array<defs.AuthUserDepartmentVO>,
      ): Promise<defs.Resp>;
    }

    /**
     * ??????????????????????????????????????????
     * /v1/user/userAndDep
     */
    export namespace getUserAndDep {
      export class Params {
        /** companyId */
        companyId: number;
        /** depId */
        depId: number;
      }

      export type Response = defs.Resp<Array<defs.ObjectMap>>;
      export const init: Response;
      export function request(
        params: Params,
      ): Promise<defs.Resp<Array<defs.ObjectMap>>>;
    }
  }
}
