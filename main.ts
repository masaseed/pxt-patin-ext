/*
 *  program name    : main.js
 *  date/author     : 2018/12/01 MasaSeed
 *  update/auther   :
 *
 */

enum myBumperPos {
    //% block="左"
    left,
    //% block="後"
    back,
    //% block="右"
    right,
    //% block="前"
    front,
    //% block="左前"
    front_left,
    //% block="左後"
    rear_left,
    //% block="右後"
    rear_right,
    //% block="右前"
    front_right,
}

enum myDirec {
    //% block="前"
    front,
    //% block="左"
    left,
    //% block="後"
    back,
    //% block="右"
    right,
    //% block="左回転"
    ccw,
    //% block="右回転"
    cw,
    //% block="停止"
    stop
}

/**
 * カスタムブロック
 */
//% weight=100 color=#0fbc11 icon=""
namespace patin {

    /**
     * TODO: 決まった方向 xx 歩進ませる
     * @param direc ここでパラメーターの説明をしてください。, eg: myDirec.Stop
     * @param value ここでパラメーターの説明をしてください。, eg: 1
     */
    //% block="%direc |方向に %value | 歩動く"
    export function doStepMove(direc: myDirec, value: number): void {
        if (direc == myDirec.front) {
            doStepFowrd(value)
        } else if (direc == myDirec.left) {
            doStepLeft(value)
        } else if (direc == myDirec.back) {
            doStepBack(value)
        } else if (direc == myDirec.right) {
            doStepRight(value)
        } else if (direc == myDirec.ccw) {
            doStepCCW(value)
        } else if (direc == myDirec.cw) {
            doStepCW(value)
        } else {
            doStop(value)
        }
    }

    /**
     * TODO: 決まった方向に進ませる
     * @param direc ここでパラメーターの説明をしてください。, eg: myDirec.Stop
     * @param value ここでパラメーターの説明をしてください。, eg: 0.02
     */
    //% block="%direc |方向に速度 %value | m/秒で動く"
    export function doMove(direc: myDirec, value: number): void {
        if (direc == myDirec.front) {
            doFowrd(value)
        } else if (direc == myDirec.left) {
            doLeft(value)
        } else if (direc == myDirec.back) {
            doBack(value)
        } else if (direc == myDirec.right) {
            doRight(value)
        } else if (direc == myDirec.ccw) {
            doCCW(value)
        } else if (direc == myDirec.cw) {
            doCW(value)
        } else {
            doStop(value)
        }
    }

    function doFowrd(value: number) {
        serial.writeString("F")
    }
    function doBack(value: number) {
        serial.writeString("B")
    }
    function doLeft(value: number) {
        serial.writeString("L")
    }
    function doRight(value: number) {
        serial.writeString("R")
    }
    function doCW(value: number) {
        serial.writeString("r")
    }
    function doCCW(value: number) {
        serial.writeString("l")
    }
    function doStop(value: number) {
        serial.writeString("S")
    }

    function doStepFowrd(value: number) {
        serial.writeString("F")
    }
    function doStepBack(value: number) {
        serial.writeString("B")
    }
    function doStepLeft(value: number) {
        serial.writeString("L")
    }
    function doStepRight(value: number) {
        serial.writeString("R")
    }
    function doStepCW(value: number) {
        serial.writeString("r")
    }
    function doStepCCW(value: number) {
        serial.writeString("l")
    }
    /**
     * TODO: バンパーの状態を見る
     * @param pos ここでパラメーターの説明をしてください。, eg: myBumperPos.front
     */
    //% block="バンパー %pos | の状態"
    export function isBumper(pos: myBumperPos): number {
        let rtn = 0;
        return rtn
    }

    /**
    * TODO: ロボットアームを上げる
    */
    //% block="腕を上げる"
    export function UpArm(): void {
    }

    /**
    * TODO:　ロボットアームを下げる
    */
    //% block="腕を下げる"
    export function DownArm(): void {
    }

    /**
    * TODO: グリッパーを開く
    */
    //% block="グリッパーを開く"
    export function OpenGriper(): void {
    }

    /**
    * TODO: グリッパーを閉じる
    */
    //% block="グリッパーを閉じる"
    export function CloseGriper(): void {
    }

    /**
    * TODO: 巡回を開始する
    */
    //% block="巡回開始"
    export function StartPatroll(): void {
    }

    /**
    * TODO: 巡回を停止する
    */
    //% block="巡回停止"
    export function StopPatroll(): void {
    }

    /**
     * TODO: 充電を開始する
     */
    //% block="充電開始"
    export function StartCharge(): void {
    }

    /**
     * TODO: 充電をやめる
     */
    //% block="充電終了"
    export function StopCharge(): void {
    }

}
