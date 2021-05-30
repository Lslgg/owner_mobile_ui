/**
 * 单例
 */
export default class SingletonClass {

  public static ins() {
    if (!this._ins) {
      this._ins = new this
    }
    return this._ins
  }

  private static _ins: SingletonClass

  protected constructor() {
    console.log('signletionClass')
  }
}