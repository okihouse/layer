import { LandingButtonType } from "../type/LandingButtonType"
import { LandingDbItemType } from "../type/LandingDbItemType"
import { LandingItemType } from "../type/LandingItemType"

export namespace LandingModel {
    export interface ILandingModel {
        id: string
        title: string

        edited: string
        created: string

        items: Array<ILandingItemModel>
    }

    export interface IAssignLandignDbItemModel {
        id: string
        label: string
        isRequired: boolean
        type: LandingDbItemType
        items: Array<string>
    }

    export interface ILandingItemModel {
        type: LandingItemType
        video?: { url?: string }
        image?: { url?: string, draggable?: { url: string, x: number, y: number, width?: number, height?: number } }
        form?: Array<IAssignLandignDbItemModel>
        button?: ILandingButtonModel
    }

    export interface ILandingButtonModel {
        type: LandingButtonType
        image?: string
        name?: string
    }

    export interface ILandingScriptModel {
        type: string
        script: string
    }
}